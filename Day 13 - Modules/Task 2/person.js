const person = {
    name: 'Avinash Yadav',
    age: 20,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

module.exports = person;