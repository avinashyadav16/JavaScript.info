/**
 *  @file: Day-2.js
 *  @author: Avinash Yadav
 *  @brief: Day 2: Operators
 *  @date: 14-07-2024
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Activity 1: Arithmetic Operations

let a = 10;
let b = 5;

// • Write a program to add two numbers and log the result to the console.
console.log(`Addition: ${a} + ${b} = ${a + b}`);

// • Write a program to subtract two numbers and log the result to the console.
console.log(`Subtraction: ${a} - ${b} = ${a - b}`);

// • Write a program to multiply two numbers and log the result to the console.
console.log(`Multiplication: ${a} * ${b} = ${a * b}`);

// • Write a program to divide two numbers and log the result to the console.
console.log(`Division: ${a} / ${b} = ${a / b}`);

// • Write a program to find the remainder when one number is divided by another and log the result to the console.
console.log(`Remainder: ${a} % ${b} = ${a % b}`);












///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Activity 2: Assignment Operators
// • Use the += operator to add a number to a variable and log the result to the console.
let c = 20;
c += 10;
console.log(`Using += operator: c = ${c}`);

// • Use the -= operator to subtract a number from a variable and log the result to the console.
c -= 5;
console.log(`Using -= operator: c = ${c}`);












///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Activity 3: Comparison Operators
// • Write a program to compare two numbers using > and < and log the result to the console.
console.log(`${a} > ${b}: ${a > b}`);
console.log(`${a} < ${b}: ${a < b}`);

// • Write a program to compare two numbers using >= and <= and log the result to the console.
console.log(`${a} >= ${b}: ${a >= b}`);
console.log(`${a} <= ${b}: ${a <= b}`);

// • Write a program to compare two numbers using == and === and log the result to the console.
let d = '10';
console.log(`${a} == ${d}: ${a == d}`); // true because == does type coercion
console.log(`${a} === ${d}: ${a === d}`); // false because === checks for both value and type equality












///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Activity 4: Logical Operators
// • Write a program that uses the && operator to combine two conditions and log the result to the console.
console.log(`(${a} > 5 && ${b} < 10): ${a > 5 && b < 10}`);

// • Write a program that uses the || operator to combine two conditions and log the result to the console.
console.log(`(${a} > 5 || ${b} > 10): ${a > 5 || b > 10}`);

// • Write a program that uses the ! operator to negate a condition and log the result to the console.
console.log(`!(${a} < 5): ${!(a < 5)}`);












///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Activity 5: Ternary Operator
// • Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
let number = -7;
let result = number >= 0 ? 'Positive' : 'Negative';
console.log(`The number ${number} is ${result}.`);