{
  description = "AS-guild homesite";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-24.11";
    systems.url = "github:nix-systems/default";
  };

  outputs = { self, nixpkgs, systems, ... }@inputs:
    let forEachSystem = nixpkgs.lib.genAttrs (import systems); in
  {
    devShells = forEachSystem (
      system:
        let
          pkgs = nixpkgs.legacyPackages.${system};
          nodejs = pkgs.nodejs_18;
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
