# CHAPTER 15: Important Concept:

- Closures are used in encapsulation and data hiding.

**[without closures]** => in this code, anyone can access count and change it.

```javascript
var count = 0;

function increment() {
  count++;
}
```

**[with closures]** => putting everything into a function

```javascript
function counter() {
  var count = 0;

  function increment() {
    count++;
  }
}

console.log(count); // this will give referenceError as count can't be accessed.
```

**[increment with function using closure]**

```javascript
function counter() {
  var count = 0;

  return function increment() {
    count++;

    console.log(count);
  };
}

var counter1 = counter(); //counter fxn has closure with count var.

counter1(); // increments counter
```

Above code is not good and scalable for say, when you plan to implement decrement counter at a later stage.
To address this issue, we use constructors

Adding decrement counter and refactoring code:

```javascript
function Counter() {
  //constructor function. Good coding would be to capitalize first letter of Counter fun.
  var count = 0;

  this.incrementCounter = function () {
    //anonymous function
    count++;

    console.log(count);
  };

  this.decrementCounter = function () {
    count--;

    console.log(count);
  };
}

var counter1 = new Counter(); // new keyword for Counter fxn

counter1.incrementCounter();
counter1.incrementCounter();

counter1.decrementCounter();

// returns 1 2 1
```

### Disadvantages of closure

- Overconsumption of memory when using closure as everytime as those closed over variables are not garbage collected till program expires. So when creating many closures, more memory is accumulated and this can create memory leaks if not handled.
- **Garbage collector** : Program in JS engine or browser that frees up unused memory. In highlevel languages like C++ or JAVA, garbage collection is left to the programmer, but in JS engine its done implicitly.

```javascript
function a() {
  var x = 0;

  return function b() {
    console.log(x);
  };
}

var y = a(); // y is a copy of b()

y();
```

Once `a()` is called, its element `x` should be garbage collected ideally. But fxn `b` has closure over var `x`. So memory of `x` cannot be freed.

Like this if more closures formed, it becomes an issue. To tacke this, JS engines like v8 and Chrome have smart garbage collection mechanisms.

Say we have var `x = 0`, `z = 10` in above code. When console log happens, `x` is printed as `0` but `z` is removed automatically.

---

<br><br>

<p align="left">
  <a href="./14_setTimeout_And_closures.md"><b>‹ GO TO PREVIOUS</b></a>
</p>

<p align="right">
  <a href="./16_Functions.md"><b>GO TO NEXT ›</b></a>
</p>

---
