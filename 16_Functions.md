# Episode 14: First class Functions and Anonymous functions

## Function statement OR Function Declaration:

Just our normal function definition

A normal function that we create using naming convention. By this we can do the Hoisting.

```javascript
function a() {
  console.log("Function Statement");
}

a();
```

## Function Expression:

Assigning a function to a variable. Function acts like a value

When we assign a function into a variable that is Function Expression. We can not do Hoisting by this because it acts like variable.

```javascript
var b = function () {
  console.log("Function Expression");
};

b();
```

**Difference between function statement and function expression is Hoisting**

```javascript
a();
b();

function a() {
  console.log("Function Statement");
}

var b = function () {
  console.log("Function Expression");
};
```

OUTPUT:

    Function Statement

    Uncaught TypeError: b is not a function.

- We can put `a();` before `function a()` and it will still work. But putting `b();` before `var b = function()` throws a typeError.
- **Why?** During memory creation phase `a` is created in memory and function assigned to `a`. But `b` is created like a variable `(b:undefined)` and until code reaches the function() part, it is still undefined. So it cannot be called.

## Anonymous Function:

A Function without the name is known as Anonymous Function. It is used in a place where function are treated as value.

```javascript
function(){

}

// As it is similar to function statement and According to ECMA script a function should always have a name

// Therefore, this will result in SyntaxError: Function statements require a function name.
```

- They don't have their own identity. So an anonymous function without code inside it results in an error.
- Anonymous functions are used at places where functions are used as values e.g. the code sample for function expression above.

```javascript
var exp = function () {
  console.log("Anonymous Function");
};

exp();
```

## Named Function Expression:

Same as Function Expression but function has a name instead of being anonymous.

The function with a name, in the function expression, is known as Named Function Expression.

```javascript
var b = function xyz() {
  console.log("Named Function Expression");
};

b(); // prints "Named Function Expression" properly

xyz(); // Throws Uncaught ReferenceError: xyz is not defined.
```

> Function `xyz` is not created in global scope or outer scope. But it is created as a local variable. That means it can be accessed inside the function. So it can't be called.

## Parameters v/s Arguments

When we create and name a function and put some identifiers/variabels in the parenthesis ( ) following it, that variables are called as Parameters.

Ex:

```javascript
function ab(param1, param2) {
  // param1 and param2 are local variables inside this function and we can not access it outside this function.
  // labels/identifiers that get the arg values
  console.log(param1 + param2);
}
```

When we call this function and pass a variable/value in the parenthesis ( ) _followed by function name_, that is our Arguments.
Ex:

```javascript
ab(arg1, arg2); // arguments - values passed inside function call
```

## First Class Function AKA First Class Citizens

- We can pass functions to another function as an arguments.
- The Ability of use function as value, Can be passed as an Argument, Can be executed inside a closured function and Can be taken as return form.

```javascript
var b = function (param1) {
  console.log(param1); // prints " f() {} "
};

b(function () {});
```

**This can also be done:**

```javascript
var b = function (param1) {
  console.log(param1);
};

function xyz() {}

b(xyz); // same thing as prev code
```

**We can return a function from a function:**

```javascript
var b = function (param1) {
  return function () {
    console.log(" F C F ");
  };
};

console.log(b());
//Logs the entire fxn within b.
// f () {
//     console.log(" F C F ");
//   };
```

```javascript
var b = function (param) {
  return function xyz() {
    console.log(" F C F ");
  };
};

console.log(b());
//Logs the entire fxn within b.
// f xyz() {
//     console.log(" F C F ");
//   };
```

Function are heart of JS. They are called first class citizens or first class functions because they have the ability to be stored in the variables, passed as parameters and arguments. They can also be returned in the function.
