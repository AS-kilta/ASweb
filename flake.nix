{
  description = "AS-guild homesite";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

    flake-parts.url = "github:hercules-ci/flake-parts";
    flake-parts.inputs.nixpkgs-lib.follows = "nixpkgs";
  };

  outputs = {flake-parts, ...} @ inputs:
    flake-parts.lib.mkFlake {inherit inputs;} {
      systems = [
        "aarch64-darwin"
        "aarch64-linux"
        "x86_64-linux"
      ];

      perSystem = {
        config,
        pkgs,
        ...
      }: {
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
            packages.default
          ];

          packages = with pkgs; [
            importNpmLock.hooks.linkNodeModulesHook
          ];

          npmDeps = pkgs.importNpmLock.buildNodeModules {
            inherit (config.packages.default) nodejs;
            npmRoot = ./.;
          };
        };
      };
    };
}
