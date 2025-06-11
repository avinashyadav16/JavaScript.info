# Chapter 24: Promises

## 🎯 What is a Promise?

- **Definition**: A promise is an object representing the **eventual completion (or failure)** of an asynchronous operation. Promises are used to handle async operations in JavaScript.
- **Key Characteristics**:
  - Placeholder for a value not yet available (future value).
  - Container that gets populated when async operation completes.
  - Immutable once resolved (cannot be modified after settlement).

## 🔍 Why Promises?

**BEFORE PROMISES:**

```javascript
const cart = ["Shoe", "Jean", "Pen"];

createOrder(cart);

proceedToPayemnt(OrderId);
```

Now we have a cart and two APIs. `createOrder()` will create the order and return `orderId` to us. And another api `proceedToPayment()` api will take the `orderId` and will take us to payment page.

Now these two APIs are asynchronous in nature. We don't know how much time it will take. And they are dependent on each other.

**WITH THE HELP OF CALLBACKS:**

```javascript
// Callback Hell Example

const cart = ["Shoe", "Jean", "Pen"];

createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInfo) {
    showOrderSummary(paymentInfo, function () {
      updateWalletBalance();
    });
  });
}); // Here we are passing the callback function to another function
```

This is how we used to handle async operation with the help of callbacks.
But the major issue with it is `inversion of control`.

**USING PROMISES:**

We can assume promise as an empty object with some data value in it. And this data value will hold whatever the function will return.

`{data: undefined}`

And after some time when the details are available, they are filled in the data value object at later point of time.

```javascript
const cart = ["Shoe", "Jean", "Pen"];

const promise = api.createOrder(cart);

promise.then(function (orderId) {
  api.proceedToPayemnt(orderId);
}); // Here we are attaching the callback function to a promise object
```

---

**Chaining Of Promises:**

```javascript
// Promise Chaining

const cart = ["Shoe", "Jean", "Pen"];

createOrder(cart)
  .then(function (orderId) {
    return proceedToPayemnt(orderId);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (paymentInfo) {
    return updateWalletBalance(paymentInfo);
  });

// OR: With arrow function:

createOrder(cart)
  .then((orderId) => proceedToPayemnt(orderId))
  .then((paymentInfo) => showOrderSummary(paymentInfo))
  .then((paymentInfo) => updateWalletBalance(paymentInfo));
```

### Eliminates Inversion of Control:

- With callbacks, we surrender control to external functions.

- With promises, we attach callbacks to promise objects (control remains with us).

### Promise States

| State       | Description                            |
| ----------- | -------------------------------------- |
| `pending`   | Initial state (not fulfilled/rejected) |
| `fulfilled` | Operation completed successfully       |
| `rejected`  | Operation failed                       |

### Promise Object Structure

```javascript
{
  [[Prototype]]: Promise,
  [[PromiseState]]: "pending" | "fulfilled" | "rejected",
  [[PromiseResult]]: undefined | value | error
}
```

### Key Features

1. Guarantees:

   - Callback will be called exactly once
   - State transitions are permanent (cannot change after settlement)

2. Error Handling:

   - Use `.catch()` or second argument in `.then()`

```javascript
fetchAPI()
  .then((data) => process(data))
  .catch((err) => handleError(err));
```

3. Chaining:

   - Must return values/promises in `.then()` for proper data flow:

```javascript

createOrder(cart)
  .then(orderId => {
    return proceedToPayment(orderId); // ← Crucial return
  })
  .then(paymentInfo => ...)
```

### Interview Answers

1. **"What is a Promise?"**

   - _"A promise is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation, serving as a placeholder for the operation's future result."_

2. **"Why use Promises?"**

   - Avoid callback hell → Flat, readable code via chaining

   - Better control flow → Attach handlers instead of passing callbacks

   - Built-in error propagation → Single .catch() for entire chain

   - Immutability → Resolved promises can't change state

### ⚠️ Common Pitfalls

1. Forgetting to return in promise chains
2. Not handling errors (uncaught promise rejections)
3. Assuming promises are synchronous (they're always async)

---

<br><br>

<p align="left">
  <a href="./23_CallBack_Hell.md"><b>‹ GO TO PREVIOUS</b></a>
</p>

<p align="right">
  <a href="./25_Creating_A_Promise_Chaining_And_Error_Handling.md"><b>GO TO NEXT ›</b></a>
</p>

---
