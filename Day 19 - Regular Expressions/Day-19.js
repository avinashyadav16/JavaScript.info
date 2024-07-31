/**
 *  @file: Day-19.js
 *  @author: Avinash Yadav
 *  @brief: Day 19 - Regular Expressions
 *  @date: 31-07-2024
 */


// Activity 1: Basic Regular Expressions
// • Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.
let str1 = "JavaScript is awesome language. I love to code in JavaScript!";
let regex1 = /JavaScript/g;
let matches1 = str1.match(regex1);
console.log("Task 1 - Matches for 'JavaScript':", matches1);








// • Task 2: Write a regular expression to match all digits in a string. Log the matches.
let str2 = "The year is 2024, the month is 07 and the time is 11:45 PM.";
let regex2 = /\d/g;
let matches2 = str2.match(regex2);
console.log("Task 2 - Matches for digits:", matches2);









// Activity 2: Character Classes and Quantifiers
// • Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
let str3 = "Dr. Strange went to Wonderland. He met the White Rabbit.";
let regex3 = /\b[A-Z][a-z]*\b/g;
let matches3 = str3.match(regex3);
console.log("Task 3 - Matches for capitalized words:", matches3);









// • Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.
let str4 = "My phone number is +919317171717 and my zip code is 565412.";
let regex4 = /\d+/g;
let matches4 = str4.match(regex4);
console.log("Task 4 - Matches for sequences of digits:", matches4);









// Activity 3: Grouping and Capturing
// • Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.
let str5 = "(91) 93171-71717";
let regex5 = /\((\d{3})\)\s(\d{3})-(\d{4})/;
let matches5 = str5.match(regex5);
console.log("Task 5 - Captured phone number components:", matches5);










// • Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.
let str6 = "avinashurmilayadav@gmail.com";
let regex6 = /(\w+)@(\w+\.\w+)/;
let matches6 = str6.match(regex6);
console.log("Task 6 - Captured email components:", matches6);










// Activity 4: Assertions and Boundaries
// • Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.
let str7 = "Hello, Avinash Yadav!";
let regex7 = /^\w+/;
let matches7 = str7.match(regex7);
console.log("Task 7 - Matches for word at the beginning:", matches7);










// • Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.
let str8 = "Hello, Robert Hook";
let regex8 = /\w+$/;
let matches8 = str8.match(regex8);
console.log("Task 8 - Matches for word at the end:", matches8);








// Activity 5: Practical Applications
// • Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.
let password = "itIsMyPassword@123456!";
let regex9 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
let isValidPassword = regex9.test(password);
console.log("Task 9 - Is the password valid?", isValidPassword);








// • Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.
let url = "https://www.dummyWebsite.com";
let regex10 = /^(https?:\/\/)?(www\.)?[\w-]+\.[\w]{2,}(\/[\w-]*)*\/?$/;
let isValidUrl = regex10.test(url);
console.log("Task 10 - Is the URL valid?", isValidUrl);