# New AS Web

## Technologies

- Gatsby 5 & React 18
- TypeScript 5.4
- Sass 1.77

and various other plugins, packages etc. as dependencies

## How to set up development environment

- Install Node 18.x.x or higher.
  - Node will sometimes throw an error when compiling with a higher Node version. You can combat this by switching the Node version with `nvm use 18`.
- Git is required for version management.

### Node with Windows

Download installation package from https://nodejs.org and run it.

### Node with Linux & macOS

The easiest way to install and switch between node versions is to use nvm script (https://github.com/nvm-sh/nvm). Follow to installation instructions in README to install the tool and use it to install node.

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

## How to run (development build)

Run `npm start` or `npm run develop` in project directory. This runs the `gatsby develop` command, which runs the development build
and starts the development server with file watching enabled. After the build completes, the site is accessible at http://localhost:8000.

Running `npm run clean` before compiling the development build sometimes helps with errors like
seqmentation fault during compilation or `localhost:8000` only showing a blank screen after a successful compilation.

## How to run (production build)

Run `npm run production` in project directory. This first cleans the old build files by running `gatsby clean`, runs the production build on the site (`gatsby build`)
and finally starts the server. The source files are not being watched while the server is running, i.e. changes in source files do not trigger a rebuild.
After the build completes, the site is accessible at http://localhost:9000.

## How to contribute

Create a new local branch for your feature. Develop, test and commit your changes, then push your local branch to remote. Open a pull request from your branch to
master. The GitHub Actions pipeline builds and deploys the development version of the site to a staging environment. After the PR is merged to master, the pipeline runs builds and deploys the site to the production environment.

**And finally, nauti spagetista!**
