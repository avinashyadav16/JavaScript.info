/**
 *  @file: Day-20.js
 *  @author: Avinash Yadav
 *  @brief: Day 20 - Local_Strorage And Session_Strorage
 *  @date: 01-08-2024
 */



// Activity 1: Understanding LocalStorage
// • Task 1: Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.
localStorage.setItem('myString', 'Hello, Avinash Yadav!');
const retrievedString = localStorage.getItem('myString');
console.log('Task 1 - Retrieved String:', retrievedString);             // Output: "Hello, Avinash Yadav!"














// • Task 2: Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
const myObject = { name: 'Avinash', age: 20 };
localStorage.setItem('myObject', JSON.stringify(myObject));
const retrievedObject = JSON.parse(localStorage.getItem('myObject'));
console.log('Task 2 - Retrieved Object:', retrievedObject);             // Output: { name: "Avinash", age: 20 }

















// Activity 2: Using LocalStorage
// • Task 3: Create a simple form that saves user input (e.g., name and email) to localStorage when submitted. Retrieve and display the saved data on page load.
document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    
    console.log('Task 3 - Form Data Saved to LocalStorage');
});

window.addEventListener('load', function () {
    const savedName = localStorage.getItem('userName');
    const savedEmail = localStorage.getItem('userEmail');
    
    if (savedName && savedEmail) {
        console.log(`Task 3 - Retrieved Name: ${savedName}, Email: ${savedEmail}`);
    }
});














// • Task 4: Write a script to remove an item from localStorage. Log the localStorage content before and after removal.
console.log('Task 4 - Before Removal:', localStorage);
localStorage.removeItem('userName');
console.log('Task 4 - After Removal:', localStorage);














// Activity 3: Understanding SessionStorage
// • Task 5: Write a script to save a string value to sessionstorage and retrieve it. Log the retrieved value.
sessionStorage.setItem('mySessionString', 'Session Says Hello!');
const retrievedSessionString = sessionStorage.getItem('mySessionString');
console.log('Task 5 - Retrieved Session String:', retrievedSessionString);              // Output: "Session Says Hello!"
















// • Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
const mySessionObject = { city: 'Ayodhya', country: 'India' };
sessionStorage.setItem('mySessionObject', JSON.stringify(mySessionObject));
const retrievedSessionObject = JSON.parse(sessionStorage.getItem('mySessionObject'));
console.log('Task 6 - Retrieved Session Object:', retrievedSessionObject);              // Output: { city: "Ayodhya", country: "India" }



















// Activity 4: Using SessionStorage
// • Task 7: Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load.
document.getElementById('sessionUserForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const name = document.getElementById('sessionName').value;
    const email = document.getElementById('sessionEmail').value;

    sessionStorage.setItem('sessionUserName', name);
    sessionStorage.setItem('sessionUserEmail', email);

    console.log('Task 7 - Form Data Saved to SessionStorage');
});


window.addEventListener('load', function () {
    const savedSessionName = sessionStorage.getItem('sessionUserName');
    const savedSessionEmail = sessionStorage.getItem('sessionUserEmail');
    
    if (savedSessionName && savedSessionEmail) {
        console.log(`Task 7 - Retrieved Name: ${savedSessionName}, Email: ${savedSessionEmail}`);
    }
});


















// • Task 8: Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal.
console.log('Task 8 - Before Removal:', sessionStorage);
sessionStorage.removeItem('sessionUserName');
console.log('Task 8 - After Removal:', sessionStorage);

















// Activity 5: Comparing LocalStorage and SessionStorage
// • Task 9: Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage. Retrieve and log the values from both storage mechanisms.
function saveToBothStorages(key, value) {
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);

    console.log(`Task 9 - Saved Value to Both Storages for Key: ${key}`);
    console.log(`localStorage: ${localStorage.getItem(key)}`);
    console.log(`sessionStorage: ${sessionStorage.getItem(key)}`);
}
saveToBothStorages('exampleKey', 'exampleValue');














// • Task 10: Write a function that clears all data from both localStorage and sessionStorage. Verify that both storages are empty.
function clearBothStorages() {
    localStorage.clear();
    sessionStorage.clear();

    console.log('Task 10 - localStorage cleared:', localStorage.length === 0);
    console.log('Task 10 - sessionStorage cleared:', sessionStorage.length === 0);
}

clearBothStorages();