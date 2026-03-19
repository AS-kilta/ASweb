{
  description = "AS-guild homesite";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    systems.url = "github:nix-systems/default";
  };

  outputs = { self, nixpkgs, systems, ... }@inputs:
    let forEachSystem = nixpkgs.lib.genAttrs (import systems); in
  {
    devShells = forEachSystem (
      system:
        let
          pkgs = nixpkgs.legacyPackages.${system};
          nodejs = pkgs.nodejs_24;
        in
        {
          default = pkgs.mkShell {
            buildInputs = [
              nodejs
            ];
          };
        }
    );
  };
}
