/**
 *  @file: Day-3.js
 *  @author: Avinash Yadav
 *  @brief: Day 3: Control Structures
 *  @date: 14-07-2024
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Activity 1: If-Else Statements


// • Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

let number = -35;
if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}




// • Task 2: Write a program to check if a person is eligible to vote (age 18) and log the result to the console.

let age = 32;
if (age >= 18) {
    console.log("The person is eligible to vote.");
} else {
    console.log("The person is not eligible to vote.");
}








///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Activity 2: Nested If-Else Statements
// • Task 3: Write a program to find the largest of three numbers using nested if-else statements.

let num1 = 10, num2 = 20, num3 = 30;
if (num1 >= num2) {
    if (num1 >= num3) {
        console.log("The largest number is " + num1);
    } else {
        console.log("The largest number is " + num3);
    }
} else {
    if (num2 >= num3) {
        console.log("The largest number is " + num2);
    } else {
        console.log("The largest number is " + num3);
    }
}









///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Activity 3: Switch Case
// • Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

let dayNumber = 5;
let dayName;
switch (dayNumber) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}
console.log("The day is " + dayName);






// • Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

let score = 95;
let grade;
switch (true) {
    case (score >= 90):
        grade = 'A';
        break;
    case (score >= 80):
        grade = 'B';
        break;
    case (score >= 70):
        grade = 'C';
        break;
    case (score >= 60):
        grade = 'D';
        break;
    default:
        grade = 'F';
}
console.log("The grade is " + grade);










///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Activity 4: Conditional (Ternary) Operator
// • Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let num = 17;
let result = (num % 2 === 0) ? "The number is even." : "The number is odd.";
console.log(result);









///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Activity 5: Combining Conditions
// • Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year = 2024;
let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
console.log(isLeapYear ? "The year is a leap year." : "The year is not a leap year.");
