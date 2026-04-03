# ASweb

> [!IMPORTANT]  
> There has been major modifications in this codebase. If you have cloned this repository before 2026-04-02, use caution when contributing! Please refer to [ASweb-v2.md](./ASweb-v2.md) for instructions.

## Technologies

- Astro 6 & React 18
- TypeScript 5.9
- Sass 1.77

and various other plugins, packages etc. as dependencies

## How to set up development environment

- Install Node 24 or higher.
  - Node will sometimes throw an error when compiling with a higher Node version. You can combat this by switching the Node version with `nvm use 24`.
- Git is required for version management.

### Node with Windows

Download installation package from https://nodejs.org and run it.

### Node with Linux & macOS

The easiest way to install and switch between node versions is to use nvm script [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm). Follow to installation instructions in README to install the tool and use it to install node.

### Node with Nix Flake

This repository has a Nix Flake with a development shell. If you have Nix package manager on your machine, you can just run `nix develop` and a shell with the correct node version will open.

### Clone the repository and install dependencies

Clone this repository and change into the directory.

```
git clone https://github.com/AS-kilta/ASweb.git

cd ASweb
```

Install dependencies with

```
npm i
```

## How to run development server

Run `npm start` or `npm run dev` in project directory. This runs the `astro dev` command, which runs the development build and starts the development server with file watching enabled. After the build completes, the site is accessible at [http://localhost:4321](http://localhost:4321).

## How to build for production

Run `npm run build` in project directory. This builds the production version of the site into `/dist` directory in the project root.

## How to contribute

1. Create a new local branch for your feature.
2. Develop, test and commit your changes. Use `npm run validate` to run all the necessary tests.
3. Push your local branch to remote. Open a pull request from your branch to `master`.
4. The GitHub Actions pipeline builds and deploys the development version of the site to a staging environment.
5. After the PR is merged to `master`, the pipeline runs builds and deploys the site to the production environment.

**And finally, nauti spagetista!**
