# snowpack-mdx-chakra

> ✨ Bootstrapped with Create Snowpack App (CSA).

This is a snowpack template project setup with MDX Chakra-ui and React Router v6. Its quite opinionated, but in a good way.

## Install

Run the following command, replacing `my-new-app` with the name of your new app.

`npx create-snowpack-app my-new-app --template snowpack-mdx-chakra --use-yarn`

## Project structure

Your pages live inside the pages directory, they are just mdx files. Your components live inside (you guessed it) a components directory.
The routing is handle by React Router v6, which has some nice new additions. An mdx-layout component is created and waiting to be used, if at all, inside the components folder. If used, this will wrap all the pages in the pages folder. So if you have a global layout you can crate that there.

## Routing

Inside the components folder is the mdx-routes file. This handles the navigation of your app, if you have more than one page that is. Its usage is very simple. You create a new mdx file under pages then in the mdx-routes file you add your new pages route to the MDXRoutes component. You then add a link to your new page in the Nav component in the same file.

## Chakra-ui

Chakra-ui has awesome defaults which put accessibility first. The template comes with a default theme initialized but this can be changed in the theme file which lives at the projects root. You are free to import another theme from chakra or invent your own.

## Components

Inside the index.jsx file located in the src folder you will see that Chakra components are mapped to markdown elements, meaning that you dont need to import anything into the mdx files, just use the elements and write markdown as you normally would. If you create any custom components you can place them inside the component object and they will be available in the mdx file. Much like the emoji component the template ships with.

------------------------------

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like "@snowpack/plugin-webpack" to your `snowpack.config.js` config file.

### npm test

Launches the application test runner.
Run with the `--watch` flag (`npm test -- --watch`) to run in interactive watch mode.
