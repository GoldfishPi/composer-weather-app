# SuperCell 2.1.1 - Build 2016

[![David](https://david-dm.org/joellongie/supercell/status.svg?style=flat-square)](https://david-dm.org/joellongie/supercell)
[![David](https://david-dm.org/joellongie/supercell/dev-status.svg?style=flat-square)](https://david-dm.org/joellongie/supercell)

SuperCell Build 2016 is a simple boilerplate for Node, React, React-Router, Redux, and Sass apps.  It features an easy to configure Gulp setup that is friendly to beginners while still offering advanced features such as browser-sync, babel ES6+ compiler, source maps, and optimized builds.

## CHANGELOG
 > v2.1.1, October 22, 2017     
  > - updated outdated packages
  
 > v2.1.0, June 5, 2017     
  > - Added Eslint
  > - Changed default router to BrowserHistory
  > - Added express server for deployment to Heroku
  > - [Added instruction for Heroku depolyment below](https://github.com/joellongie/superCell#building-app-and-deploy-to-heroku).

 > v2.0.0, May 24, 2017     
  > - Updated react-router to v4, hashHistory on by default.
  > - Updated outdated packages to current versions.
  > - Modified src folder and file structure.

## YouTube Demo 1.0.8
[![SuperCell YouTube Demo](http://img.youtube.com/vi/BwzjYK1Hd0Y/0.jpg)](https://www.youtube.com/watch?v=BwzjYK1Hd0Y)


## Install Packages

After cloning the project to your computer run the following command in your terminal to install all required node packages.

    sudo npm install

The first time you run gulp the build may take a little longer as it compiles and builds out the "public/css" and "public/js" folders and files.

## Running App
This build system can be run in two modes: development and production.  Use development when you are developing your app.  In this mode your JS will not be minified, React will include all its warnings and your CSS will contain sourcemaps to the original SCSS files.  When you are ready to deploy you can start the app in production mode which will turn off React warnings, uglify your JS, and turn off sourcemaps for both JS and CSS.

    npm run dev  (starts app in development mode) 


## Building App and Deploy to Heroku
Make sure you have a Heroku account and heroku-cli installed.


1. **IMPORTANT: COMMENT OUT:** in `.gitignore` comment out last two lines see below.  Heroku needs these build folders to run app.
```
# public/css/
# public/js/
```
2. `npm run build` (creates app production mode ready for heroku or other cloud platform)
3. Commit your project to git locally.  This commit will be used for heroku.
4. `heroku create`
5. `git push heroku master`
6. `heroku open`
7.  **IMPORTANT: UNCOMMENT OUT:** in `.gitignore` uncomment out last two lines see below.
```
public/css/
public/js/
```
8. Commit your project back to git with the commented .gitignore.  You can now recommit your project to your remote repo without unnecessary build files.

## Features

- ES6+ with Babel.  Use all the new niffty ES6+ features and transpile down to ES5.
- Browserify: JSX transforms, ES6 modules.
- React Ready!
- Uglify: minification.
- BrowserSync.
- Sass / flexbox ready (IE10+), layout for everygreen browsers.

## How to use

Precompiled JS and SCSS files are in the src folder and compile to public.  All other files including HTML, image etc. are in public.  BrowserSync runs from public and serves as the "Dist" folder for client-side apps.
