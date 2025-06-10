# CHAPTER 22: MAP, FILTER AND REDUCE

# MAP FUNCTION:

It is basically used to transform an array. Here transformation means that changing each and every value of the given array and get a completely new array based on our requirements.

Like doubling the value of every elements or multiplying every array elements or it can also be fiding out the binary representation of the array element.

```javascript
const arr = [5, 1, 3, 2, 6];

// DOUBLE: [10, 2, 6, 4, 12]

// TRIPLE: [15, 3, 9, 6, 18]

// BINARY: ["101", "1", "11", "10", "110"]
```

So we can do all this with map function.

> **Syntax:** _array_name.map(function/logic);_

```javascript
const arr = [5, 1, 3, 2, 6];

function double(x) {
  return x * 2;
}

function triple(x) {
  return x * 3;
}

function binary(x) {
  return x.toString(2);
}

const output1 = arr.map(double);
const output2 = arr.map(triple);
const output3 = arr.map(binary);

console.log(output1);
console.log(output2);
console.log(output3);

// SHORTER WAY: By Using Arrow Function:
// const output4 = arr.map((num) => num * 2);
// const output5 = arr.map((num) => num * 3);
// const output6 = arr.map((num) => num.toString(2));
// console.log(output4);
// console.log(output5);
// console.log(output6);
```

OUTPUT:

        [ 10, 2, 6, 4, 12 ]
        [ 15, 3, 9, 6, 18 ]
        [ '101', '1', '11', '10', '110' ]

## FILTER FUNCTION:

It is basically used to filter elements inside an array.

Suppose we want to filter out all the Odd values or all the even values.

So, we take the array and we want to filter out the array based on some logic and want only those element that fall under that logic.

> **Syntax:** _array_name.filter(function/logic);_

```javascript
const arr = [5, 1, 3, 2, 6];

function isOdd(x) {
  return x % 2;
}

const output = arr.filter(isOdd);

console.log(output);

// SHORTER WAY: By Using Arrow Function:
// const output2 = arr.filter((num) => num % 2 === 1);
// console.log(output2);
```

OUTPUT:

        [ 5, 1, 3 ]

## REDUCE FUNCTION:

Just like the name says reduce, **It actually does not reduces anything.**

It is used at places where we have to take an array and come out as a single value out of all the elements of the array.

Like sum of all the array elements, find out the largest/maximum number out of it.

> **Syntax:** _array_name.reduce(function(accumulator, current){logic}, accumulator_initial_value);_

**Non Functional Approach:**

```javascript
const arr = [5, 1, 3, 2, 6];

function findSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

const output = findSum(arr);

console.log(output);
```

---

**Functional Approach:**

```javascript
const arr = [5, 1, 3, 2, 6];

const output = arr.reduce(function (acc, curr) {
  acc += curr;

  return acc;
}, 0);

console.log(output);
```

**Finding max element:**

```javascript
const arr = [5, 1, 3, 2, 6];

const output = arr.reduce(function (maxEle, curr) {
  maxEle = curr > maxEle ? curr : maxEle;

  return maxEle;
}, 0);

console.log(output);
```

## Tricky Examples:

#### Question 01:

Extract the Full name (First Name + Last Name)

```javascript
// Expected Output: ["Avinash Yadav", "Jay Shah", "Bhanu Singh", "Ravi Gupta"]

const users = [
  {
    firstName: "Avinash",
    lastName: "Yadav",
    age: 26,
  },
  {
    firstName: "Jay",
    lastName: "Shah",
    age: 75,
  },
  {
    firstName: "Bhanu",
    lastName: "Singh",
    age: 50,
  },
  {
    firstName: "Ravi",
    lastName: "Gupta",
    age: 26,
  },
];

const result = users.map((x) => x.firstName + " " + x.lastName);

console.log(result);
```

OUTPUT:

    [ 'Avinash Yadav', 'Jay Shah', 'Bhanu Singh', 'Ravi Gupta' ]

#### Question 02:

Question:
Get the age and the number of users correspoding to that age.

```javascript
// Expected Output: {26: 2, 50:1, 75:1}

const users = [
  {
    firstName: "Avinash",
    lastName: "Yadav",
    age: 26,
  },
  {
    firstName: "Jay",
    lastName: "Shah",
    age: 75,
  },
  {
    firstName: "Bhanu",
    lastName: "Singh",
    age: 50,
  },
  {
    firstName: "Ravi",
    lastName: "Gupta",
    age: 26,
  },
];

const result = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] += 1;
  } else {
    acc[curr.age] = 1;
  }

  return acc;
}, {});

console.log(result);
```

OUTPUT:

    { '26': 2, '50': 1, '75': 1 }

#### Question 03:

Question:
Find out firstName all the users whose age is less than 30.

```javascript
const users = [
  {
    firstName: "Avinash",
    lastName: "Yadav",
    age: 26,
  },
  {
    firstName: "Jay",
    lastName: "Shah",
    age: 75,
  },
  {
    firstName: "Bhanu",
    lastName: "Singh",
    age: 50,
  },
  {
    firstName: "Ravi",
    lastName: "Gupta",
    age: 26,
  },
];

// METHOD 01: USING filter FUNCTION:
// const result = users.filter((x) => x.age < 30).map(x => x.firstName);

// METHOD 02: USING reduce FUNCTION:
const result = users
  .reduce(function (acc, curr) {
    if (curr.age < 30) {
      acc.push(curr);
    }

    return acc;
  }, [])
  .map((x) => x.firstName);

console.log(result);
```

OUTPUT:

    [ 'Avinash', 'Ravi' ]

---

<br><br>

<p align="left">
  <a href="./21_Higher_Order_Functions_And_Functional_Programming.md"><b>‹ GO TO PREVIOUS</b></a>
</p>

<p align="right">
  <a href="./23_CallBack_Hell.md"><b>GO TO NEXT ›</b></a>
</p>

---
