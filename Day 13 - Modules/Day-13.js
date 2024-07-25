/**
 *  @file: Day-13.js
 *  @author: Avinash Yadav
 *  @brief: Day 13 - Modules
 *  @date: 25-07-2024
*/


// Activity 1: Creating and Exporting Modules
// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.

const add = require('./module_file');
const result = add(5, 7);
console.log(`The sum is: ${result}`);





// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
const person = require('./person');

console.log(`Name: ${person.name}`);
console.log(`Age: ${person.age}`);
person.greet();






// Activity 2: Named and Default Exports
// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.

import { sum, subtract } from './math';

console.log(`Add: ${sum(10, 5)}`);
console.log(`Subtract: ${subtract(10, 5)}`);






// Task 4: Create a module that exports a single function using default export. Import and use this function in another script.




// app.js(Main Script):
// app.js
import multiply from './multiply';

console.log(`Multiply: ${multiply(10, 5)}`);












// Activity 3: Importing Entire Modules
// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

import * as math from './constants';

console.log(`PI: ${math.PI}`);
console.log(`E: ${math.E}`);
console.log(`Add: ${math.add(10, 5)}`);
console.log(`Subtract: ${math.subtract(10, 5)}`);









// Activity 4: Using Third-Party Modules
// Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.

// First, install lodash:
// npm install lodash
import _ from 'lodash';

const array = [1, 2, 3, 4];
const reversedArray = _.reverse(array.slice());
console.log('Reversed Array:', reversedArray);










// Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.

// First, install axios:
// npm install axios

import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });








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