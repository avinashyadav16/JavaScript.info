# Chapter 23: Callback Hell

## Callback: The Good Part

**How callbacks are super important while writing asynchronous JS codes.**

since javascript is synchronous single threaded language and it can do just one thing at a time, it has just one call stack and it can just execute just one thing at a time, therefore whatever code we give to the javascript will be quickly executed by the js engine, it does not waits anything.

```javascript
console.log("Hello");

console.log("JavaScript");

console.log("Callback");

// This code wil be quickly executed by the js engine.
```

But what if we really need to wait for something. Let's day we want to execute this statement `console.log("JavaScript");` after 5 seconds. So, we can achieve this feat with the help of callback.

Callbacks are like super powerful way of handling async operations in JavaScript. Asynchronous programming in JavaScript exist because callback exists.

```javascript
console.log("Hello");

setTimeout(function () {
  console.log("JavaScript");
}, 5000);

console.log("Callback");
```

So we gave the callback function to `setTimeout()`, now it is the job of `setTimeout()` to execute it after 5000ms. So using callback is a powerful way to achieve asynchronous things in JavaScript.

### Example 02:

Suppose we are building a e-commerce website and it can't exist without a cart. Create a `cart`. Suppose if we have access to two backend apis one is the `createOrder()` API and another API which can be proceed to payment: `proceedToPayment()`. There is a dependency between them i.e. `proceedToPayment()` API can only be called after `createOrder()` API has been called.

Since this is an async operation. So here call back can come into picture and call back can help us write code for this kind of behavor Behavior.

```javascript
const cart = ["Shoe", "Jean", "Pen"];

api.createOrder(cart, function () {
  api.proceedToPayemnt(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});
```

So now we see a problem with this code.
When we have a large code base and there are so many apis and these apis are dependent on one after the other so what happens is we end up falling into this callback hell.

So one callback inside another callback inside another API or some if statements and random things start happening, making it a callback hell and our code starts to grow horizontally instead of vertically, this is what a callback hell.

## Callback: The Bad Part

**Using callback can lead us to face lots of issues. Two major issues of that are: `callback hell` and `inversion of control`.**

So the first problem with using callback is callback hell and this structure is also known as `PYRAMIND OF DOOM`.

So now Inversion of control is like loosing the control of our code when we are using callback.

```javascript
const cart = ["Shoe", "Jean", "Pen"];

api.createOrder(cart, function () {
  api.proceedToPayemnt();
});
```

So now what is happening in this code is we are creating a order and what we did here was we took the `proceedToPayemnt()` callback function and we give it to `createOrder()` API and now we are blindly trusting `createOrder()` API and expecting that `createOrder()` function at some point of time will create an order and will call our function `proceedToPayemnt()` back. But it is risky because this is an important piece of our code.

Now we don't know create order API must have been in some other service or some other developer wrote it. There could be a lot of bugs inside `createOrder()` API. What if our callback function was never called. We don't know what is the code returns in `createOrder()` API we are just blindly trusting it. What if our callback function `proceedToPayemnt()` is called twice proceed to payment happens twice.

---

<br><br>

<p align="left">
  <a href="./22_map_filter_reduce.md"><b>‹ GO TO PREVIOUS</b></a>
</p>

<p align="right">
  <a href="./24_Promises.md"><b>GO TO NEXT ›</b></a>
</p>

---
