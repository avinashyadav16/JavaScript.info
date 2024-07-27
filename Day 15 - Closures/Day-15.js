/**
 *  @file: Day-15.js
 *  @author: Avinash Yadav
 *  @brief: Day 15 - Closures
 *  @date: 27-07-2024
 */




// Activity 1: Understanding Closures
// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. 
//         Call the inner function and log the result.

function outerFunction()
{
    const outerVariable = 'Hello';
    return function innerFunction()
    {
        return outerVariable;
    };
}

const inner = outerFunction();
console.log(inner());














// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.

function createCounter()
{
    let counter = 0;
    return {

        increment: function ()
        {
            counter++;
        },
        getValue: function ()
        {
            return counter;
        }

    };
}

const counter = createCounter();

counter.increment();
counter.increment();

console.log(counter.getValue());













// Activity 2: Practical Closures
// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

function createIdGenerator()
{
    let lastId = 0;
    return function generateId()
    {
        lastId++;
        return lastId;
    };
}

const generateId = createIdGenerator();
console.log(generateId());
console.log(generateId());













// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.

function createGreeter(name)
{
    return function greet()
    {
        return `Hello, ${name}!`;
    };
}

const greetJohn = createGreeter('Avinash');
console.log(greetJohn()); 










// Activity 3: Closures in Loops
// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. 
//         Use a closure to ensure each function logs the correct index.

function createFunctionArray()
{
    const functions = [];

    for (let i = 0; i < 5; i++)
    {
        functions.push(function ()
        {
            console.log(i);
        });
    }
    return functions;
}

const functionArray = createFunctionArray();
functionArray[0](); 
functionArray[1](); 












// Activity 4: Module Pattern
// Task 6: Use closures to create a simple module for managing a collection of items. 
//         Implement methods to add, remove, and list items.

const itemModule = (function ()
{
    const items = [];

    return {
        addItem: function (item)
        {
            items.push(item);
        },
        removeItem: function (item)
        {
            const index = items.indexOf(item);
            if (index > -1)
            {
                items.splice(index, 1);
            }
        },

        listItems: function ()
        {
            return items;
        }
        
    };

})();

itemModule.addItem('Apple');
itemModule.addItem('Banana');
itemModule.removeItem('Apple');
console.log(itemModule.listItems()); 












// Activity 5: Memoization
// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.

function memoize(fn)
{
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key])
        {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

function slowFunction(num)
{
    for (let i = 0; i < 1e6; i++) { }
    return num * 2;
}

const memoizedSlowFunction = memoize(slowFunction);
console.log(memoizedSlowFunction(5)); 
console.log(memoizedSlowFunction(5)); 












// Task 8: Create a memoized version of a function that calculates the factorial of a number.

function factorial(n)
{
    if (n === 0)
    {
        return 1;
    }
    return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(5)); 
console.log(memoizedFactorial(5));