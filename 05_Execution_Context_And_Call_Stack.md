# CHAPTER 05: Execution & Call Stack

**What happens when we run a js program?**

Everytime we run a program, an execution context is created.

```javascript
var n = 2;

function square(num) {
  var ans = num * num;
  return ans;
}

var square2 = square(n);
var square4 = square(4);
```

Now first, for this entire code a **Global** execution context is created.

So, this execution context is created in 2 phases:

1. **CREATION PHASE / MEMORY CREATION PHASE**
2. **CODE EXECUTION PHASE**

## In the first phase (memory creation)

Here JS will allocate memory to all the variables and functions whenever they are encounterd while running whole js program line by line. In case of variables, it stores a special value called _undefined_, and in case of functions it literally stores the whole code of the function inside this memory space.

- Memory is allocated to variables and functions.
- For variable name(which is key) it assigns a value of **undefined**
- For the function name(which is key) it assigns the entire function code as value.

```javascript
n:undefined
square:{...entire-code...}
square2:undefined
square4:undefined

```

## In the second phase (code execution)

- The javascript, once again runs through the whole js program line by line and executes the code now. This is the point when all these functions and every calculation in the program is done.
- The variable name is replaced with its actual assigned value from code. So now `n:2`
- Skips over function code as there is nothing to assign there. Functions are like a mini program in the javascript.
- We encounter a function call in `square2`. So, whenever a new function is envoked, a mini program is envoked. So altogether a brand new local EC is created inside the code part of global EC and this will have the same 2 components: Memory and Code and again 2 phases will be involved.
- In the local EC, `ans` and `num` are both `undefined` (in first phase). Then, the `n` value in global EC is passed to num, replacing `undefined`. `num` is the parameter and `n` is the argument.
- `ans = num*num` (calculated in code part of local EC and returned) replaces `undefined` in local EC (memory part) and the final value is returned from local and is assigned to `square2` var in global.
  After returning, local EC is removed form global EC and control goes back to global.
- One more function call is met. Same thing happens again here.
  Once `square4` value is replaced from `undefined` to `16`, global EC will also be deleted.

To manage all these EC, a **call stack** is created. Everytime code is run, the EC is pushed in. So first global EC is pushed. Then e1 EC(for `square2`) is pushed, and then after value returned, is popped. Similarly e2 EC(for `square4`) is pushed, and then popped and finally Global is also popped and stack is empty.

> Call Stack maintains the order of execution of execution contexts

#### Call stack also known as Execution control stack, program stack, control stack, runtime stack and machine stack

---

<br><br>

<p align="left">
  <a href="./04_Execution_Context.md"><b>‹ GO TO PREVIOUS</b></a>
</p>

<p align="right">
  <a href="./06_Hoisting.md"><b>GO TO NEXT ›</b></a>
</p>

---
