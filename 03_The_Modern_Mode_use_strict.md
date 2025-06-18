# CHAPTER 03: 🛡️ JavaScript Strict Mode – `"use strict"`

## 📜 What is `"use strict"`?

JavaScript has evolved over time while keeping old code working. This meant that early mistakes in the language couldn’t be fixed without breaking existing programs.

That changed in **2009**, with the release of **ECMAScript 5 (ES5)**. It introduced `"use strict"` – a way to opt in to a safer, modern version of JavaScript.

---

## 🧪 Enabling Strict Mode

Strict mode is enabled by placing `"use strict"` at the **very top** of your script or function:

```js
"use strict";

// Your modern JavaScript code here
```

You can also enable it inside a function:

```js
function example() {
  "use strict";
  // strict mode only applies inside this function
}
```

---

## 🚨 Strict Mode Must Be at the Top

Strict mode won’t work if it’s **not at the top**:

```js
alert("Some code");
("use strict"); // ❌ Ignored!
```

✅ Only comments may appear before `"use strict"`.

---

## ❌ No Way to Cancel

Once strict mode is enabled, you **cannot disable it**. There’s no `"no strict"` or similar directive.

---

## 🧪 Using Strict in the Browser Console

Browser consoles don’t run in strict mode by default.

### ✅ To enable it manually:

```js
"use strict";
// your code here
```

Use **Shift + Enter** to input multiline code before running it.

### 💡 Compatibility Wrapper:

If your console doesn’t behave well, wrap your code in an **IIFE** (Immediately Invoked Function Expression):

```js
(function () {
  "use strict";
  // your code here
})();
```

---

## 🤔 Should You Use Strict Mode?

Yes – at least **for now**.

Strict mode helps catch bugs, improves performance in some cases, and prevents certain bad practices.

```js
"use strict";
// safer and cleaner code
```

But… when you start using **classes** or **modules**, strict mode is enabled automatically. So:

✅ Use `"use strict"` now.

💡 Later, with **modern features**, you won’t need it!

---

### 🔐 Benefits of `"use strict"`:

- Makes it easier to write secure JavaScript.
- Prevents the use of undeclared variables.
- Eliminates silent errors.
- Fixes mistakes in the language.

---

Stay strict, code safe! 💻🔒

---

<br><br>

<p align="left">
  <a href="./02_Code_Structure.md"><b>‹ GO TO PREVIOUS</b></a>
</p>

<p align="right">
  <a href="./04_Execution_Context.md"><b>GO TO NEXT ›</b></a>
</p>

---
