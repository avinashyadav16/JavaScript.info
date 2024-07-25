// Activity 5: Module Bundling (Optional)
// Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.


// First, install Webpack:
// npm install webpack webpack-cli --save-dev
// npm init -y
// Create a simple project structure:

// webpack.config.js
// src/
//      app.js
//      addition.js


// Run Webpack to bundle the files:
// npx webpack
// This will create a dist / bundle.js file containing the bundled code from src / app.js and src / addition.js.


// Day 13 - Modules> npx webpack
// asset bundle.js 4.17 KiB [emitted] (name: main)
// runtime modules 670 bytes 3 modules
// cacheable modules 150 bytes
//   ./src/app.js 101 bytes [built] [code generated]
//   ./src/addition.js 49 bytes [built] [code generated]
// webpack 5.93.0 compiled successfully in 207 ms



// Now open the index.html file in the browser and you should see the output The sum is: 12 in the browser's console.



import { add } from './addition';

const result = add(5, 7);
console.log(`The sum is: ${result}`);