# CHAPTER 02: 🧱 JavaScript Code Structure

The building blocks of code.

## 📌 Statements

Statements are syntax constructs and commands that perform actions.

For example We’ve already seen a statement, `alert('Hello, world!')`, which shows the message “Hello, world!”.:

```js
alert("Hello, world!");
```

We can have as many statements in our code as we want. They can be separated with a semicolon (`;`):

```js
alert("Hello");
alert("World");
```

But usually, for readability, we write them on separate lines:

```js
alert("Hello");
alert("World");
```

---

## 🟡 Semicolons

Semicolons can be **omitted** in many cases where a line break exists:

This would also work:

```js
alert("Hello");
alert("World");
```

Here, JavaScript interprets the line break as an **implicit** semicolon. This is called **automatic semicolon insertion**. But be careful—**not all cases** are safe.

**In most cases, a newline implies a semicolon. But “in most cases” does not mean “always”!** There are cases when a newline does not mean a semicolon. For example:

Example:

```js
alert(3 + 1 + 2);
```

✅ This works as expected and shows `6` because JavaScript does not insert semicolons here. JavaScript knows the line ends in `+`, so it continues.

However, **there are situations where JavaScript “fails” to assume a semicolon where it is really needed**:

```js
alert("Hello");

[1, 2].forEach(alert);
```

This shows:

```
Hello
1
2
```

But if you remove the semicolon after the `alert`:

```js
alert("Hello")[(1, 2)].forEach(alert);
```

It fails!
The difference compared to the code above is only one character: the semicolon at the end of the first line is gone.

If we run this code, only the first Hello shows (and there’s an error, you may need to open the console to see it). There are no numbers any more.

That’s because JavaScript does not assume a semicolon before square brackets [...]. So, the code in the last example is treated as a single statement.

Here’s how the engine sees it:

```js
alert("Hello")[(1, 2)].forEach(alert);
```

Which is incorrect. So, always using semicolons is a **safe practice**, especially for beginners.

---

## 💬 Comments

As code grows and becomes more and more complex, **comments** help explain what’s going on.

Comments can be put into any place of a script. They don’t affect its execution because the engine simply ignores them.

### ✅ Single-line comments

One-line comments start with two forward slash characters `//`:

The rest of the line is a comment. It may occupy a full line of its own or follow a statement.

```js
// This comment is on its own line
alert("Hello");

alert("World"); // This one follows a statement
```

### ✅ Multiline comments

Multiline comments start with a forward slash and an asterisk `/* `and end with an asterisk and a forward slash `*/`.

```js
/* This is a
multiline comment */
alert("Hello");
alert("World");
```

You can also temporarily disable code:

```js
/*
alert('Hello');
*/
alert("World");
```

### ⚠️ No Nested Comments!

There may not be `/*...*/` inside another `/*...*/`.

Such code will die with an error:

```js
/*
  /* Nested comment? */
*/
alert('World');
```

---

## ⚡ Editor Tip: Use Hotkeys!

- Single-line comment: `Ctrl + /` (or `Cmd + /` on Mac)
- Multiline comment: `Ctrl + Shift + /` (or `Cmd + Option + /` on Mac)

---

<br><br>

<p align="left">
  <a href="./01_JavaScript_Fundamentals.md"><b>‹ GO TO PREVIOUS</b></a>
</p>

<p align="right">
  <a href="./03_The_Modern_Mode_use_strict.md"><b>GO TO NEXT ›</b></a>
</p>

---
