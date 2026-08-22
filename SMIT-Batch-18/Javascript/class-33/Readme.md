# 📘 JavaScript — `var`, `let` and `const` (Three Ways to Declare Variables)

## 📚 Topics Covered

1. **`var` keyword**
2. **`let` keyword**
3. **`const` keyword**

These three keywords are used to declare variables in JavaScript. However, they are different in terms of scope, redeclaration, reassignment, and hoisting.

Some important points:

- Both `var` and `let` variables can be reassigned.
- `const` creates a variable that cannot be reassigned.
- Developers generally avoid `var` in modern JavaScript.
- Use `const` when a variable's value should not change.

We will compare these keywords using three factors:

| Factor | Meaning |
|---|---|
| **Scope** | Where the variable can be accessed (global, local, or block) |
| **Redeclaration & Reassignment** | Whether the variable can be declared again or its value changed |
| **Hoisting** | What happens when a variable is accessed before its declaration |

# 1. `var` Keyword

## Definition

> **Variables declared with `var` can be redeclared and reassigned.**

## 1.1 Scope of Variables Declared with `var`

Variables declared with `var` can have global or local scope.

- **Global scope**: a variable declared outside a function.
- **Local scope**: a variable declared inside a function.

### Global Scope Example

```js
var number = 50

function print() {
  var square = number * number
  console.log(square)
}

console.log(number) // 50
print() // 2500
```

The scope of `number` is global because it is declared outside the function. It can be accessed both inside and outside the function.

### Local Scope Example

```js
function print() {
  var number = 50
  var square = number * number
  console.log(square)
}

print() // 2500

console.log(number)
// ReferenceError: number is not defined
```

Here, `number` is declared inside the `print` function, so its scope is local. It can only be accessed inside that function.

## 1.2 Redeclaration and Reassignment

Variables declared with `var` can be both redeclared and reassigned.

### Declaration Syntax

```js
var number = 50
```

`var` is the keyword, `number` is the variable name, and `50` is the initial value. If no initial value is provided, the default value is `undefined`:

```js
var number
console.log(number)
// undefined
```

### ✅ Redeclaration

```js
var number = 50
console.log(number) // 50

var number = 100
console.log(number) // 100
```

The variable `number` is declared again with `var`, and no error occurs.

### ✅ Reassignment

```js
var number = 50
console.log(number) // 50

number = 100
console.log(number) // 100

number = 200
console.log(number) // 200
```

This is reassignment, not redeclaration. The value changes from `50` to `100`, and then to `200`.

## 1.3 Hoisting with `var`

Variables declared with `var` are hoisted to the top of their scope. This means they can be accessed before the declaration line.

Remember that a `var` variable is hoisted with the default value `undefined`.

### Global Scope Example

```js
console.log(number) // undefined
var number = 50
console.log(number) // 50
```

The declaration is hoisted, so accessing `number` before the declaration does not produce an error. Its value is `undefined` because the assignment has not executed yet.

### Local Scope Example

```js
function print() {
  var square1 = number * number
  console.log(square1)

  var number = 50

  var square2 = number * number
  console.log(square2)
}

print()
// NaN
// 2500
```

Inside `print`, the local declaration of `number` is hoisted.

- In `square1`, `number` is still `undefined`, so `undefined * undefined` becomes `NaN`.
- After the assignment runs, `number` becomes `50`.
- Therefore, `square2` is `50 * 50`, which is `2500`.

## ⚠️ Problems with `var`

The hoisting behavior of `var` can create unexpected bugs. For this reason, developers generally avoid using `var` in modern JavaScript and prefer `let` or `const`.

# 2. `let` Keyword

## Definition

> **Variables declared with `let` can be reassigned, but they cannot be redeclared in the same scope.**

## 2.1 Scope of Variables Declared with `let`

Variables declared with `let` can have global, local, or block scope.

A **block** is the code between opening and closing curly braces `{}`:

```js
{
  // This is a block.
}
```

Blocks are used with `if` statements, loops, `switch`, and other statements. A `let` variable declared inside a block cannot be accessed outside that block.

### Global, Local, and Block Scope Example

```js
let number = 50

function print() {
  let square = number * number

  if (number < 60) {
    var largerNumber = 80
    let anotherLargerNumber = 100
    console.log(square)
  }

  console.log(largerNumber)
  console.log(anotherLargerNumber)
}

print()
// 2500
// 80
// ReferenceError: anotherLargerNumber is not defined
```

In this example:

- `number` has **global scope** because it is declared outside the function.
- `square` has **local scope** because it is declared inside `print`.
- `anotherLargerNumber` has **block scope** because it is declared with `let` inside the block.
- `largerNumber` is declared with `var`, so it has local function scope and can be accessed outside the block.

Accessing `anotherLargerNumber` outside the block causes a `ReferenceError`.

## 2.2 Redeclaration and Reassignment

Like `var`, a `let` variable can be reassigned. Unlike `var`, it cannot be redeclared in the same scope.

### ✅ Reassignment

```js
let number = 50
console.log(number) // 50

number = 100
console.log(number) // 100
```

The value is changed from `50` to `100`, so this is valid reassignment.

### ❌ Redeclaration Error

```js
let number = 50
let number = 100
// SyntaxError: Identifier 'number' has already been declared
```

Declaring `number` again with `let` causes a syntax error.

## 2.3 Hoisting with `let`

`let` variables are hoisted differently from `var` variables:

- `var` is hoisted with the default value `undefined`.
- `let` is hoisted without initialization. Accessing it before declaration causes `Cannot access before initialization`.

### Global Scope Example

```js
console.log(number)
// ReferenceError: Cannot access 'number' before initialization

let number = 50
```

### Local Scope Example

```js
function print() {
  let square = number * number
  let number = 50
}

print()
// ReferenceError: Cannot access 'number' before initialization
```

The same error occurs in local scope when a `let` variable is accessed before its declaration.

# 3. `const` Keyword

## Definition

> **`const` creates constant variables. They cannot be redeclared or reassigned.**

## 3.1 Scope of Variables Declared with `const`

The scope rules of `const` are the same as `let`: it can have global, local, or block scope.

```js
const number = 50

function print() {
  const square = number * number

  if (number < 60) {
    var largerNumber = 80
    const anotherLargerNumber = 100
    console.log(square)
  }

  console.log(largerNumber)
  console.log(anotherLargerNumber)
}

print()
// 2500
// 80
// ReferenceError: anotherLargerNumber is not defined
```

In this example:

- `number` has **global scope**.
- `square` has **local scope**.
- `anotherLargerNumber` has **block scope** because it is declared with `const` inside the block.
- `largerNumber` has local scope because it is declared with `var`.

Accessing `anotherLargerNumber` outside the block causes an error.

## 3.2 Redeclaration and Reassignment

`const` is different from both `var` and `let`. A `const` variable cannot be redeclared or reassigned.

### ❌ Redeclaration Error

```js
const number = 50
const number = 100
// SyntaxError: Identifier 'number' has already been declared
```

### ❌ Reassignment Error

```js
const number = 50
number = 100
// TypeError: Assignment to constant variable
```

## 3.3 Hoisting with `const`

Like `let`, `const` is hoisted without initialization. Accessing it before declaration causes `Cannot access before initialization`.

```js
console.log(number)
// ReferenceError: Cannot access 'number' before initialization

const number = 50
```

# 📊 Comparison Table (Quick Summary)

| Keyword | Scope | Redeclaration | Reassignment | Hoisting |
|---|---|---|---|---|
| `var` | Global, Local | ✅ Yes | ✅ Yes | ✅ Yes, with default value `undefined` |
| `let` | Global, Local, Block | ❌ No | ✅ Yes | ✅ Yes, without a default value |
| `const` | Global, Local, Block | ❌ No | ❌ No | ✅ Yes, without a default value |

# ✅ When Should You Use Which Keyword?

| Situation | Keyword |
|---|---|
| The variable's value should never change | `const` |
| The value must be reassigned and predictable block scope is needed | `let` |
| The value must be reassigned and old hoisting behavior is specifically needed | `var` (⚠️ generally avoid it) |

> The hoisting behavior of `var` can create unexpected bugs. Use `let` and `const` in modern JavaScript.

# ⭐ Final Revision

### `var` — Redeclare + Reassign, Hoisted with `undefined`

```js
var number = 50
console.log(number) // 50
var number = 100    // ✅ redeclaration is allowed
console.log(number) // 100
```

### `let` — Reassign Only, Hoisted without a Value

```js
let number = 50
number = 100        // ✅ reassignment is allowed
// let number = 100 // ❌ redeclaration error
```

### `const` — No Redeclaration, No Reassignment

```js
const number = 50
// number = 100     // ❌ TypeError: Assignment to constant variable
// const number = 100 // ❌ SyntaxError: already been declared
```

## 🧠 Remember

```text
var   → redeclare ✅ | reassign ✅ | hoisted with undefined
let   → redeclare ❌ | reassign ✅ | hoisted without a default value
const → redeclare ❌ | reassign ❌ | hoisted without a default value

Scope:
var   → Global, Local
let   → Global, Local, Block
const → Global, Local, Block

Best Practice:
→ If the value should not change → const
→ If the value should change      → let
→ var                             → avoid when possible ❌
```
