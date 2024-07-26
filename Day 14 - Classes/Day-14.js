/**
 *  @file: Day-14.js
 *  @author: Avinash Yadav
 *  @brief: Day 14 - Classes
 *  @date: 26-07-2024
*/

// Activity 1: Class Definition
// Task 1: Define a class Person1 with properties name and age, and a method to return a greeting message. 
//         Create an instance of the class and log the greeting message.

class Person1 {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getGreeting() {
        return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    }
}

const person1 = new Person1('Avinash', 'Yadav', 20);
console.log(person1.getGreeting());












// Task 2: Add a method to the Person2 class that updates the age property and logs the updated age.

class Person2 {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getGreeting() {
        return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    }

    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }
}

const person2 = new Person2('Avi', 'Yadav', 20);
console.log(person2.getGreeting());
person2.updateAge(21);










// Activity 2: Class Inheritance
// Task 3: Define a class Student1 that extends the Person1 class. Add a property studentId and a method to return the student ID. 
//         Create an instance of the Student1 class and log the student ID.

class Student1 extends Person1 {
    constructor(firstName, lastName, age, studentId) {
        super(firstName, lastName, age);
        this.studentId = studentId;
    }

    getStudentId() {
        return `Student ID: ${this.studentId}`;
    }
}

const student1 = new Student1('Sam', 'Bahadur', 20, 'AP221100101');
console.log(student1.getStudentId());
















// Task 4: Override the greeting method in the Student2 class to include the student ID in the message. Log the overridden greeting message.

class Student2 extends Person1 {
    constructor(firstName, lastName, age, studentId) {
        super(firstName, lastName, age);
        this.studentId = studentId;
    }

    getStudentId() {
        return `Student ID: ${this.studentId}`;
    }

    getGreeting() {
        return `Hello, my name is ${this.firstName} ${this.lastName}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
}

const student2 = new Student2('Albert', 'Einstien', 80, 'AP221100102');
console.log(student2.getGreeting());


















// Activity 3: Static Methods and Properties
// Task 5: Add a static method to the Person3 class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.

class Person3 {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getGreeting() {
        return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    }

    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }

    static genericGreeting() {
        return 'Hello, welcome to our community!';
    }
}

console.log(Person3.genericGreeting());













// Task 6: Add a static property to the Student3 class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

class Student3 extends Person3 {
    static studentCount = 0;

    constructor(firstName, lastName, age, studentId) {
        super(firstName, lastName, age);
        this.studentId = studentId;
        Student3.studentCount++;
    }

    getStudentId() {
        return `Student ID: ${this.studentId}`;
    }

    getGreeting() {
        return `Hello, my name is ${this.firstName} ${this.lastName}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
}

const student3_1 = new Student3('Jackie', 'Sheroff', 25, 'AP221100103');
const student3_2 = new Student3('David', 'Smith', 22, 'AP221100104');
console.log(`Total students: ${Student3.studentCount}`);


















// Activity 4: Getters and Setters
// Task 7: Add a getter method to the Person4 class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.

class Person4 {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getGreeting() {
        return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    }

    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }

    static genericGreeting() {
        return 'Hello, welcome to our community!';
    }
}

const person4 = new Person4('Johnny', 'Liver', 30);
console.log(person4.fullName);

















// Task 8: Add a setter method to the Person5 class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.

class Person5 {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name) {
        const [firstName, lastName] = name.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getGreeting() {
        return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    }

    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }

    static genericGreeting() {
        return 'Hello, welcome to our community!';
    }
}

const person5 = new Person5('Maria', 'Singh', 30);
console.log(person5.fullName);
person5.fullName = 'Honey Singh';
console.log(person5.fullName);



















// Activity 5: Private Fields (Optional)
// Task 9: Define a class Account1 with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
// Task 10: Create an instance of the Account1 class and test the deposit and withdraw methods, logging the balance after each operation.

class Account1 {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: ${amount}`);
        } else {
            console.log('Deposit amount must be positive.');
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrawn: ${amount}`);
        } else {
            console.log('Insufficient funds or invalid amount.');
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const account1 = new Account1(1000);
console.log(`Initial Balance: ${account1.getBalance()}`);
account1.deposit(500);
console.log(`Balance after deposit: ${account1.getBalance()}`);
account1.withdraw(200);
console.log(`Balance after withdrawal: ${account1.getBalance()}`);
