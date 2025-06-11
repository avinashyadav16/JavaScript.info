# CHAPTER 25: Creating a Promise, Chaining & Error Handling

## 🛠️ CREATING A PROMISE:

```javascript
const cart = ["Shoe", "Jean", "Pen"];

// CONSUMER END:
const promise = createOrder(cart);

console.log(promise);

promise
  .then(function (orderId) {
    // proceedToPayment(orderId);
    console.log(
      "proceedToPayment(orderId) API called with orderId: " + orderId
    );
  })
  .catch(function (err) {
    console.log(err.message);
  });

// PRODUCER END:
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // CREATE ORDER

    // VALIDATE ORDER
    if (!validateCart(cart)) {
      const err = new Error("Cart Is Not Valid!");

      reject(err);
    }

    // ORDER ID
    const orderId = "12345";
    if (orderId) {
      // MAKING A FAKE DELAY OF 5000ms
      setTimeout(function () {
        // resolving the promise after 5000ms
        resolve(orderId);
      }, 5000);
    }
  });

  return pr;
}

function validateCart(cart) {
  // 1. For resolving the promise
  // WE CAN HAVE OTHER VALIDATION AS WELL.
  // if (cart.length === 0) {
  //     return false;
  // }
  // return true;

  // 2. For rejecting the promise
  return false;
}

// 1. OUTPUT: (While resolving the promise)
// Promise { <pending> }
// proceedToPayment(orderId) API called with orderId: 12345

// 2. OUTPUT: (While rejecting the promise)
// Promise{
//     <rejected> Error: Cart Is Not Valid!
// }

// Cart Is Not Valid!
```

## 🔄 PROMISE CHAINING:

```javascript
const cart = ["Shoe", "Jean", "Pen"];

// CONSUMER END:
createOrder(cart)
  .then(function (orderId) {
    console.log("orderId is: " + orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId); // return the promise
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo); // handle payment result
  })
  .catch(function (err) {
    console.log(err.message);
  });

// PRODUCER END:
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // VALIDATE ORDER
    if (!validateCart(cart)) {
      const err = new Error("Cart Is Not Valid!");

      reject(err);

      return;
    }

    // ORDER ID
    const orderId = "12345";
    if (orderId) {
      // MAKING A FAKE DELAY OF 5000ms
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });

  return pr;
}

function validateCart(cart) {
  // Simplified validation
  if (cart.length === 0) {
    return false;
  }

  return true;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment Successful!");
  });
}

// OUTPUT:
// orderId is: 12345
// Payment Successful!
```

## ✅ Key Concepts

1. Promise Construction

   - Created using `new Promise()` constructor

   - Takes executor function with `resolve` and `reject` parameters

   - States:

     - `pending` → Initial state
     - `fulfilled` → `resolve()` called
     - `rejected` → `reject()` called

2. Error Handling

   - Use `.catch()` at the end to handle any errors in the chain
   - Or place `.catch()` after specific operations for granular control

```javascript
createOrder(cart)
  .then(/*...*/)
  .catch((orderErr) => {
    /* Handle order errors */
  })
  .then(/*...*/)
  .catch((paymentErr) => {
    /* Handle payment errors */
  });
```

3. Chaining Rules

   - Always return values to pass data down the chain
   - Can return:

     - Regular values → Passed to next `.then()`

     - Promises → Next `.then()` waits for resolution

   - Without `return`, next `.then()` gets `undefined`

4. Real-world Simulation

```javascript
function proceedToPayment(orderId) {
  return new Promise((resolve) => {
    resolve("Payment Successful");
  });
}
```

## 🏗️ Common Patterns

### Pattern 1: Sequential Operations

```javascript
createOrder(cart)
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => showOrderSummary(paymentInfo))
  .then((summary) => updateWallet(summary));
```

### Pattern 2: Error Recovery

```javascript
createOrder(cart)
  .then(processOrder)
  .catch(handleOrderError) // Only handles order errors
  .then(proceedToPayment) // Runs regardless of order success
  .catch(handlePaymentError);
```

## ⚠️ Common Mistakes

1. Forgetting to return:

```javascript

// Wrong ❌
createOrder(cart)
  .then(orderId => { proceedToPayment(orderId) }) // No return!
  .then(paymentInfo => ...) // Gets undefined



// Right ✅
createOrder(cart)
  .then(orderId => { return proceedToPayment(orderId) })

```

2. Nesting promises (creates promise hell):

```javascript

    // Avoid △
    createOrder(cart).then(orderId => {
      proceedToPayment(orderId).then(paymentInfo => {
        showOrderSummary(paymentInfo).then(...)
      })
    })

```

## 📝 E-commerce Flow

```javascript
// API Functions (all return promises)
function createOrder(cart) {
  /*...*/
}
function proceedToPayment(orderId) {
  /*...*/
}
function showOrderSummary(paymentInfo) {
  /*...*/
}
function updateWalletBalance(summary) {
  /*...*/
}

// Promise Chain
createOrder(cart)
  .then((orderId) => {
    console.log("Order created:", orderId);
    return proceedToPayment(orderId);
  })
  .then((paymentInfo) => {
    console.log("Payment:", paymentInfo);
    return showOrderSummary(paymentInfo);
  })
  .then((summary) => {
    console.log("Summary:", summary);
    return updateWalletBalance(summary);
  })
  .then((walletUpdate) => {
    console.log("Wallet updated:", walletUpdate);
  })
  .catch((err) => {
    console.error("Error in process:", err.message);
  });
```

## 💡 Key Takeaways

- Promises provide control inversion solution (vs callbacks)
- Chaining enables sequential async operations cleanly
- Always return in `.then()` for proper data flow
- Error handling is centralized with `.catch()`
- Promises are immutable once settled

---

<br><br>

<p align="left">
  <a href="./24_Promises.md"><b>‹ GO TO PREVIOUS</b></a>
</p>

<p align="right">
  <a href="./26_async_await.md"><b>GO TO NEXT ›</b></a>
</p>

---
