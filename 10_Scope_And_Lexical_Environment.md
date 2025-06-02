# Episode 7 : Scope and Lexical Environment

This is why JS is confusing

### Case-1

```javascript
function a() {
  console.log(b); // surprisingly instead of printing undefined it prints 10.
  //So somehow this b could access the b outside the function.
}

var b = 10;

a(); // Function Invocation
```

### Another case: Case-2

```javascript
function a() {
  c(); // Function Invocation

  function c() {
    console.log(b); // when cursor comes here, it still prints out 10 somehow!!
  }
}

var b = 10;

a(); // Function Invocation
```

### Another one (DJ KHALED!): Case-3

```javascript
function a() {
  var b = 10;

  c(); // Function Invocation

  function c() {
    console.log(b); //it prints the right value. How?
  }
}

a(); // Function Invocation

console.log(b); // now when cursor comes here, it prints NOT DEFINED!
```

- This is the intuition behind **scope.**
- Scope in a simple language means where we can access a specific varible or function inside the code.
- Scope in JavaScript is directly related to and dependent on the lexical environment.
- **Lexical Environment** : `local memory + lexical environment of its parent`
- Whenever an EC is created, a Lexical environment(LE) is also created and is referenced in the local EC(in memory space)
- Lexical means hierarchy. In the DJ KHALED (xD) code, function `c` is lexically inside function `a`.
- So in EC of `c()`, variables and function in c (none) + reference of lexical environment of parent `a()` is there
- LE of `a()` in turn is its memory space + reference to LE of parent (Global EC)
- LE of Global EC points to _null_

### Summarize the above points:

call_stack = [GEC, a(), c()]

Now lets also assign the memory sections of each execution context in call_stack.

`c()` = [[lexical environment pointer pointing to a()]]

`a()` = [b:10, c:{}, [lexical environment pointer pointing to GEC]]

GEC = [a:{},[lexical_environment pointer pointing to null]]

### For case -3

- First JS engine searches for b in local memory of c(). Nothing is there.
- So it goes to the reference of Lexical environment of parent `a()`. Here b = 10 is here. So it takes this value, goes back to c() and console prints it.
- Had b not been in `a()`, then pointer would have gone to `a()`'s parent (Global EC and searched there). Had b not been there too, then it goes to LE of global's parent which is null. Now JS engine stops and says b is NOT DEFINED.
- **Lexical environment of c = Local memory of c + LE of A + LE of Global**
- This process of going one by one to parent and checking is called **scope chain**
