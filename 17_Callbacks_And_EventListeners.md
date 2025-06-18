# CHAPTER 17: Callbacks and Event Listeners

**Callback Function :** Functions are first class citizens i.e. take a function `A` and pass it to another function `B`. Here, `A` is a callback function.(Function that is passed on as argument to another function is called callback function.)

```javascript
function B(A) {}

B(function A() {});
```

- JS is a **synchronous** and **single threaded** language e.g. It can do only one thing at a time and in a specific order. But due to callbacks, we can do async things in JS.

- The callback functions are very powerful in JS as they give the access to whole asynchronous world into synchronous single threaded language.

- So, callback functions gives JS the power of asynchronosity.

> `setTimeout(function () {}, 1000)` -> here the anonymous function is a callback function as it is passed to setTimeout and called sometime later in code after certain time (here 1000ms).

- This is how we do async things. JS is a sync language, but it doesn't wait 1 sec for setTimeout to finish before going to code below it. It stores the function, attaches timer and goes down the code.

```javascript
setTimeout(function () {
  console.log("timer");
}, 5000);

function x(y) {
  console.log("x");

  y();
}

x(function y() {
  console.log("y");
});
```

OUTPUT

    x

    y

    timer

- In the call stack, first `x` and `y` are present. After completion, they go away and stack is empty. Then after 5 seconds(from beginning) anonymous suddenly pops up in stack i.e. setTimeout
- All 3 functions are executed through call stack. If any operation blocks the call stack, its called **blocking the main thread**
- Say if `x()` takes 30 sec to run, then JS has to wait for it to finish as it has only 1 call stack/1 main thread. _Never block main thread_.
- **Always use async for functions that take time e.g. setTimeout**

- JS has just only one call stack and we can call it main thread. So, everything that is executed on our page, is executed throught the call stack only.

- And if any operation blocks the call stack then that is called as blocking the main thread.

## **Event Listener**

- When we create a button in HTML and attack a clickListener in JS:

_in index.html_

```html
<button id="clickMe">Click Me!</button>
```

_in index.js_

```javascript
document.getElementById("clickMe").addEventListener("click", function xyz() {
  //when event click occurs, this callback function is called into callstack
  console.log("Button clicked");
});
```

Suppose we want to increase count by 1 each time button clicked.

- Use global variable (not good as anyone can change it)

```javascript
let count = 0;

document.getElementById("clickMe").addEventListener("click", function xyz() {
  console.log("Button clicked", ++count);
});
```

- Use closures for data abstraction

```javascript
function attachEventList() {
  //creating new function for closure
  let count = 0;

  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("Button clicked", ++count); //now callback function forms closure with outer scope(count)
  });
}

attachEventList();
```

#### Garbage Collection and removeEventListeners

- Event listeners are heavy, that means they take up memory.
- Event listeners are heavy as they form closures. So even when call stack is empty, EventListener won't free up memory allocated to _count_ as it doesn't know when it may need _count_ again.
- Event listeners can also invoke closures with scope.
- Event listeners consume a lot of memory which can potentially slow down the website therefore it is good practice to remove if it is not used.
- **So we remove event listeners when we don't need them (garbage collected)**
- onClick, onHover, onScroll all in a page can slow it down heavily.

---

<br><br>

<p align="left">
  <a href="./16_Functions.md"><b>‹ GO TO PREVIOUS</b></a>
</p>

<p align="right">
  <a href="./18_Async_And_EventLoops.md"><b>GO TO NEXT ›</b></a>
</p>

---
