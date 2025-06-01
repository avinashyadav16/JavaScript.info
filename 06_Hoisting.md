# Episode 3 : Hoisting

## Code Example 01

```javascript
var x = 7;

function getName() {
  console.log("Namaste JavaScript");
}

getName();
console.log(x);
```

Output:

    Namaste JavaScript
    7

<br>

## Code Example 02

```javascript
getName(); // in most languages, both the lines which are above their declaration will give error. But not in JS though.
console.log(x);

var x = 7;

function getName() {
  console.log("Namaste JavaScript");
}
```

Output:

    Namaste JavaScript
    undefined

<br>

## Code Example 03

```javascript
getName();
console.log(x);

function getName() {
  console.log("Namaste JavaScript");
}
```

Output:

    Namaste JavaScript
    Error: x is not defined // note that not defined here and "undefined" in
    sample 2 are totally different.

- Not defined: We have not initialised the value for variable anywhere in the entire code and in memory space.
- Undefined: It is a placeholder that is assigned to a variable by the Javascript Engine until the variable is assigned with some other value.

**Hoisting** is a concept which enables us to extract values of variables and functions even before initialising/assigning value without getting _error_

<br>

## Code Example 04

```javascript
function getName() {
  console.log("Namaste JavaScript");
}

console.log(getName);
```

Output:

    f getName(){
        console.log("Namaste JavaScript);
    }

<br>

## Code Example 05

```javascript
getName();
console.log(x);
console.log(getName);

var x = 7;

function getName() {
  console.log("Namaste JavaScript");
}
```

Output:

    Namaste JavaScript

    undefined

    f getName(){
        console.log("Namaste JavaScript);
    }

<br>

## Code Example 06

```javascript
console.log(getName);

var getName = function () {
  console.log("Namaste JavaScript");
};

var getName = () => {
  // use fat arrow function
  console.log("Namaste JavaScript");
};
```

Output:

    undefined //it is because arrow function behave as variable and not function.

---

**REASON OF WEIRDNESS**

- The answer lies in the Global Execution Context. In the memory phase, the variables will be initialized as _undefined_ and functions will get the whole function code in their memory.

- This is the reason why we are getting these outputs.
