/**
 *  @file: Day-12.js
 *  @author: Avinash Yadav
 *  @brief: Day 12 - Error Handling
 *  @date: 24-07-2024
*/



// Activity 1: Basic Error Handling With Try - Catch
// Task 1: Intentional Error Handling
function throwError() {
    throw new Error("This is an intentional error");
}

try {
    throwError();
} catch (error) {
    console.log("Caught an error: " + error.message);
}








// Task 2: Division with Error Handling
function divideNumbers(a, b) {
    if (b === 0) {
        throw new Error("Denominator cannot be zero");
    }
    return a / b;
}

try {
    console.log(divideNumbers(4, 2));
    console.log(divideNumbers(4, 0));
} catch (error) {
    console.log("Error: " + error.message);
}









// Activity 2: Finally Block
// Task 3: Try - Catch - Finally Block
try {
    console.log("In try block");
    throw new Error("An error occurred");
} catch (error) {
    console.log("In catch block: " + error.message);
} finally {
    console.log("In finally block");
}










// Activity 3: Custom Error Objects
// Task 4: Custom Error Class
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function throwCustomError() {
    throw new CustomError("This is a custom error");
}

try {
    throwCustomError();
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
}








// Task 5: Input Validation with Custom Error
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateInput(input) {
    if (!input) {
        throw new ValidationError("Input cannot be empty");
    }
    return true;
}

try {
    // This will throw an error
    validateInput("");
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
}










// Activity 4: Error Handling in Promises
// Task 6: Promise with .catch()
const promise = new Promise((resolve, reject) => {
    const random = Math.random();
    if (random > 0.5) {
        resolve("Promise resolved");
    } else {
        reject("Promise rejected");
    }
});

promise
    .then(result => console.log(result))
    .catch(error => console.log("Caught an error: " + error));






// Task 7: Async / Await with Try - Catch
async function handlePromise() {
    const promise = new Promise((resolve, reject) => {
        const random = Math.random();
        if (random > 0.5) {
            resolve("Promise resolved");
        } else {
            reject("Promise rejected");
        }
    });

    try {
        const result = await promise;
        console.log(result);
    } catch (error) {
        console.log("Caught an error: " + error);
    }
}

handlePromise();









// Activity 5: Graceful Error Handling in Fetch
// Task 8: Fetch with .catch()
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .catch(error => console.log("Fetch error: " + error));




// Task 9: Fetch with Async / Await and Try - Catch
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Fetch error: " + error);
    }
}

fetchData();