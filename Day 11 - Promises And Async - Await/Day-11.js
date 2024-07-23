/**
 *  @file: Day-11.js
 *  @author: Avinash Yadav
 *  @brief: Day 11 - Promises And Async - Await
 *  @date: 23-07-2024
*/

// Feature Request Scripts:

// Task 1: Understanding Promises
// Task 1.1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Task 1: Promise resolved after 2 seconds');
    }, 2000);
});

promise1.then((message) => console.log(message));

// Task 1.2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
const promise2 = new Promise((_, reject) => {
    setTimeout(() => {
        reject(new Error('Task 1: Promise rejected after 2 seconds'));
    }, 2000);
});

promise2.catch((error) => console.error(error.message));

// Task 2: Chaining Promises
// Task 2: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
const fetchData = (data) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 1000);
    });
};

fetchData('Task 2: Fetching data from server...')
    .then((message) => {
        console.log(message);
        return fetchData('Task 2: Processing data...');
    })
    .then((message) => {
        console.log(message);
        return fetchData('Task 2: Data processed');
    })
    .then((message) => {
        console.log(message);
    });

// Task 3: Using Async/Await
// Task 3.1: Write an async function that waits for a promise to resolve and then logs the resolved value.
const asyncFunction1 = async () => {
    const message = await fetchData('Task 3: Async/Await resolved data');
    console.log(message);
};

asyncFunction1();

// Task 3.2: Write an async function that handles a rejected promise using try-catch and logs the error message.
const asyncFunction2 = async () => {
    try {
        await Promise.reject(new Error('Task 3: Async/Await rejected data'));
    } catch (error) {
        console.error(error.message);
    }
};

asyncFunction2();

// Task 4: Fetching Data from an API
// Task 4.1: Use the fetch API to get data from a public API and log the response data to the console using promises.
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((data) => console.log('Task 4.1: Data fetched using promises:', data))
    .catch((error) => console.error('Task 4.1:', error.message));

// Task 4.2: Use the fetch API to get data from a public API and log the response data to the console using async/await.
const fetchDataWithAsyncAwait = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log('Task 4.2: Data fetched using async/await:', data);
    } catch (error) {
        console.error('Task 4.2:', error.message);
    }
};

fetchDataWithAsyncAwait();

// Task 5: Concurrent Promises
// Task 5.1: Use Promise.all to wait for multiple promises to resolve and then log all their values.
const promiseA = fetchData('Task 5: Promise A');
const promiseB = fetchData('Task 5: Promise B');
const promiseC = fetchData('Task 5: Promise C');

Promise.all([promiseA, promiseB, promiseC])
    .then((values) => {
        console.log('Task 5.1: All promises resolved:', values);
    });

// Task 5.2: Use Promise.race to log the value of the first promise that resolves among multiple promises.
Promise.race([promiseA, promiseB, promiseC])
    .then((value) => {
        console.log('Task 5.2: First promise resolved:', value);
    });

