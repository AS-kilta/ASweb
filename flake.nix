{
  description = "AS-guild homesite";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

    flake-parts.url = "github:hercules-ci/flake-parts";
    flake-parts.inputs.nixpkgs-lib.follows = "nixpkgs";

    git-hooks.url = "github:cachix/git-hooks.nix";
    git-hooks.inputs.nixpkgs.follows = "nixpkgs";
  };

  outputs = {flake-parts, ...} @ inputs:
    flake-parts.lib.mkFlake {inherit inputs;} {
      systems = [
        "aarch64-darwin"
        "aarch64-linux"
        "x86_64-linux"
      ];

      imports = with inputs; [
        git-hooks.flakeModule
      ];

      perSystem = {
        config,
        pkgs,
        ...
      }: {
        pre-commit = {
          check.enable = true;
          settings.package = pkgs.prek;
          settings.hooks = {
            alejandra.enable = true;
            deadnix.enable = true;
            statix.enable = true;
          };
        };

        packages.default = pkgs.buildNpmPackage {
          pname = "ASweb";
          version = "2.0.0";

          src = ./.;

          npmDeps = pkgs.importNpmLock {npmRoot = ./.;};
          npmConfigHook = pkgs.importNpmLock.npmConfigHook;
          nodejs = pkgs.nodejs_24;

          installPhase = ''
            mkdir "$out"
            mv dist/* "$out"
          '';
        };

        devShells.default = pkgs.mkShellNoCC {
          inputsFrom = with config; [
            pre-commit.devShell
            packages.default
          ];

          packages = with pkgs; [
            importNpmLock.hooks.linkNodeModulesHook
          ];

          npmDeps = pkgs.importNpmLock.buildNodeModules {
            inherit (config.packages.default) nodejs;
            npmRoot = ./.;
          };

          shellHook = with config; ''
            ${pre-commit.shellHook}

            # disable Astro telemetry
            npx astro telemetry disable
          '';
        };
      };
    };
}
