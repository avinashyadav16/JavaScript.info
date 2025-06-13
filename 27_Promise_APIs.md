# CHAPTER 27: Promise APIs + Interview Questions

_1. Promise.all()_

_2. Promise.allSettled()_

_3. Promise.race()_

_4. Promise.any()_

## 1. Promise.all()

Suppose we have to make parallel api calls(lets say getting the results for 10 userIds) and get the results.

The contract of it is that it takes an array(mainly iterables) of promises as an input.

It waits for all the promises to finish before giving back the result.

But as soon as any one of the promises get rejected the `Promise.all()` will throw an error and `Promise.all()` will also be failure and output will be the error of the rejected promise.

```javascript
const p1 = new Promise((resolve) =>
  setTimeout(() => resolve("P1 Success"), 3000)
);

const p2 = new Promise((resolve) =>
  setTimeout(() => resolve("P2 Success"), 1000)
);

const p3 = new Promise((resolve) =>
  setTimeout(() => resolve("P3 Success"), 2000)
);

Promise.all([p1, p2, p3])
  .then((results) => console.log(results))
  .catch((err) => console.error(err));

// Output after 3 seconds: ['P1 Success', 'P2 Success', 'P3 Success']
```

Let's suppose `P2` throws an error so after `1 sec` the `Promise.all()` will throw the error as an output and will not wait for any other promise to get fulfilled or reject. So what will happen to other promises that they will either get accepted or rejected based on thier fate but `Promise.all()` will get rejected.

#### Key Characteristics:

- Takes an array/iterable of promises
- Returns a single promise that:
  - Resolves when all input promises resolve
  - Rejects immediately if any promise rejects (fail-fast)
- Result is an array of resolved values in input order
- Use case: When you need all promises to succeed

## 2. Promise.allSettled()

Suppose what if we just want the results from the successful promises and does not care about the rejected promises. This is where `Promise.allSettled()` comes into the picture.

The returned result is an object.

```javascript
const p1 = new Promise((resolve) =>
  setTimeout(() => resolve("P1 Success"), 3000)
);

const p2 = new Promise((_, reject) =>
  setTimeout(() => reject("P2 Fail"), 1000)
);

const p3 = new Promise((resolve) =>
  setTimeout(() => resolve("P3 Success"), 2000)
);

Promise.allSettled([p1, p2, p3]).then((results) => console.log(results));

/* Output after 3 seconds:
[
{status: "fulfilled", value: "P1 Success"},
{status: "rejected", reason: "P2 Fail"},
{status: "fulfilled", value: "P3 Success"}
]
*/
```

Here `P2` is rejected but the `Promise.allSettled()` is still waiting for all the other promises to get settled.

#### Key Characteristics:

- Waits for all promises to settle (either fulfill or reject)
- Never rejects - always resolves with status objects
- Each result object contains:
  - `status`: "fulfilled" or "rejected"
  - `value` (if fulfilled) or `reason` (if rejected)
- Use case: When you want to handle all results regardless of fulfilled/failure

## 3. Promise.race()

The person who finishes first, will be winner. So, as soon as we get the winner(as soon as the first promise is resolved) we give back the result of the winner.

It gives the result of first settled promise.

```javascript
const p1 = new Promise((resolve) =>
  setTimeout(() => resolve("P1 Success"), 3000)
);

const p2 = new Promise((_, reject) =>
  setTimeout(() => reject("P2 Fail"), 1000)
);

const p3 = new Promise((resolve) =>
  setTimeout(() => resolve("P3 Success"), 2000)
);

Promise.race([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// Output after 1 second: "P2 Fail"
```

#### Key Characteristics:

- Returns a promise that settles when the first input promise settles
- Settles with same value/reason as the first settling promise
- Doesn't wait for other promises to complete
- Use case: When you need the first available result (success or failure)

## 4. Promise.any()

Whenever first promise is resolved. It will wait for the first promise to get successful.

`Promise.any()` waits for the first success/fulfill.

```javascript
const p1 = new Promise((_, reject) =>
  setTimeout(() => reject("P1 Fail"), 3000)
);

const p2 = new Promise((resolve) =>
  setTimeout(() => resolve("P2 Success"), 5000)
);

const p3 = new Promise((_, reject) =>
  setTimeout(() => reject("P3 Fail"), 2000)
);

Promise.any([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => {
    console.error(err); // AggregateError

    console.error(err.errors); // ['P1 Fail', 'P3 Fail', 'P2 Fail']
  });

// Output after 5 seconds: "P2 Success"
```

If all the promises are failed then the result will be `AggregateError` and it will be an array of all the promise's error.

#### Key Characteristics:

- Returns a promise that:
  - Resolves when the first input promise fulfills
  - Rejects only if all input promises reject (with AggregateError)
- AggregateError contains `errors` array with all rejection reasons
- Use case: When you need the first successful result

## 🔍 Key Terminology

| Term           | Meaning                                                        |
| -------------- | -------------------------------------------------------------- |
| Settled        | Promise has completed (either fulfilled or rejected)           |
| Fulfilled      | Promise resolved successfully (`.then()` fires)                |
| Rejected       | Promise failed (`.catch()` fires)                              |
| AggregateError | Special error type when all promises in `Promise.any()` reject |

## 💡 Comparison Table

| API                    | Waits For     | Short Circuits  | Output Format                  | Use Case                              |
| ---------------------- | ------------- | --------------- | ------------------------------ | ------------------------------------- |
| `Promise.all()`        | All           | On first reject | Array of values                | All must succeed                      |
| `Promise.allSettled()` | All           | Never           | Array of status objects        | Handle all regardless of success/fail |
| `Promise.race()`       | First         | On first settle | Single value/reason            | First available result (good or bad)  |
| `Promise.any()`        | First success | On all reject   | Single value or AggregateError | First successful result               |

## 🛠 Real-world Use Cases

### 1. Dashboard Data Loading (Promise.all)

```javascript
// Load all dashboard data in parallel
const [user, orders, notifications] = await Promise.all([
  fetch("/api/user"),
  fetch("/api/orders"),
  fetch("/api/notifications"),
]);
```

### 2. Independent Components (Promise.allSettled)

```javascript
// Load multiple independent components
const results = await Promise.allSettled([
  loadRecommendations(),
  loadComments(),
  loadAds(), // Might fail but shouldn't break the page
]);
```

### 3. Fastest Response (Promise.race)

```javascript
// Get data from fastest source
const data = await Promise.race([
  fetchFromCDN(),
  fetchFromPrimaryServer(),
  fetchFromSecondaryServer(),
]);
```

### 4. Fallback Sources (Promise.any)

```javascript
// Try multiple payment gateways
const paymentResult = await Promise.any([
  stripe.processPayment(),
  paypal.processPayment(),
  razorpay.processPayment(),
]);
```

## ⚠️ Common Pitfalls

### 1. Unhandled Rejections

- Always include `.catch()` or `try/catch` with `async/await`
- Especially important for `Promise.all()` which fails fast

### 2. Memory Leaks

- Unnecessary promise creation can lead to memory issues
- Cancel unused promises when possible (though native cancellation isn't available)

### 3. Order Preservation

- `Promise.all` maintains input order in output array
- `Promise.race`/`Promise.any` don't preserve order - first settled wins

### 4. Error Handling Differences

- `Promise.allSettled` never throws - check status objects
- `Promise.any` throws AggregateError when all reject

---

<br><br>

<p align="left">
  <a href="./26_async_await.md"><b>‹ GO TO PREVIOUS</b></a>
</p>

---
