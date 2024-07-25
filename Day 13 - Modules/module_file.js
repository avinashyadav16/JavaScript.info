
// Module - 01
function add(a, b) {
    return a + b;
}

module.exports = add;





// Module - 02
const person = {
    name: 'John Doe',
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

module.exports = person;





// Module - 03
function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

export { sum, subtract };




    
// Module - 04
export default function multiply(a, b) {
    return a * b;
}





// Module - 05
export const PI = 3.14;
export const E = 2.71;

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}





// Module - 06
