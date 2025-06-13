# CHAPTER 26: ASYNC AWAIT:

## Async Functions

`async` is a keyword that is used to create async function.

It always returns a promise.

1. Either we return a promise. OR
2. If we don't return a promise(something non-promise value(string, float, boolean, etc.)), it will take the value and automatically wrapped it inside promise and return it.

**EXAMPLE 01:**

```javascript
async function getData() {
  return "Namaste"; // Automatically wrapped in promise.
}

// Equivalent to:
function getData() {
  return Promise.resolve("Namaste");
}
```

**EXAMPLE 02:**

```javascript
async function getData() {
  return "Namaste";
}

const dataPromise = getData();

console.log(dataPromise);

dataPromise.then((res) => console.log(res));
```

OUTPUT:

        Promise { 'Namaste' }
        Namaste

**EXAMPLE 03:**

```javascript
const p = new Promise((resolve, reject) => {
  resolve("Promise Resolved Value!");
}); // promise 'p' is being returned from here.

console.log(p);

async function getData() {
  return p;
} // Will the promise 'p' be again wrapped in another promise and returned? => NO!! (if the returned value is already a promise, it won't be wrapped in another promise.)

const dataPromise = getData();
console.log(dataPromise);

dataPromise.then((res) => console.log(res));
```

OUTPUT:

        Promise { 'Promise Resolved Value!' }
        Promise { <pending> }
        Promise Resolved Value!

## Key Properties:

1. Always returns a promise

   - Non-promise values are auto-wrapped
   - Promise values are returned as - it is

2. Syntax: `async function functionName() {}`

## ⏳ Await Keyword

- `await` is a keyword that can only be used inside an `async` function.
- We use the keyword `await` in front of the promise and it resolves the promise.

```javascript
async function handlePromise() {
  const val = await somePromise;
  console.log(val);
}
```

**Rules:**

- Can only be used inside async functions
- Pauses execution until promise settles (but doesn't block main thread)
- Returns the resolved value of the promise

## 🔄 Promise Handling Comparison

### **Traditional Approach**

```javascript
const p = new Promise((resolve, reject) => {
  resolve("Promise Resolved Value!");
});

function getData() {
  p.then((res) => console.log(res));
  console.log("Namaste");
}

getData();

// Output:
// Namaste
// Promise Resolved Value!
```

```javascript
const p = new Promise((resolve, reject) => {
  // FAKING IT FOR PROMISE BY ADDING TIME DELAY:
  setTimeout(() => {
    resolve("Promise Resolved Value!");
  }, 10000);
});

function getData() {
  // JS Engine will not wait here for promise to be resolved
  p.then((res) => console.log(res));

  console.log("Namaste");
}

getData();
```

OUTPUT:

        Namaste -> After printing this line it waits for 10sec
        Promise Resolved Value!

### **Async/Await Approach**

Async and Await combo are used to handle promises.

```javascript
const p = new Promise((resolve, reject) => {
  resolve("Promise Resolved Value!");
});

async function handlePromise() {
  console.log("Hello World");

  const val = await p; // instead of doing 'p.then()', we will do 'await p'.

  console.log("Namaste");

  console.log(val);
}

handlePromise();

// Output:
// Hello World
// Namaste
// Promise Resolved Value!
```

```javascript
const p = new Promise((resolve, reject) => {
  // FAKING IT FOR PROMISE BY ADDING TIME DELAY:
  setTimeout(() => {
    resolve("Promise Resolved Value!");
  }, 10000);
});

async function handlePromise() {
  console.log("Hello World");

  // Here JS Engine was waiting for the promise to be resolved.
  // and it will only go to next line once the promise is resolved.
  const val = await p;

  console.log("Namaste");

  console.log(val);
}

handlePromise();
```

OUTPUT:

        Hello World             -> prints this line and waits for 10s for the promise to be resolved.
        Namaste
        Promise Resolved Value!

## ⚙️ Behind the Scenes

**Execution Flow**

1. Async function enters call stack
2. Runs synchronously until first `await`
3. Suspends execution (removes from call stack)
4. Resumes when promise settles (continues where left off)
5. Repeats for subsequent `await` calls

#### **Multiple Promises Example**

```javascript
const p1 = new Promise((res) => setTimeout(() => res("P1"), 10000));

const p2 = new Promise((res) => setTimeout(() => res("P2"), 5000));

async function handlePromise() {
  console.log("Hello World");

  const val1 = await p1;
  console.log("Namaste 1");
  console.log(val1);

  const val2 = await p2;
  console.log("Namaste 2");
  console.log(val2);
}
```

- **Behavior:** Waits for `p1` (10s) → then `p2` (already resolved after 5s)
- Not parallel - sequential execution

```javascript
const p1 = new Promise((res) => setTimeout(() => res("P1"), 10000));

const p2 = new Promise((res) => setTimeout(() => res("P2"), 5000));

async function handlePromise() {
  console.log("Hello World");

  const val2 = await p2;
  console.log("Namaste 2");
  console.log(val2);

  const val1 = await p1;
  console.log("Namaste 1");
  console.log(val1);
}

handlePromise();
```

OUTPUT:

    Hello World   -> prints immediately then waits for 5 sec.
    Namaste 2
    P2            -> after printing this the second promise is not resolved yet so it again waits for 5 more sec.
    Namaste 1
    P1

## 🌐 Real-world Fetch Example

```javascript
async function handlePromise() {
  try {
    const response = await fetch("https://api.github.com/users/avinashyadav16");

    const data = await response.json();

    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

// WORKING OF fetch():
// fetch() is a promise that returns a response.
// the response.json() is again a promise. It will be readableStream.
// fetch() => response.json() => result(jsonValue)

// fetch().then(res => res.json()).then(res => console.log(res));
```

<details><summary><b>OUTPUT:</b></summary>

```javascript
{
  login: 'avinashyadav16',
  id: 115718218,
  node_id: 'U_kgDOBuW4Sg',
  avatar_url: 'https://avatars.githubusercontent.com/u/115718218?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/avinashyadav16',
  html_url: 'https://github.com/avinashyadav16',
  followers_url: 'https://api.github.com/users/avinashyadav16/followers',
  following_url: 'https://api.github.com/users/avinashyadav16/following{/other_user}',
  gists_url: 'https://api.github.com/users/avinashyadav16/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/avinashyadav16/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/avinashyadav16/subscriptions',
  organizations_url: 'https://api.github.com/users/avinashyadav16/orgs',
  repos_url: 'https://api.github.com/users/avinashyadav16/repos',
  events_url: 'https://api.github.com/users/avinashyadav16/events{/privacy}',
  received_events_url: 'https://api.github.com/users/avinashyadav16/received_events',
  type: 'User',
  user_view_type: 'public',
  site_admin: false,
  name: 'Avinash Yadav',
  company: 'SRM University AP, Andhra Pradesh',
  blog: 'https://avinash-yadav16.netlify.app',
  location: 'Ayodhya, Uttar Pradesh',
  email: null,
  hireable: null,
  bio: '📌 Diving into NLP 💻 and 🦿 DL',
  twitter_username: null,
  public_repos: 37,
  public_gists: 0,
  followers: 12,
  following: 14,
  created_at: '2022-10-13T13:46:29Z',
  updated_at: '2025-05-15T12:40:42Z'
}

```

</details>

**Fetch Breakdown:**

1. fetch() returns Response promise
2. response.json() returns data promise
3. Both handled sequentially with await

## 🚨 Error Handling

#### Method 1: try-catch

```javascript
async function handlePromise() {
  try {
    const data = await fetchAPI();
  } catch (err) {
    console.error(err);
  }
}
```

#### Method 2: Promise.catch

```javascript
async function handlePromise() {
  const data = await fetchAPI().catch((err) => console.error(err));
}
```

## 💡 Key Insights

1. Syntactic Sugar: Async/await is just cleaner syntax over promises
2. Non-blocking: Suspends function execution without blocking main thread
3. Sequential Flow: Makes async code read like synchronous code
4. Debugging: Easier to debug with linear execution flow

## 🎯 Interview Questions

#### "What is async/await?"

- **Async:** Keyword to declare async functions (always return promise)
- **Await:** Pauses execution until promise settles (only inside async functions)
- Cleaner way to handle promises compared to .then/.catch

#### "How does it work behind the scenes?"

- Function execution suspends at await points
- Removed from call stack while waiting
- Resumes when promise settles
- Maintains state to continue where left off

#### "When to use Async/await vs .then/.catch?"

- **Async/await:**

  - Sequential async operations
  - When readability is important
  - Complex promise chains

- **.then/.catch:**

  - Parallel operations with Promise.all
  - Simple one-off promises

---

<br><br>

<p align="left">
  <a href="./25_Creating_A_Promise_Chaining_And_Error_Handling.md"><b>‹ GO TO PREVIOUS</b></a>
</p>

<p align="right">
  <a href="./27_Promise_APIs.md"><b>GO TO NEXT ›</b></a>
</p>

---
