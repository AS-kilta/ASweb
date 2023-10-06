# New AS Web

## Technologies

- Gatsby 5 & React 18
- TypeScript 4.1
- Sass 1.36

and various other plugins, packages etc. as dependencies

## How to set up development environment

Install Node 18.x.x or higher. Git is required for version management.

**Windows**

Download installation package from https://nodejs.org and run it.

**Linux & macOS**

The easiest way to install and switch between node versions is to use nvm script (https://github.com/nvm-sh/nvm). Follow to installation instructions in README to install the tool and use it to install node.

**After installing node**

Install gatsby-cli globally (you may need root privileges).

```
npm i -g gatsby-cli
```

Clone this repository and change into the directory (or fork it first and then clone the fork).

```
git clone https://github.com/AS-kilta/ASweb.git

cd ASweb
```

Install dependencies with

```
npm i
```

## How to run (development build)

In project directory, run development build and start temporary Web server by running

```
gatsby develop
```

The website is now accessible at http://localhost:8000. The development server watches file changes and rebuilds the site automatically, if changes are made in files.

And finally, nauti spagetista!
