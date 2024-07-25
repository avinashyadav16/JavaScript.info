// Activity 3: Importing Entire Modules
// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.


const math = require('./constants');

console.log(`PI: ${math.PI}`);
console.log(`E: ${math.E}`);
console.log(`Add: ${math.add(55, 45)}`);
console.log(`Subtract: ${math.subtract(15, 3)}`);