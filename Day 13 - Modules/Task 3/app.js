// Activity 2: Named and Default Exports
// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.

const { add, subtract } = require('./math');

console.log(`Add: ${add(100, 125)}`);
console.log(`Subtract: ${subtract(35, 55)}`);