# 📘 JavaScript — Function Expressions & Arrow Functions

## 📚 Topics Covered

1. **Function Expression**
2. **Arrow Function**

Ye dono JavaScript functions ko define karne ke **modern** tareeqe hain. Function Expression ES5 mein aaya, aur Arrow Function **ES6 (2015)** mein introduce hua. React, Next.js aur modern JavaScript mein har jagah inka use hota hai.

---

# 1. Function Expression

## Definition

> **A function expression is a function stored in a variable.**

Function expression ka matlab hai — function ko seedha kisi **variable ke andar store** karna.

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

## 1.1 Function Ko Variable Ki Tarah Use Karna

Jab function expression variable mein store ho jata hai, to us variable ko **function ki tarah call** kar sakte hain.

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

Function expressions commonly **anonymous functions** banane ke liye use hote hain.

- Upar wala function actually **bina name ka** function hai.
- Variables mein store functions ko **name ki zaroorat nahi** hoti.
- **Variable ka naam** use hota hai function ko call karne ke liye.

Lekin function expression **named** bhi ho sakta hai:

```js
const add = function add(a, b) { return a + b; };
```

---

## 1.3 Function Expression Semicolon Use Karta Hai

Function expression ek **JavaScript statement** hai.

Isliye ye usually **semicolon (`;`)** ke saath end hota hai.

### Example

```js
const add = function(a, b) {
  return a + b;
};
```

---

## 1.4 Functions Stored in Variables (Callbacks)

Kyunki function expression ek variable mein store hota hai, isliye ise **value ki tarah** use kiya ja sakta hai.

Ye tab bahut useful hai jab hum functions ko doosre functions mein pass karte hain (**callbacks**).

- Variable mein assign kiya ja sakta hai
- Kisi doosre function mein **argument** ki tarah pass kiya ja sakta hai
- Kisi function se **return** kiya ja sakta hai

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

JavaScript functions ko define karne ke 2 tareeqe hain. Dono **call karne par same kaam** karte hain.

Farq sirf itna hai ke wo **code mein kab available** hote hain.

### Syntax Comparison

| | Function Declaration | Function Expression |
|---|---|---|
| `function` keyword | ✅ | ✅ |
| Function name | ✅ **Required** | ❌ Optional (anonymous) |
| Parameters | ✅ | ✅ |
| Code block | ✅ | ✅ |
| **Example** | `function add(a, b) { return a + b; }` | `const add = function(a, b) { return a + b; };` |

### Example

```js
const sayHello = function() {
  return "Hello World";
};

sayHello();
```

- Function `sayHello` variable mein store hai.
- Chalane ke liye hum `sayHello()` call karte hain.
- `sayHello` = function ka **reference**, `sayHello()` = function ko **call** karna.

---

## 1.6 Hoisting (Sabse Important Farq)

**Function Declarations** ko define karne se **pehle** call kiya ja sakta hai, kyunki wo apne scope ke top par **hoisted** ho jate hain.

```js
let sum = add(2, 3); // ✅ Ye chalega
function add(a, b) { return a + b; }
```

**Function Expressions** ko define karne se **pehle call nahi** kiya ja sakta. Ye execution ke waqt tab banate hain jab code un tak pahunchta hai.

```js
let sum = add(2, 3); // ⛔ Error aaega
const add = function (a, b) { return a + b; };
```

### Key Differences

| Feature | Function Declaration | Function Expression |
|---|---|---|
| Syntax | Name **required** hai | Anonymous ho sakta hai |
| Hoisting | ✅ Hoisted hai | ❌ Hoisted nahi |
| Flexibility | General-purpose | Assigning, callbacks, event handlers |

---

## 1.7 Use Cases (Kab Use Karein)

- **Function declarations** → general-purpose functions ke liye
- **Function expressions** → jab function ko variable mein assign karna ho
- **Function expressions** → callbacks aur event handlers mein

Arrow Functions, Callbacks, Closures aur IIFEs — ye sab function expressions par hi bane hain.

---

## ⚠️ Common Mistakes

1. **Semicolon bhoolna** — Function expression ek statement hai, `;` se end karna chahiye.
2. **Hoisting ki ummeed** — Function expression ko define karne se pehle call nahi kar sakte.
3. **Reference vs Call confuse karna** — `sayHello` function hai, `sayHello()` use call karta hai.
4. **Variable naam ko function name samajhna** — Expression mein **variable ka naam** hi function ka reference hai.

---

# 2. Arrow Function

## Definition

> **Arrow Functions allow a shorter syntax for function expressions.**

Arrow function function expressions likhne ka **short syntax** hai. Ye **ES6** mein introduce hua aur modern JavaScript mein commonly use hota hai.

```js
const multiply = (a, b) => a * b;
```

Arrow function mein hum skip kar sakte hain:

- `function` keyword
- `return` keyword
- Curly brackets `{}`

---

## 2.1 Arrow Function Syntax

Arrow function `=>` symbol use karta hai.

**Arrow function hamesha function expression ki tarah** likha jata hai.

### Example

```js
const add = (a, b) => {
  return a + b;
};
```

Ye arrow function bilkul wahi kaam karta hai jo regular function expression karta hai.

---

## 2.2 Shorter Syntax (Ek Statement Wala)

Agar function body mein **sirf ek statement** ho, to hum `function` keyword, curly brackets aur `return` keyword hata sakte hain.

### Before Arrow

```js
const multiply = function(a, b) { return a * b; };
```

### With Arrow

```js
const multiply = (a, b) => a * b;
```

### Another Example

```js
// Before Arrow
const hello = function() { return "Hello World!"; };

// With Arrow
const hello = () => "Hello World!";
```

---

## 2.3 One Parameter — Parentheses Optional

Agar function mein **sirf ek parameter** ho, to parentheses `()` hata sakte hain.

```js
// With Parentheses
const square = (x) => x * x;

// Without Parentheses
const square = x => x * x;
```

```js
// With Parentheses
const hello = (val) => "Hello " + val;

// Without Parentheses
const hello = val => "Hello " + val;
```

---

## 2.4 No Parameters — Parentheses Required

Agar **koi parameter na ho**, to parentheses `()` **zaroori** hain.

```js
const hello = () => "Hello World!";
```

---

## 2.5 Return Value by Default

Agar function mein **sirf ek statement ho jo value return karta hai**, to brackets aur `return` keyword hata sakte hain.

```js
const hello = () => "Hello World!";
```

> Ye tabhi kaam karta hai jab function mein **sirf ek statement** ho.

### ⚠️ Warning

```js
// ❌ Ye undefined return karega (return keyword nahi likha)
const myFunction = (x, y) => { x * y };
```

```js
// ❌ Ye error hai (return keyword curly brackets ke bahar use nahi ho sakta)
const myFunction = (x, y) => return x * y;
```

```js
// ✅ Ye expected result return karega
const myFunction = (x, y) => { return x * y };
```

Isliye **achhi habit** ye hai ke brackets aur `return` hamesha rakhein jab logic thora sa bhi complex ho.

---

## 2.6 Arrow Functions Are Not Declarations

Arrow functions **hamesha expressions** hote hain, isliye inhe variable mein assign karna zaroori hai.

**Use karne se pehle define** karna lazmi hai (hoisted nahi hote).

```js
hello(); // ❌ Error
const hello = () => "Hello";
```

---

## 2.7 Arrow Functions and `this` Keyword

Arrow functions ka **apna `this` nahi hota**.

Ye `this` ko **surrounding code (parent scope) se inherit** karte hain.

### Regular Function as Method

```js
const person = {
  name: "John",
  greet: function() {
    return this.name;  // ✅ "John"
  }
};
```

### Arrow Function as Method

```js
const person = {
  name: "John",
  greet: () => {
    return this.name;  // ❌ this person object ko refer nahi karta
  }
};
```

Arrow function ko **object method** ki tarah use karna often **unexpected results** deta hai, kyunki `this` object ko point nahi karta.

---

## When to Use Arrow Functions ✅

- **Short functions** ke liye
- **Callbacks aur array methods** ke liye (map, filter, forEach, etc.)
- Jab **apna `this`** na chahiye ho

## When NOT to Use Arrow Functions ❌

- **Object methods** ki tarah
- Jab **apna `this`** chahiye ho
- Function declarations ki jagah

---

## ⚠️ Common Mistakes

1. **Parentheses rules bhoolna** — Zero ya multiple parameters ke liye parentheses **zaroori** hain.
2. **Arrow functions ko methods ki tarah use karna** — Arrow functions `this` bind nahi karte.
3. **Hoisting ki ummeed** — Arrow functions hoisted nahi hote, pehle define karna zaroori hai.

---

# 📊 Quick Comparison

| Feature | Function Expression | Arrow Function |
|---|---|---|
| Syntax | `const fn = function(a, b) { ... }` | `const fn = (a, b) => ...` |
| `function` keyword | ✅ Use hota hai | ❌ Skip hota hai |
| `return` keyword | Zaroori | Single statement mein skip |
| Curly brackets | Zaroori | Single statement mein skip |
| `this` | Apna `this` hota hai | Surrounding scope se inherit karta hai |
| Object method | ✅ Theek hai | ❌ Problem deta hai |
| Hoisting | ❌ Not hoisted | ❌ Not hoisted |
| Use | Callbacks, event handlers | Short functions, array methods |

---

# ⭐ Final Revision

### Function Expression

```js
const add = function(a, b) {
  return a + b;
};
```

**→ Function ko variable mein store karta hai.**

### Arrow Function (Short Form)

```js
const add = (a, b) => a + b;
```

**→ Function expression ka short syntax.**

### Conversion Trick

```js
// Function Expression
const hello = function(name) { return "Hello " + name; };

// Arrow Function
const hello = (name) => "Hello " + name;
```

---

## 🧠 Remember

```text
Function Expression → Function stored in a variable
Arrow Function     → Short syntax for function expression
Declaration        → Hoisted (pehle call possible)
Expression/Arrow   → Not hoisted (pehle define karo)
Arrow + this       → Apna this nahi, parent se inherit
```
