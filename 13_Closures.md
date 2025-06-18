# CHAPTER 13: Closures in JS

### Important Interview Question

**Closure :** Function bundled together with its lexical environment/scope.

JS is a weird language. You can pass functions as parameters to another function, assign a variable to an entire function, or even return a function.

e.g.:

```javascript
function x() {
  var a = 7;

  function y() {
    console.log(a);
  }

  return y; // instead of y();
}

var z = x();

console.log(z); // value of z is entire code of function y.
```

When functions are returned from another function, they still maintain their lexical
scope.

- When `y` is returned, not only is the function returned but the entire closure (`function y + its lexical scope`) is returned and put inside `z`. So when `z` is used somewhere else in program, it still remembers variable `a` inside `x()`
- Closure is a very powerful concept of JS, just because this function remembers things even if they are not in their lexical scope

### Some Gottchas:

#### CODE - 01

```javascript
function x() {
  var a = 7;

  function y() {
    console.log(a);
  }

  a = 100;

  return y;
}

var z = x();
z();
```

OUTPUT:

    100

#### CODE - 02

```javascript
function w() {
  var b = 900;

  function x() {
    var a = 7;

    function y() {
      console.log(a, b);
    }

    y();
  }

  x();
}

var z = w();
z();
```

OUTPUT:

    7 900

### Uses of Closure

- Module Design Pattern,
- Currying,
- Functions like once(fxn that can be run only once),
- memoize,
- maintaining state in async world,
- setTimeout,
- iterators
- ...

---

<br><br>

<p align="left">
  <a href="./12_Block_Scope_And_Shadowing.md"><b>‹ GO TO PREVIOUS</b></a>
</p>

<p align="right">
  <a href="./14_setTimeout_And_closures.md"><b>GO TO NEXT ›</b></a>
</p>

---
