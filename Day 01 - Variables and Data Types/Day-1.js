/**
*  @file: Day-1.js
*  @author: Avinash Yadav
*  @brief: Day 1: Variables and Data Types
*  @date: 13-07-2024
*/

// Activity 1: Variable Declaration:
// Declare a variable using var, assign it a number, and log the value to the console.
// Declare a variable using let , assign it a string, and log the value to the console.
var var_1 = 35;
console.log(var_1)

let var_2 = 70;
console.log(var_2)


// Activity 2: Const Declaration:
// Declare a variable using const , assign it a boolean value, and log the value to the console.
const pi_value = 3.14;
console.log(pi_value)


// Activity 3: Data Types:
//Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
var num = 5;
console.log(typeof num);

var string = "Hello World";
console.log(typeof string);

var boolean = true;
console.log(typeof boolean);

var object = { name: "John", age: 30 };
console.log(typeof object);

var array = [1, 2, 3, 4, 5];
console.log(typeof array);


// Activity 4: Reassigning Variables:
// Declare a variable using let , assign it an initial value, reassign a new value, and log both values to the console.
let var_3 = 10;
console.log(var_3);
var_3 = 20;
console.log(var_3)


// Activity 5: Understading const:
// Try reassigning a variable declared with const and observe the error.
const var_4 = 10;
//var_4 = 20;
console.log(var_4)