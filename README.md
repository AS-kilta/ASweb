# New AS Web

## Technologies

- Gatsby 5 & React 18
- TypeScript 4.1
- Sass 1.36

and various other plugins, packages etc. as dependencies

## How to set up development environment

### Requirements
<details>
<summary>Git and git lfs</summary>

Download and install git from https://git-scm.com/ or with your preferred package manager. You might need to install lfs seperately.

Run `git lfs install` to enable git storing images and other large files separate from the git repository.

</details>

<details>
<summary>Node 18 or higher</summary>

**Windows**

Download installation package from https://nodejs.org and run it.

**Linux & macOS**

The easiest way to install and switch between node versions is to use nvm script (https://github.com/nvm-sh/nvm). Follow to installation instructions in README to install the tool and use it to install node.

</details>

Clone this repository and change into the directory (or fork it first and then clone the fork). 

```sh
git clone https://github.com/AS-kilta/ASweb.git
cd ASweb
```

Install dependencies with

```sh
npm install
```

## How to run locally (development build)

In project directory, run development build and start temporary Web server by running

```sh
npm start
```

The website is now accessible at http://localhost:8000. The development server watches file changes and rebuilds the site automatically, if changes are made in files.

And finally, nauti spagetista!
