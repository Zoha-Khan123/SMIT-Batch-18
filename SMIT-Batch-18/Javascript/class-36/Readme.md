# 📘 JavaScript — Destructuring, Spread & Rest Operators

## 📚 Topics Covered

1. **Destructuring**
2. **Spread Operator (`...`)**
3. **Rest Operator (`...`)**

These are important modern JavaScript features used with **Arrays, Objects, Functions, React, and Next.js**.

---

# 1. Destructuring

## Definition

**Destructuring** JavaScript ka feature hai jo Array ya Object se values ko directly variables mein extract karne ke liye use hota hai.

> **Destructuring means extracting values from Arrays or Objects and assigning them to variables.**

---

## 1.1 Object Destructuring

Object destructuring mein **property names** ke through values extract ki jati hain.

### Example

```js
const person = {
  name: "Zoha",
  age: 21,
  city: "Karachi"
};

const { name, age, city } = person;

console.log(name);
console.log(age);
console.log(city);
```

### Output

```text
Zoha
21
Karachi
```

### Important Point

Object destructuring mein **property name matter karta hai**.

```js
const { name } = person;
```

Ye:

```js
const name = person.name;
```

ke equivalent hai.

---

## 1.2 Renaming Variables

Destructuring ke waqt variable ka naam change kar sakte hain.

```js
const person = {
  name: "Zoha",
  age: 21
};

const { name: userName, age: userAge } = person;

console.log(userName);
console.log(userAge);
```

Yahan:

```js
name: userName
```

ka matlab hai `name` property ki value `userName` variable mein store karo.

---

## 1.3 Default Values

Agar property object mein exist na kare to default value provide kar sakte hain.

```js
const person = {
  name: "Zoha"
};

const { name, age = 21 } = person;

console.log(name);
console.log(age);
```

### Output

```text
Zoha
21
```

---

## 1.4 Array Destructuring

Array destructuring mein values **position/index** ke according extract hoti hain.

### Syntax

```js
const [variable1, variable2, variable3] = array;
```

### Example

```js
const numbers = [10, 20, 30];

const [first, second, third] = numbers;

console.log(first);
console.log(second);
console.log(third);
```

### Output

```text
10
20
30
```

### Important Point

Array destructuring mein **position matter karti hai**.

- Object → Property Name
- Array → Position

---

## 1.5 Skipping Values

Kisi value ko skip karne ke liye empty space use kar sakte hain.

```js
const numbers = [10, 20, 30];

const [first, , third] = numbers;

console.log(first);
console.log(third);
```

### Output

```text
10
30
```

---

## 1.6 Destructuring in Function Parameters

Object ko function parameter mein directly destructure kar sakte hain.

```js
const person = {
  name: "Zoha",
  age: 21
};

function printPerson({ name, age }) {
  console.log(name);
  console.log(age);
}

printPerson(person);
```

Ye approach modern JavaScript aur React mein commonly use hoti hai.

---

# 2. Spread Operator

## Definition

Spread operator ka syntax `...` hai.

Ye Array ya Object ki values/properties ko **expand** karta hai.

> **Spread = Expand**

---

## 2.1 Spread with Arrays

### Syntax

```js
...array
```

### Example

```js
const numbers = [10, 20, 30];

const newNumbers = [...numbers];

console.log(newNumbers);
```

### Output

```js
[10, 20, 30]
```

Spread se array ki **shallow copy** banayi ja sakti hai.

---

## 2.2 Merge Arrays

```js
const frontend = ["HTML", "CSS"];
const backend = ["Node.js", "Express"];

const skills = [...frontend, ...backend];

console.log(skills);
```

### Output

```js
["HTML", "CSS", "Node.js", "Express"]
```

---

## 2.3 Spread with Objects

### Syntax

```js
...object
```

### Example

```js
const person = {
  name: "Zoha",
  age: 21
};

const newPerson = {
  ...person
};

console.log(newPerson);
```

---

## 2.4 Update Object

Spread ka important use existing object ko update karna hai.

```js
const user = {
  name: "Zoha",
  age: 21,
  city: "Karachi"
};

const updatedUser = {
  ...user,
  age: 22
};

console.log(updatedUser);
```

### Important Point

Agar same property dobara likhi jaye, to **last value** use hoti hai.

---

# 3. Rest Operator

## Definition

Rest operator bhi `...` use karta hai, lekin iska purpose **remaining values ko collect** karna hai.

> **Rest = Collect Remaining Values**

---

## 3.1 Rest with Array Destructuring

```js
const numbers = [10, 20, 30, 40];

const [first, ...rest] = numbers;

console.log(first);
console.log(rest);
```

### Output

```text
10
[20, 30, 40]
```

Yahan `...rest` remaining values ko ek new array mein collect karta hai.

---

## 3.2 Rest in Functions

Rest parameter multiple arguments ko ek array mein collect karta hai.

### Syntax

```js
function functionName(...rest) {
  // code
}
```

### Example

```js
function numbersList(...numbers) {
  console.log(numbers);
}

numbersList(10, 20, 30, 40);
```

### Output

```js
[10, 20, 30, 40]
```

---

## 3.3 Normal Parameters + Rest

Rest parameter ko normal parameters ke saath bhi use kar sakte hain.

```js
function student(name, age, ...skills) {
  console.log(name);
  console.log(age);
  console.log(skills);
}

student(
  "Zoha",
  21,
  "JavaScript",
  "React",
  "Next.js"
);
```

### Output

```text
Zoha
21
["JavaScript", "React", "Next.js"]
```

### Important Point

Rest parameter **hamesha last** mein hona chahiye.

**Correct:**

```js
function test(a, b, ...rest) {
  // code
}
```

**Incorrect:**

```js
function test(...rest, a, b) {
  // code
}
```

---

## 3.4 Rest with Objects

Object destructuring ke saath rest remaining properties ko collect kar sakta hai.

```js
const person = {
  name: "Zoha",
  age: 21,
  city: "Karachi",
  country: "Pakistan"
};

const { name, ...details } = person;

console.log(name);
console.log(details);
```

### Output

```text
Zoha
```

```js
{
  age: 21,
  city: "Karachi",
  country: "Pakistan"
}
```

Yahan:

```js
const { name, ...details } = person;
```

ka matlab hai:

- `name` ko alag variable mein nikalo.
- Baqi properties ko `details` mein collect karo.

---

# 4. Spread vs Rest

Dono ka syntax same hai:

```js
...
```

Lekin purpose different hai.

| Spread | Rest |
|---|---|
| Values ko **expand** karta hai | Values ko **collect** karta hai |
| Copy / Merge / Update | Remaining values |
| `...array` | `...rest` |

### Easy Trick

> **Spread → Phailao**  
> **Rest → Jama Karo**

---

# 5. Destructuring vs Spread vs Rest

| Concept | Purpose | Example |
|---|---|---|
| **Destructuring** | Values extract karna | `const { name } = user` |
| **Spread** | Values expand/copy/merge karna | `{ ...user }` |
| **Rest** | Remaining values collect karna | `const { name, ...details } = user` |

---

# ⭐ Final Revision

### Destructuring

```js
const { name, age } = user;
```

**→ Values extract karta hai.**

### Spread

```js
const newUser = { ...user };
```

**→ Values ko expand/copy karta hai.**

### Rest

```js
const { name, ...details } = user;
```

**→ Remaining values ko collect karta hai.**

---

## 🧠 Remember

```text
Destructuring → Extract
Spread        → Expand
Rest          → Collect
```
