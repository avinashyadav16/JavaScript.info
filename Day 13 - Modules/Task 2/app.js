// Activity 1: Creating and Exporting Modules
// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.


const person = require('./person');

console.log(`Name: ${person.name}`);
console.log(`Age: ${person.age}`);
person.greet();