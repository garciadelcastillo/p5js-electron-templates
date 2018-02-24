# Electron p5.js Templates

A set of templates to create p5.js Electron apps.

***

This is a minimal Electron application with p5.js based on the [Quick Start Guide](http://electron.atom.io/docs/tutorial/quick-start) within the Electron documentation.

Use this app along with the [Electron API Demos](http://electron.atom.io/#get-started) app for API code examples to help you get started.

A basic Electron application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.

You can learn more about each of these components within the [Quick Start Guide](http://electron.atom.io/docs/tutorial/quick-start).

Learn more about Electron and its API in the [documentation](http://electron.atom.io/docs/).

## Usage

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.

From your command line:

```bash
# Clone this repository
git clone https://github.com/garciadelcastillo/electron-p5js-quick-start
# Go into the repository
cd electron-p5js-quick-start
# Install dependencies
npm install
# Run the app
npm start
```

## Package

### macOS

Build you app as an `.app` (and installable `.dmg`) for macOS.

For now, you need to comment the line of `electron-reload` in `main.js` for the packaged app to run.

```
npm run dist
```

### Windows & Linux

TODO

## Other Example Apps

For more example apps, see the
[list of boilerplates](http://electron.atom.io/community/#boilerplates)
created by the awesome electron community.

#### License [CC0 1.0 (Public Domain)](LICENSE.md)
