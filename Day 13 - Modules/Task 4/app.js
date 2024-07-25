// Activity 2: Named and Default Exports
// Task 4: Create a module that exports a single function using default export. Import and use this function in another script.


const multiply = require('./multiply');


console.log(`Multiply: ${multiply(18, 9)}`);