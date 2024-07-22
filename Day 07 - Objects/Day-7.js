/**
 *  @file: Day7.js
 *  @author: Avinash Yadav
 *  @brief: Day 7: Objects
 *  @date: 19-07-2024
*/


// Activity 1: Object Creation and Access
// • Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
// • Task 2: Access and log the title and author properties of the book object.



// Task 1: Creating the book object
const book = {
    title: "Surely You're Joking, Mr. Feynman!",
    author: "Richard Feynman",
    year: 1985
};
console.log(book);


// Task 2: Accessing and logging specific properties of the book object
console.log(book.title);
console.log(book.author);







// Activity 2: Object Methods
// • Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
// • Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

// Task 3: Adding a method to return book's title and author
book.getDetails = function () {
    return `${this.title} by ${this.author}`;
};
console.log(book.getDetails());





// Task 4: Adding a method to update the book's year property
book.updateYear = function (newYear) {
    this.year = newYear;
};
book.updateYear(1961);
console.log(book);









// Activity 3: Nested Objects
// • Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
// • Task 6: Access and log the name of the library and the titles of all the books in the library.

// Task 5: Creating a nested library object
const library = {
    name: "New City Library",
    books: [
        { title: "The Adventures of Huckleberry Finn", author: "Mark Twain", year: 1885 },
        { title: "Elegantly Wasted", author: "Australian rock", year: 1997 },
        book
    ]
};
console.log(library);







// Task 6: Accessing and logging the library name and titles of all books in the library
console.log(library.name);
library.books.forEach(book => {
    console.log(book.title);
});


// Activity 4: The this Keyword
// • Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

// Task 7: Adding a method to return book's title and year using 'this' keyword
book.getTitleAndYear = function () {
    return `${this.title} was published in ${this.year}`;
};
console.log(book.getTitleAndYear());


// Activity 5: Object Iteration
// • Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
// • Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.





// Task 8: Using for...in loop to iterate over book object properties
for (let key in book) {
    if (book.hasOwnProperty(key)) {
        console.log(`${key}: ${book[key]}`);
    }
}

// Task 9: Using Object.keys and Object.values to log all keys and values of the book object
console.log(Object.keys(book));
console.log(Object.values(book));
