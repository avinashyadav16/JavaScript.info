/**
 *  @file: Day5.js
 *  @author: Avinash Yadav
 *  @brief: Day 5: Functions
 *  @date: 17-07-2024
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Activity 1: Function Declaration
// • Task 1: Write a function to check if a number is even or odd and log the result to the console.
function checkEvenOdd(num) {
    if (num & 1) {
        console.log(`The number ${num} is an Even Number.`);
    } else {
        console.log(`The number ${num} is an Odd Number.`);
    }
}
checkEvenOdd(13);



// • Task 2: Write a function to calculate the square of a number and return the result.
function calculateSquare(num) {
    return num * num;
}
console.log(`The square of 4 is ${calculateSquare(4)}.`);




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Activity 2: Function Expression
// • Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const findMax = function (num1, num2) {
    return num1 > num2 ? num1 : num2;
};
console.log(`The maximum of 5 and 10 is ${findMax(5, 10)}.`);





// • Task 4: Write a function expression to concatenate two strings and return the result.
const concatenateStrings = function (str1, str2) {
    return str1 + str2;
};
console.log(`Concatenation of "Hello" and "World" is "${concatenateStrings("Hello", "World")}".`);





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Activity 3: Arrow Functions
// • Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const sum = (a, b) => a + b;
console.log(`The sum of 3 and 7 is ${sum(3, 7)}.`);







// • Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const containsCharacter = (str, char) => str.includes(char);
console.log(`Does "JavaScript" contain the letter "a"? ${containsCharacter("JavaScript", "a")}`);







///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Activity 4: Function Parameters and Default Values
// • Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function multiply(a, b = 1) {
    return a * b;
}
console.log(`The product of 5 and 3 is ${multiply(5, 3)}.`);
console.log(`The product of 5 without second argument is ${multiply(5)}.`);







// • Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function greet(name, age = 25) {
    return `Hello, my name is ${name} and I am ${age} years old.`;
}
console.log(greet("Avinash", 30));
console.log(greet("Avinash"));








///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Activity 5: Higher-Order Functions
// • Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
function repeatFunction(func, times) {
    for (let i = 0; i < times; i++) {
        func();
    }
}
repeatFunction(() => console.log("Hello!"), 3);









// • Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function applyFunctions(func1, func2, value) {
    return func2(func1(value));
}
const addTwo = x => x + 2;
const square = x => x * x;
console.log(`Applying addTwo and square to 3 results in ${applyFunctions(addTwo, square, 3)}.`);