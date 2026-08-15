# JavaScript: Set and Map — Complete Lecture

---

## Agenda (What we'll learn today)

1. **Set** — what it is and its syntax
2. What can you store in a Set
3. **Pass by Value vs Pass by Reference** — why a Set adds the same-looking object twice
4. Set Methods: `add`, `delete`, `has`, `size`, `clear`
5. Set Destructuring (Spread Operator)
6. Set constructor rule — it only accepts an **iterable**
7. **Map** — what it is and its syntax
8. Map vs Object — the key conversion issue and the solution
9. Map Methods: `set`, `get`, `has`, `size`, `delete`, `clear`
10. Iteration in Map: `keys()`, `values()`, `entries()`, `forEach`, `for...of`
11. Set vs Map — Comparison Table
12. Recap

---

# Part 1: Set

## 1. What is a Set?

A **Set** is a special collection in JavaScript that stores only **unique values**.

That means: if you try to add the same value twice, the Set keeps it only **once**. Duplicates are removed automatically.

### Syntax

```js
new Set(iterable)
```

### First Example

```js
const myArray = [1, 2, 3, 4, 5, 6, 4, 2, 3, 1, 7, 7];
const mySet = new Set(myArray);
console.log(mySet);
```

**Output:**

```
Set(7) { 1, 2, 3, 4, 5, 6, 7 }
```

`1, 2, 3, 4, 7` were repeated in the array, but the Set kept only the **unique values**. This is the Set's biggest strength.

---

## 2. What can you store in a Set?

You can store **anything** in a Set:

- Primitives (numbers, strings, booleans)
- Arrays
- Objects

### Example — Adding an object

```js
const mySet = new Set();
mySet.add({ a: "zoha" });
mySet.add({ a: "zoha" });
console.log(mySet);
```

**Output:**

```
Set(2) { { a: "zoha" }, { a: "zoha" } }
```

> ⚠️ **Pay attention!** Both objects look **exactly the same**, yet the Set added both of them. Why? The answer is **Pass by Value vs Pass by Reference**. Let's understand this next...

---

## 3. Pass by Value vs Pass by Reference (Important Concept)

### Primitive values — Pass by Value

With primitives (number, string, boolean), the **value is copied**. So two variables stay independent.

### Objects — Pass by Reference

With objects, the value is **not copied** — only the **reference** (the memory address) is copied.

### Example:

```js
const obj1 = { a: "Zoha" };
const obj2 = obj1;
console.log(obj1 === obj2); // true
```

**Output:** `true`

**Why?** Because `obj2 = obj1` doesn't copy the value, it copies the **reference**. Both now point to the **same memory location**, so `===` returns true.

### Now, back to the Set question:

```js
mySet.add({ a: "zoha" }); // first object — a different reference
mySet.add({ a: "zoha" }); // second object — a completely different reference
```

Both `{ a: "zoha" }` are created in **different memory locations**. A Set does **not check content** — it checks **reference (identity)**. So the Set treats them as different objects and adds both.

> 💡 **Rule:** A Set checks for unique values, but for objects, "unique" means **same reference**, not same content.

---

## 4. Set Methods

| Method | Purpose |
|--------|---------|
| `add(value)` | Add a value to the Set |
| `delete(value)` | Delete a value from the Set |
| `has(value)` | Check if a value exists (`true`/`false`) |
| `size` | How many values are in the Set (property, not a method) |
| `clear()` | Empty the entire Set |

### Example:

```js
const myArray = [1, 2, 3, 4, 5, 6, 4, 2, 3, 1, 7, 7];
const mySet = new Set(myArray);
console.log(mySet);

console.log(mySet.has(3));   // true  — 3 exists
console.log(mySet.has(20));  // false — 20 does not exist

console.log(mySet.delete(4)); // true  — 4 was deleted
console.log(mySet.has(4));    // false — proof that 4 was successfully deleted

console.log(mySet.size);      // 6 — how many values remain
mySet.clear();                // clear the whole set
console.log(mySet);           // Set(0) {}
```

**Output:**

```
Set(7) { 1, 2, 3, 4, 5, 6, 7 }
true
false
true
false
6
Set(0) {}
```

---

## 5. Set Destructuring (Spread Operator)

To convert a Set back into an array, use the spread operator `...`. This also removes duplicates.

```js
const myArray = [1, 2, 3, 4, 5, 6, 4, 2, 3, 1, 7, 7];
const mySet = [...new Set(myArray)];
console.log(mySet);
```

**Output:**

```
[1, 2, 3, 4, 5, 6, 7]
```

> 💡 **Use Case:** This is the easiest way to remove duplicates from an array.

---

## 6. Set Constructor Rule — Only Iterables

The Set constructor accepts **only one parameter**, and it must be an **iterable** (like an array, string, or another Set).

### ❌ Wrong Example — Passing an object directly

```js
const mySet1 = new Set({ a: "one" });
console.log(mySet1); // ❌ Error: object is not iterable
```

Objects are **not iterable**, hence the error.

### ✅ Correct Example — Empty Set first, then `add()`

```js
const mySet2 = new Set();
const obj = { a: "one" };
console.log(mySet2.add(obj)); // ✅ object added successfully
console.log(mySet2.has(obj)); // true
```

> 💡 **Rule:** To put an object in a Set, create `new Set()` first and then use the `add()` method.

---

# Part 2: Map

## 7. What is a Map?

A **Map** is a collection of **key-value pairs** — just like an object, but much more **powerful**.

### Syntax

```js
new Map([ [key, value], [key, value], ... ])
```

### First Example

```js
const myMap = new Map([["a", "one"]]);

myMap.set("name", "Ali");
myMap.set("name2", "hi");
console.log(myMap);
```

**Output:**

```
Map(3) { "a" => "one", "name" => "Ali", "name2" => "hi" }
```

Every entry is `key => value`.

---

## 8. Map vs Object — The Biggest Difference (The Key Issue)

### Problem: In objects, keys are always converted to Strings

In an object, when you provide a key, it is **automatically converted to a string**. If you use an object as a key, it becomes `"[object Object]"` — which causes a **conflict**.

### ❌ Object Example:

```js
const myObject = {};

const a = {};
const b = {};

myObject[a] = "a";   // using a as a key
console.log(myObject);
```

**Output:**

```
{ "[object Object]": "a" }
```

See! `a` (which is an object) was converted to the string `"[object Object]"` when used as a key. If you used `b` as a key too, both keys would be the same — **conflict**!

```
Object:
object key → string conversion → conflict ❌
```

### ✅ Solution: Map uses object keys as References

A Map does **not convert** object keys to strings — it uses them as **object references**. So there is no conflict.

```
Map:
object key → object reference → no conflict ✅
```

### Correct Example:

```js
const a = {};
const b = {};

const myMap = new Map([
  [a, "a"],
  [b, "b"],
]);
console.log(myMap);
```

**Output:**

```
Map(2) { {} => "a", {} => "b" }
```

Both objects look the same but are **different references**, so the Map stores them as different keys. **No conflict!**

---

## 9. Map Methods

First, let's create a students Map:

```js
const students = new Map([
  [1, "Ali"],
  [2, "Ahmed"],
  [3, "Sara"],
]);

console.log(students);
```

**Output:**

```
Map(3) { 1 => "Ali", 2 => "Ahmed", 3 => "Sara" }
```

| Method | Purpose |
|--------|---------|
| `set(key, value)` | Both adds and updates |
| `get(key)` | Get the value for a key |
| `has(key)` | Check if a key exists |
| `size` | How many entries (property) |
| `delete(key)` | Delete an entry |
| `clear()` | Empty the entire Map |

### `set()` — Both Add and Update

```js
// ADD — a new entry
students.set(4, "Zoya");
console.log(students);

// UPDATE — if the key already exists, the value is updated
students.set(2, "hamza");
console.log(students);
```

> 💡 **Note:** `set()` handles both adding and updating. If the key does **not** exist → add; if the key **exists** → update.

### `get()` — Get a value

```js
console.log(students.get(4)); // "Zoya"
```

**Output:** `"Zoya"`

### `has()` — Check existence

```js
console.log(students.has(4)); // true
```

**Output:** `true`

### `size` — Number of entries

```js
console.log(students.size); // 4
```

**Output:** `4`

### `delete()` — Delete an entry

```js
console.log(students.delete(4)); // true — deleted
console.log(students);           // entry with key 4 is gone
```

**Output:**

```
true
Map(3) { 1 => "Ali", 2 => "hamza", 3 => "Sara" }
```

---

## 10. Iteration in Map (Loops)

You can loop over a Map in several ways.

### `keys()` — Only the keys

```js
console.log(students.keys());        // MapIterator
console.log([...students.keys()]);   // converted to an array
```

**Output:**

```
MapIterator { 1, 2, 3 }
[1, 2, 3]
```

### `values()` — Only the values

```js
console.log([...students.values()]);
```

**Output:**

```
["Ali", "hamza", "Sara"]
```

### `entries()` — Keys and values together

```js
console.log([...students.entries()]);
```

**Output:**

```
[[1, "Ali"], [2, "hamza"], [3, "Sara"]]
```

### `forEach()` — Loop over every entry

```js
students.forEach((value, key) => {
  console.log(key, value);
});
```

**Output:**

```
1 Ali
2 hamza
3 Sara
```

> 💡 **Note:** In `forEach`, the **value** comes first, then the **key** (opposite of the object's `forEach`!).

### `for...of` — The cleanest way

```js
for (const [key, value] of students) {
  console.log(key, value);
}
```

**Output:**

```
1 Ali
2 hamza
3 Sara
```

### `clear()` — Empty the entire Map

```js
students.clear();
console.log(students); // Map(0) {}
```

**Output:** `Map(0) {}`

---

# Part 3: Comparison

## 11. Set vs Map — Comparison Table

| Feature | Set | Map |
|---------|-----|-----|
| Stores | Only **values** (unique) | **Key-value pairs** |
| Duplicates | Not allowed | Keys can't be duplicated, values can |
| Key concept | Doesn't exist | Every value has a key |
| Object keys | Checked by reference | Used as reference, no string conversion |
| Main methods | `add`, `delete`, `has`, `clear` | `set`, `get`, `delete`, `has`, `clear` |
| Size | `size` property | `size` property |
| Iteration | `forEach`, `for...of` | `keys()`, `values()`, `entries()`, `forEach`, `for...of` |
| When to use | When you need unique values (remove duplicates) | When you need key-value pairs |

---

# Part 4: Recap

## 12. Key Points

1. A **Set** keeps only unique values — duplicates are removed automatically.
2. When adding objects to a Set, it checks the **reference**, not the content — that's why two same-looking objects are both added.
3. **Pass by Value** happens with primitives, **Pass by Reference** happens with objects.
4. `[...new Set(array)]` — the shortcut to remove duplicates from an array.
5. The Set constructor accepts only an **iterable** — passing an object directly throws an error.
6. A **Map** stores key-value pairs and `set()` does both **add** and **update**.
7. In an object, keys are always converted to **strings** (`"[object Object]"`) → conflict; in a Map, keys stay as **references** → no conflict.
8. In a Map's `forEach`, the **value** comes first, then the **key**.
9. To loop over a Map with `for...of`: `for (const [key, value] of map)`.

> **Happy Coding! 🚀**
