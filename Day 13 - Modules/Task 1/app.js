// Activity 1: Creating and Exporting Modules
// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.


const add = require('./addition');

const result = add(35, 70);
console.log(`The sum is: ${result}`);