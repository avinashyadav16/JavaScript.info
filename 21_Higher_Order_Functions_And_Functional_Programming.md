# Chapter 21: Higher-Order Functions And Functional Programming

**`Higher Order Functions:`**
A function which takes another function as an argument or returns a function from it, is know as a Higher order function.

```javascript
function x() {
  console.log("Hello");
}

function y(x) {
  x();
}
```

So, here `x` is a callback function and `y` is a higher order function.

## Introduction to Functional Programming In JS:

#### **NORMAL ZINDAGI CODE**

```javascript
const radiusOfCircles = [3, 1, 2, 4];

const calculateArea = function (radius) {
  const areas = [];

  for (let i = 0; i < radius.length; i++) {
    areas.push(Math.PI * radius[i] * radius[i]);
  }

  return areas;
};

console.log(calculateArea(radiusOfCircles));

const calculatePerimeter = function (radius) {
  const perimeters = [];

  for (let i = 0; i < radius.length; i++) {
    perimeters.push(2 * Math.PI * radius[i]);
  }

  return perimeters;
};

console.log(calculatePerimeter(radiusOfCircles));
```

This is what the most of the people normally try to do to. _[!! NORMAL ZINDAGI !!]_

What if the problem also stats to compute the diameter of the circle. So, one of the problem over here is that we are repeating ourselves. _[Avoids the principles of DRY(Do not Repeat Yourself)]_

#### **MENTOS ZINDAGI CODE**

```javascript
const radiusOfCircles = [3, 1, 2, 4];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const perimeter = function (radius) {
  return 2 * Math.PI * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

const calculateX = function (radii, fxnName) {
  const result = [];

  for (let i = 0; i < radii.length; i++) {
    result.push(fxnName(radii[i]));
  }

  return result;
};

console.log(calculateX(radiusOfCircles, area));
console.log(calculateX(radiusOfCircles, perimeter));
console.log(calculateX(radiusOfCircles, diameter));
```

**Now why This code is good?**
As we can clearly see that we have extracted our code in the smaller chunk, or we have made it modular in nature by introducing modularity.

Each one of the function has one task to one task to perform the calculation.

This is the advantage or the beauty of the functional programming.

We have deduceds all the logic into smaller resuable logic which is function.

---

Here calculateX is almost similar to the map function of JS.
So, somehow we have tried to mimic the same behaviour.

```javascript
const radiusOfCircles = [3, 1, 2, 4];

const area = function (radius) {
  return Math.PI * radius * radius;
};

// This(Array.prototype) will make the function calculateX to be available to all our arrays.
Array.prototype.calculateX = function (fxnName) {
  const result = [];

  // So here `this` points to the array on which it is being called upon.
  for (let i = 0; i < this.length; i++) {
    result.push(fxnName(this[i]));
  }

  return result;
};

console.log(radiusOfCircles.calculateX(area));
```

---

<br><br>

<p align="left">
  <a href="./20_setTimeout().md"><b>‹ GO TO PREVIOUS</b></a>
</p>

<p align="right">
  <a href="./22_map_filter_reduce.md"><b>GO TO NEXT ›</b></a>
</p>

---
