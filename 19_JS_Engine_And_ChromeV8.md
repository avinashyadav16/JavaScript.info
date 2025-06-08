# CHAPTER 19: JS Engine and Google v8 architecture

#### JS runs literally everywhere from smart watch to robots to browsers because of Javascript Runtime Environment (JRE)

- JRE consists of a JS Engine (Heart of JRE), set of APIs to connect with outside environment, event loop, Callback queue, Microtask queue etc.
- JRE is a container that can run JS code.

- ECMAScript is a governing body of JS. It has set of rules followed by all JS engines like Chakra(Edge), Spidermonkey(Firefox), v8(Chrome)
- JS Engine is **not a machine**. Its software written in low level languages (eg. C++) that takes in hi-level code in JS and spits out low level machine code.

In all languages, code is compiled either with **interpreter** or with **compiler**. JS used to have only interpreter in old times, but now has **both** to compile JS code.

Interpreter : Takes code and executes line by line. Has no idea what will happen in next line. Very fast.
Compiler : Code is compiled and an optimized version of same code is formed, and then executed. More efficient

- Code inside JRE passes through 3 steps : **Parsing, Compilation and Execution**

1. **Parsing** - Code is broken down into tokens. In "let a = 7" -> let, a, =, 7 are all tokens. Also we have a **syntax parser** that takes code and converts it into an **AST (Abstract Syntax Tree)** which is a JSON with all key values like type, start, end, body etc (looks like package.json but for a line of code in JS. Kind of unimportant) (Check out astexplorer.net -> converts line of code into AST)

2. **Compilation** - JS has something called **Just-in-time(JIT) Compilation - uses both interpreter & compiler**. Also compilation and execution both go hand in hand. The AST from previous step goes to interpreter which converts hi-level code to byte code and moves to execeution. While interpreting, compiler also works hand in hand to compile and form optimized code during runtime.

**NOTE:**

    Interpreter: Runs code line by line. => Fast
    Compiler: compiles whole code at once. => Efficiency

    JavaScript can be complied or interpreted language, everything depends on JS Engine.(So in the begi nning when Brendan Eich created JS, it was meant to be an interpreted language because the browser won't wait for the code to compile and then run. But now most of the modern browser/JS engine uses both compiler and interpreter. So, now it all depends on JS Engine whether it is purely interpreted or Just in compiled.)

3. **Execution** - Needs 2 components ie. Memory heap(place where all memory is stored) and Call Stack. There is also a _garbage collector._ It uses an algo called **Mark and Sweep**.

Companies use different JS engines and each try to make theirs the best.

- v8 of Google has Interpreter called _Ignition_, a compiler called _Turbo Fan_ and garbage collector called _Orinoco_

---

<br><br>

<p align="left">
  <a href="./18_Async_And_EventLoops.md"><b>‹ GO TO PREVIOUS</b></a>
</p>

<p align="right">
  <a href="./20_setTimeout().md"><b>GO TO NEXT ›</b></a>
</p>

---
