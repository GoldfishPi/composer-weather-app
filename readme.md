# SuperCell 0.1.8 (YouTube Build 2016)

> CHANGELOG 1.0.8, May 18, 2016     
> Added react-router, hashHistory on by default, can change to browserHistory. Reorganized components to reflect react-router structure.  Added a react-styled style-guide.

SuperCell is my current build system for Node, Moble and ES6+ React apps.  This build system replaces jlGulp and renames the build to reflect that it is no longer tied to any particular technology but will adapt over time as new and better technologies emerge.

Since this is used for my own projects I am currently not accepting public pull requests on this repo.  Other then that please feel free to use it however you like.

## YouTube Demo
[![SuperCell YouTube Demo](http://img.youtube.com/vi/BwzjYK1Hd0Y/0.jpg)](https://www.youtube.com/watch?v=BwzjYK1Hd0Y)

## Install Packages

After cloning the project to your computer run the following command in your terminal to install all required node packages.

    sudo npm install

The first time you run gulp the build may take a little longer as it compiles and builds out the "public/css" and "public/js" folders and files.

## Running App
This build system can be run in two modes: development and production.  Use development when you are developing your app.  In this mode your JS will not be minified, React will include all its warnings and your CSS will contain sourcemaps to the original SCSS files.  When you are ready to deploy you can start the app in production mode which will turn off React warnings, uglify your JS, and turn off sourcemaps for both JS and CSS.

    npm run dev  (starts app in development mode)  
    npm run build (starts app in production mode)


## Features

- ES6+ with Babel.  Use all the new niffty ES6+ features and transpile down to ES5.
- Browserify: JSX transforms, ES6 modules.
- React Ready!
- Uglify: minification.
- BrowserSync.
- Sass / flexbox ready (IE10+), layout for everygreen browsers.

## How to use

Precompiled JS and SCSS files are in the src folder and compile to public.  All other files including HTML, image etc. are in public.  BrowserSync runs from public and serves as the "Dist" folder for client-side apps.


## How to remove React
If you would like to remove React from the build just follow the steps below.

1. In terminal remove react packages.

		npm uninstall react react-dom react-router --save

2. In gulpfile.js

	Remove lines:

		var react = require('react');

3. In folder: 'src/' remove components folder and 'routes.js'.
4. In file 'src/index.js' remove all code.  Add your new code to this file.
