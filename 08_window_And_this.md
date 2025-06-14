# Episode 5: Window and this keyword

### Everywhere JS is run, it is done with a JS execution engine. For Chrome: v8

- Shortest JS program is nothing but an Empty JS file.
- Even for this program, JS engine does a lot of the things behind the scenes.
- It creates the GEC, the "window" and the _this_ variable.
- Window is a big global object that has a lot of functions and variables, which is created along with global execution context.These functions and varibles are created by the JavaScript Engine and into the global scope. All of these can be accessed from anywhere in the program.
- At the global level, _this_ points to _window_ object.
  > this === window -> true (at global level)

_Whenever a JavaScript program is run, a **global object** is created, a **global execution context** is created and along with it a **this** varible is also created._

```javascript
var a = 10; // not inside any fxn. So global object

function b() {
  // this fxn not inside any function. So global.
  var x = 5; // not global
}

console.log(window.a); //gives us "a" value

console.log(this.a); //this points to window so it returns "a" value

console.log(a); //also gives same "a" value. (if we don't put any . in front of variable, it **assumes variable is in global space**

console.log(x); // x is not defined. (tries to find x inside global space, but it isn't there)
```

- Global space is anything in JS which isn't inside a function. All these global objects will be present inside the windows schema. But non globals ones won't be there (here, x)
- When a GEC is made, _this_ is also created with it (even for functional(local) EC). Global object provided by the browser engine is the window, so _this_ points to window.
