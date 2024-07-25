// Activity 4: Using Third-Party Modules
// Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.

// npm init
// npm install lodash axios
// npm start


const _ = require('lodash');

const array = [1, 2, 3, 4];
const reversedArray = _.reverse(array.slice());
console.log('Reversed Array:', reversedArray);