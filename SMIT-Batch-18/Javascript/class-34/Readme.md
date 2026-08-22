# 📘 JavaScript — Function Expressions & Arrow Functions

## 📚 Topics Covered

1. **Function Expression**
2. **Arrow Function**

These are modern ways to define JavaScript functions. Function expressions were introduced in ES5, and arrow functions were introduced in ES6 (2015). They are widely used in modern JavaScript.

---

# 1. Function Expression

## Definition

> **A function expression is a function stored in a variable.**

A function expression stores a function directly inside a variable.

### Standard Function vs Function Expression

```js
// Standard Function (Function Declaration)
function multiply(a, b) {
  return a * b;
}

// Function Expression
const multiply = function(a, b) {
  return a * b;
};
```

---

## 1.1 Using a Function Like a Variable

When a function expression is stored in a variable, that variable can be called like a function.

### Example

```js
const multiply = function (a, b) { return a * b; };

let z = multiply(4, 3);

console.log(z);
```

### Output

```text
12
```

---

## 1.2 Anonymous Functions

Function expressions are commonly used to create **anonymous functions**.

- The function in the first example has no name.
- A function stored in a variable does not need its own name.
- The variable name is used to call the function.

A function expression can also have a name:

```js
const add = function add(a, b) { return a + b; };
```

---

## 1.3 Function Expressions Use Semicolons

A function expression is a JavaScript statement. It usually ends with a semicolon (`;`).

### Example

```js
const add = function(a, b) {
  return a + b;
};
```

---

## 1.4 Functions Stored in Variables (Callbacks)

Because a function expression is stored in a variable, it can be used like a value.

This is useful when functions are passed to other functions as **callbacks**.

A function stored in a variable can be:

- Assigned to a variable
- Passed to another function as an argument
- Returned from another function

### Example

```js
function run(fn) {
  return fn();
}

const sayHello = function() {
  return "Hello";
};

run(sayHello);
```

---

## 1.5 Function Declaration vs Function Expression

There are two common ways to define a JavaScript function. Both perform the same kind of work when called.

The main difference is when they become available in the code.

### Syntax Comparison

| | Function Declaration | Function Expression |
|---|---|---|
| `function` keyword | ✅ Yes | ✅ Yes |
| Function name | ✅ Required | ❌ Optional (can be anonymous) |
| Parameters | ✅ Yes | ✅ Yes |
| Code block | ✅ Yes | ✅ Yes |
| **Example** | `function add(a, b) { return a + b; }` | `const add = function(a, b) { return a + b; };` |

### Example

```js
const sayHello = function() {
  return "Hello World";
};

sayHello();
```

- The function is stored in the `sayHello` variable.
- We call it with `sayHello()`.
- `sayHello` is the function reference, while `sayHello()` calls the function.

---

## 1.6 Hoisting (The Most Important Difference)

Function declarations can be called before their declaration because they are hoisted to the top of their scope.

```js
let sum = add(2, 3); // ✅ This works
function add(a, b) { return a + b; }
```

Function expressions cannot be called before they are created. They are created when execution reaches their assignment.

```js
let sum = add(2, 3); // ❌ Error
const add = function (a, b) { return a + b; };
```

### Key Differences

| Feature | Function Declaration | Function Expression |
|---|---|---|
| Syntax | Name is **required** | Can be anonymous |
| Hoisting | ✅ Hoisted | ❌ Not available before assignment |
| Flexibility | General-purpose functions | Assignments, callbacks, and event handlers |

---

## 1.7 Use Cases

- **Function declarations**: general-purpose functions
- **Function expressions**: when a function must be assigned to a variable
- **Function expressions**: callbacks and event handlers

Arrow functions, callbacks, closures, and IIFEs are commonly built from function expressions.

---

## ⚠️ Common Mistakes

1. **Forgetting the semicolon**: a function expression is a statement and should normally end with `;`.
2. **Expecting hoisting**: do not call a function expression before it is assigned.
3. **Confusing a reference and a call**: `sayHello` is the function reference, while `sayHello()` calls it.
4. **Confusing the variable name with a function declaration name**: in an expression, the variable holds the function reference.

---

# 2. Arrow Function

## Definition

> **Arrow functions provide a shorter syntax for function expressions.**

An arrow function is a shorter way to write a function expression. It was introduced in ES6 and is commonly used in modern JavaScript.

```js
const multiply = (a, b) => a * b;
```

In short arrow functions, we can sometimes skip:

- The `function` keyword
- The `return` keyword
- Curly brackets `{}`

---

## 2.1 Arrow Function Syntax

Arrow functions use the `=>` symbol. An arrow function is always written as an expression.

### Example

```js
const add = (a, b) => {
  return a + b;
};
```

This arrow function performs the same work as a regular function expression.

---

## 2.2 Shorter Syntax (One Statement)

If the function body contains one statement, we can remove the `function` keyword, curly brackets, and `return` keyword.

### Before Arrow Function

```js
const multiply = function(a, b) { return a * b; };
```

### With Arrow Function

```js
const multiply = (a, b) => a * b;
```

### Another Example

```js
// Before Arrow Function
const hello = function() { return "Hello World!"; };

// With Arrow Function
const hello = () => "Hello World!";
```

---

## 2.3 One Parameter — Parentheses Are Optional

When a function has exactly one parameter, the parentheses can be removed.

```js
// With parentheses
const square = (x) => x * x;

// Without parentheses
const square = x => x * x;
```

```js
// With parentheses
const hello = (val) => "Hello " + val;

// Without parentheses
const hello = val => "Hello " + val;
```

---

## 2.4 No Parameters — Parentheses Are Required

When there are no parameters, the parentheses are required.

```js
const hello = () => "Hello World!";
```

---

## 2.5 Return Value by Default

If a function has one statement that returns a value, curly brackets and the `return` keyword can be removed.

```js
const hello = () => "Hello World!";
```

> This shorthand works when the function has one expression that should be returned.

### ⚠️ Warning

```js
// ❌ This returns undefined because there is no return keyword
const myFunction = (x, y) => { x * y };
```

```js
// ❌ This is invalid syntax
const myFunction = (x, y) => return x * y;
```

```js
// ✅ This returns the expected result
const myFunction = (x, y) => { return x * y };
```

As a good habit, keep curly brackets and `return` when the logic becomes even slightly complex.

---

## 2.6 Arrow Functions Are Not Declarations

Arrow functions are always expressions, so they must be assigned to a variable before use.

They are not available before the assignment.

```js
hello(); // ❌ Error
const hello = () => "Hello";
```

---

## 2.7 Arrow Functions and the `this` Keyword

Arrow functions do not have their own `this`. They inherit `this` from the surrounding code (parent scope).

### Regular Function as a Method

```js
const person = {
  name: "John",
  greet: function() {
    return this.name;  // ✅ "John"
  }
};
```

### Arrow Function as a Method

```js
const person = {
  name: "John",
  greet: () => {
    return this.name;  // ❌ this does not refer to the person object
  }
};
```

Using an arrow function as an object method can produce unexpected results because its `this` does not point to the object.

---

## When to Use Arrow Functions ✅

- For short functions
- For callbacks and array methods such as `map`, `filter`, and `forEach`
- When the function should not have its own `this`

## When Not to Use Arrow Functions ❌

- As object methods
- When the function needs its own `this`
- As a replacement for every function declaration

---

## ⚠️ Common Mistakes

1. **Forgetting the parentheses rules**: zero or multiple parameters require parentheses.
2. **Using arrow functions as methods**: arrow functions do not bind their own `this`.
3. **Expecting hoisting**: arrow functions are not available before their assignment.

---

# 📊 Quick Comparison

| Feature | Function Expression | Arrow Function |
|---|---|---|
| Syntax | `const fn = function(a, b) { ... }` | `const fn = (a, b) => ...` |
| `function` keyword | ✅ Used | ❌ Skipped |
| `return` keyword | Required when returning from a block | Can be skipped for one expression |
| Curly brackets | Used for the function body | Can be skipped for one expression |
| `this` | Has its own `this` | Inherits `this` from the surrounding scope |
| Object method | ✅ Works normally | ❌ Often causes a `this` problem |
| Hoisting | ❌ Not available before assignment | ❌ Not available before assignment |
| Use | Callbacks and event handlers | Short functions and array methods |

---

# ⭐ Final Revision

### Function Expression

```js
const add = function(a, b) {
  return a + b;
};
```

**→ Stores a function in a variable.**

### Arrow Function (Short Form)

```js
const add = (a, b) => a + b;
```

**→ Short syntax for a function expression.**

### Conversion Example

```js
// Function Expression
const hello = function(name) { return "Hello " + name; };

// Arrow Function
const hello = (name) => "Hello " + name;
```

## 🧠 Remember

```text
Function Expression → Function stored in a variable
Arrow Function     → Short syntax for a function expression
Declaration        → Hoisted (can be called first)
Expression/Arrow   → Not available before assignment
Arrow + this       → No own this; it inherits from the parent scope
```
