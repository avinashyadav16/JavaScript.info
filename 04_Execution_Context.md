# CHAPTER 04: Execution Context

### Everything in JS happens inside the **execution context.**

Assume execution context to be a big box / container where everything takes place(whole javascript code is executed).

It has 2 components in it:

- **Memory:** The place where all the variables and functions are stored as (key:value) pairs. Memory component is also known as _variable environment_.
- **Code:** The place where code is executed one line at a time. Code component is also known as _Thread of Execution_

<br>

**NOTE:**
_Javascript is not possible without this beautiful execution context._

### JS is a **synchronous single-threaded language**.

- By single threaded, we mean JS can only run 1 command at a time
- By synchronous single threaded, we mean it can run 1 command at a time, **_in a specific order_**

---

<br><br>

<p align="left">
  <a href="./03_The_Modern_Mode_use_strict.md"><b>‹ GO TO PREVIOUS</b></a>
</p>

<p align="right">
  <a href="./05_Execution_Context_And_Call_Stack.md"><b>GO TO NEXT ›</b></a>
</p>

---
