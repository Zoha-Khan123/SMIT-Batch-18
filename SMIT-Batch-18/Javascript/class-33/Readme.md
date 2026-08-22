# 📘 JavaScript — var, let aur const (Variables Declare Karne Ke 3 Tareeqe)

## 📚 Topics Covered

1. **var** keyword
2. **let** keyword
3. **const** keyword

In teeno keywords se hum JavaScript mein variables declare karte hain. Lekin in sab mein **farq** hai — scope, redeclaration, reassignment aur hoisting ke hisaab se. 🚀

Shuruaat mein kuch baatein jo aap ne suni hongi:

- `var` aur `let` — dono se variables ko **dobara value assign (reassign)** kar sakte hain.
- `const` — "constant" variable banata hai jise **dobara value assign nahi** kar sakte.
- Developers ko **`var` use nahi** karna chahiye. `let` ya `const` use karna chahiye.
- Agar variable ki value **change nahi** karni, to **good practice** ye hai ke `const` use karo.

In teeno keywords ka comparison hum **3 factors** par karenge:

| Factor | Matlab |
|---|---|
| **Scope** | Variable kahan accessible hai (global / local / block) |
| **Redeclaration & Reassignment** | Dobara declare ya value change kar sakte hain ya nahi |
| **Hoisting** | Declaration se pehle access karne par kya hota hai |

---

# 1. var Keyword

## Definition

> **`var` se declare kiye gaye variables ko redeclare aur reassign kiya ja sakta hai.**

## 1.1 Scope of Variables Declared with var

`var` se declare kiye gaye variables **global ya local** scope ke hote hain.

- **Global scope** → jo variables functions ke **bahar** declare hote hain.
- **Local scope** → jo variables functions ke **andar** declare hote hain.

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

`number` variable ka scope **global** hai — ye functions ke bahar declare hua hai, isliye ise **har jagah** access kar sakte hain (andar aur bahar dono).

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

Yahan `number` variable function `print` ke **andar** declare hua, isliye iska scope **local** hai. Matlab ye variable **sirf function ke andar** accessible hai. Function ke bahar access karne par **`number is not defined`** error milta hai.

---

## 1.2 Redeclaration aur Reassignment

`var` se declare kiye gaye variables ko **redeclare** bhi kar sakte hain aur **reassign** bhi kar sakte hain.

### Declaration ka Syntax

```js
var number = 50
```

Yahan `var` keyword hai, variable ka naam `number` hai, aur initial value `50` hai. Agar initial value na di jaye, to default value **`undefined`** hoti hai:

```js
var number
console.log(number)
// undefined
```

### ✅ Redeclaration (Dobara Declare Karna)

```js
var number = 50
console.log(number) // 50

var number = 100
console.log(number) // 100
```

Dekha aapne — `number` ko `var` keyword ke saath **dobara declare** kiya gaya, koi error nahi aaya.

### ✅ Reassignment (Value Change Karna)

```js
var number = 50
console.log(number) // 50

number = 100
console.log(number) // 100

number = 200
console.log(number) // 200
```

Yahan hum **redeclare** nahi kar rahe — **reassign** kar rahe hain. Pehli baar `50` diya, phir `100`, phir `200` — sab chalta hai kyunki variable `var` se declare hua hai.

---

## 1.3 Hoisting (var ke saath)

`var` se declare kiye gaye variables **hoisted** hote hain — matlab wo apne scope ke **top par** chale jate hain. Isliye unhe declaration ki line se **pehle** bhi access kar sakte hain.

Lekin **yaad rakho** — `var` **default value `undefined`** ke saath hoisted hota hai.

### Global Scope Example

```js
console.log(number) // undefined
var number = 50
console.log(number) // 50
```

`number` variable hoisted hai, isliye declaration se pehle bhi access ho gaya — bina error ke. Lekin us waqt iski value **`undefined`** thi (kyunki initial value wali line abhi execute nahi hui thi).

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

Function `print` mein `number` ka scope **local** hai. Hoisting ki wajah se hum `number` ko declaration se pehle access kar rahe hain.

- `square1` mein `number * number` — `number` abhi `undefined` hai, isliye `undefined * undefined` = **`NaN`**.
- Declaration line execute hone ke baad `number` ki value `50` ho gayi.
- Isliye `square2` mein `50 * 50` = **`2500`**.

---

## ⚠️ var ke Problems

`var` ki hoisting behavior **unexpected bugs** paida kar sakti hai. Isliye developers **modern JavaScript mein `var` use karne se bachte** hain. Umeed hai ab clear ho gaya ke `var` kyun avoid karna chahiye.

---

# 2. let Keyword

## Definition

> **`let` se declare kiye gaye variables ko reassign toh kar sakte hain, lekin redeclare nahi kar sakte.**

## 2.1 Scope of Variables Declared with let

`let` se declare kiye gaye variables **global, local, ya block** scope ke ho sakte hain.

**Block** kya hota hai? JavaScript mein **opening aur closing curly braces** `{}` ke beech wala hissa block hai:

```js
{
  // ye ek block hai
}
```

Blocks `if`, loops, `switch` aur kuch aur statements mein milte hain. In blocks mein `let` se declare kiye gaye variables ka **block scope** hota hai — matlab **block ke bahar access nahi** kar sakte.

### Global, Local aur Block Scope Example

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

Is example mein:

- `number` → **global scope** (function ke bahar declare)
- `square` → **local scope** (function `print` ke andar declare)
- `anotherLargerNumber` → **block scope** (kyunki `let` se block `{}` mein declare)
- `largerNumber` → block mein declare hone ke bawajood **`var`** hai, isliye iska scope **local** hai — block se bahar bhi access ho gaya (`80` print hua).

`anotherLargerNumber` ko block ke bahar access karne par **`anotherLargerNumber is not defined`** error aata hai.

---

## 2.2 Redeclaration aur Reassignment

`var` ki tarah, `let` wale variables ko **reassign** kar sakte hain, lekin **redeclare nahi** kar sakte.

### ✅ Reassignment

```js
let number = 50
console.log(number) // 50

number = 100
console.log(number) // 100
```

Yahan initial value `50` ke baad humne `100` reassign ki — ye chalta hai.

### ❌ Redeclaration (Error)

```js
let number = 50
let number = 100
// SyntaxError: Identifier 'number' has already been declared
```

`let` se **dobara declare** karne par error milta hai: **`Identifier 'number' has already been declared`**.

---

## 2.3 Hoisting (let ke saath)

`let` wale variables bhi hoisted hote hain, lekin **hoisting unki `var` se different** hai:

- `var` → **default value `undefined`** ke saath hoisted hota hai (isliye pehle access ho jata hai).
- `let` → **bina default initialization** ke hoisted hota hai. Isliye access karne par `undefined` ya "not defined" nahi, balki **`Cannot access before initialization`** error milta hai.

### Global Scope Example

```js
console.log(number)
// ReferenceError: Cannot access 'number' before initialization

let number = 50
```

Yahan `number` ko declaration se pehle access karne par **ReferenceError: Cannot access 'number' before initialization** milta hai.

### Local Scope Example

```js
function print() {
  let square = number * number
  let number = 50
}

print()
// ReferenceError: Cannot access 'number' before initialization
```

Local scope mein bhi wahi baat — declaration se pehle access karne par **same reference error** milta hai.

---

# 3. const Keyword

## Definition

> **`const` "constant" variables banata hai — jinki value change nahi ho sakti. Na redeclare, na reassign.**

## 3.1 Scope of Variables Declared with const

Scope ke hisaab se `const` bilkul `let` jaisa hai — **global, local, ya block** scope ho sakta hai.

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

Ye wahi example hai jo upar `let` ka tha, bas `let` ki jagah `const` laga diya.

- `number` → **global scope**
- `square` → **local scope**
- `anotherLargerNumber` → **block scope** (const se block mein declare)
- `largerNumber` → `var` hone ki wajah se **local scope**, block ke bahar bhi accessible (`80`)

`anotherLargerNumber` ko block ke bahar access karne par **`anotherLargerNumber is not defined`** error.

---

## 3.2 Redeclaration aur Reassignment

Is hisaab se `const`, `var` aur `let` se **bilkul different** hai. `const` wale variables ko **na redeclare** kar sakte hain **na reassign** — dono par error aata hai.

### ❌ Redeclaration (Error)

```js
const number = 50
const number = 100
// SyntaxError: Identifier 'number' has already been declared
```

### ❌ Reassignment (Error)

```js
const number = 50
number = 100
// TypeError: Assignment to constant variable
```

Reassign karne par **`TypeError: Assignment to constant variable`** milta hai.

---

## 3.3 Hoisting (const ke saath)

`const` bhi `let` ki tarah hoisted hota hai — **bina default initialization** ke. Isliye declaration se pehle access karne par **`Cannot access before initialization`** error milta hai.

```js
console.log(number)
// ReferenceError: Cannot access 'number' before initialization

const number = 50
```

---

# 📊 Comparison Table (Quick Summary)

| Keyword | Scope | Redeclaration | Reassignment | Hoisting |
|---|---|---|---|---|
| `var` | Global, Local | ✅ Yes | ✅ Yes | ✅ Yes, **default value `undefined`** ke saath |
| `let` | Global, Local, Block | ❌ No | ✅ Yes | ✅ Yes, **bina default value** ke |
| `const` | Global, Local, Block | ❌ No | ❌ No | ✅ Yes, **bina default value** ke |

---

# ✅ Kab Kaunsa Use Karein

| Situation | Keyword |
|---|---|
| Variable ki value **kabhi change nahi** karni | `const` |
| Value **reassign** karni hai aur **hoisting behavior nahi** chahiye | `let` |
| Value **reassign** karni hai aur **hoisting behavior chahiye** | `var` (⚠️ generally avoid karo) |

> 💡 `var` ki hoisting behavior **unexpected bugs** paida kar sakti hai — isi liye developers ko advised kiya jata hai ke `var` avoid karein aur `let` / `const` use karein.

---

# ⭐ Final Revision

### var — Redeclare + Reassign, Hoisted (undefined)

```js
var number = 50
console.log(number) // 50
var number = 100    // ✅ redeclare chalta hai
console.log(number) // 100
```

### let — Sirf Reassign, Hoisted (bina value)

```js
let number = 50
number = 100        // ✅ reassign chalta hai
// let number = 100 ❌ redeclare error
```

### const — Na Redeclare, Na Reassign

```js
const number = 50
// number = 100 ❌ TypeError: Assignment to constant variable
// const number = 100 ❌ SyntaxError: already been declared
```

---

## 🧠 Remember

```text
var   → redeclare ✅ | reassign ✅ | hoisted with undefined
let   → redeclare ❌ | reassign ✅ | hoisted without default value
const → redeclare ❌ | reassign ❌ | hoisted without default value

Scope:
var   → Global, Local
let   → Global, Local, Block
const → Global, Local, Block

Best Practice:
→ Jo value change nahi karni → const
→ Jo value change karni hai   → let
→ var → avoid ❌
```
