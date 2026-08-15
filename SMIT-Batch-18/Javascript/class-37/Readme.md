# 📘 JavaScript — Set and Map

## 📚 Topics Covered

1. **Set**
2. **Map**
3. **Set vs Map — Comparison**

These are important JavaScript collections used to store data efficiently.

---

# 1. Set

## Definition

**Set** JavaScript ka ek special collection hai jo sirf **unique values** store karta hai.

> **Set = a collection that stores only unique values.**
>
> If you try to add the same value twice, the Set keeps it only **once**.

---

## 1.1 Syntax and First Example

### Syntax

```js
new Set(iterable)
```

### Example

```js
const myArray = [1, 2, 3, 4, 5, 6, 4, 2, 3, 1, 7, 7];
const mySet = new Set(myArray);
console.log(mySet);
```

### Output

```text
Set(7) { 1, 2, 3, 4, 5, 6, 7 }
```

### Important Point

`1, 2, 3, 4, 7` were repeated in the array, but the Set kept only the **unique values**. This is the Set's biggest strength.

---

## 1.2 What Can You Store in a Set?

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

### Output

```text
Set(2) { { a: "zoha" }, { a: "zoha" } }
```

### Important Point

Both objects look **exactly the same**, yet the Set added both of them. Why? The answer is **Pass by Value vs Pass by Reference** — explained in the next section.

---

## 1.3 Pass by Value vs Pass by Reference

### Example

```js
const obj1 = { a: "Zoha" };
const obj2 = obj1;
console.log(obj1 === obj2); // true
```

### Output

```text
true
```

### Important Point

- Primitives → **Pass by Value** (the value is copied)
- Objects → **Pass by Reference** (only the reference / memory address is copied)
- `obj2 = obj1` copies the **reference**, so both point to the **same memory location** → `===` returns `true`

### Back to the Set question

```js
mySet.add({ a: "zoha" }); // first object — a different reference
mySet.add({ a: "zoha" }); // second object — a completely different reference
```

Both `{ a: "zoha" }` are created in **different memory locations**. A Set does **not check content** — it checks **reference (identity)**. So the Set treats them as different objects and adds both.

> 💡 **Rule:** A Set checks for unique values, but for objects, "unique" means **same reference**, not same content.

---

## 1.4 Set Methods

| Method | Purpose |
|--------|---------|
| `add(value)` | Add a value to the Set |
| `delete(value)` | Delete a value from the Set |
| `has(value)` | Check if a value exists (`true`/`false`) |
| `size` | How many values are in the Set (property, not a method) |
| `clear()` | Empty the entire Set |

### Example

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

### Output

```text
Set(7) { 1, 2, 3, 4, 5, 6, 7 }
true
false
true
false
6
Set(0) {}
```

---

## 1.5 Set Destructuring (Spread Operator)

### Example

```js
const myArray = [1, 2, 3, 4, 5, 6, 4, 2, 3, 1, 7, 7];
const mySet = [...new Set(myArray)];
console.log(mySet);
```

### Output

```text
[1, 2, 3, 4, 5, 6, 7]
```

### Important Point

This is the easiest way to **remove duplicates from an array**.

---

## 1.6 Set Constructor Rule — Only Iterables

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

# 2. Map

## Definition

**Map** JavaScript ka ek collection hai jo **key-value pairs** store karta hai — bilkul object ki tarah, lekin object se **zyada powerful**.

> **Map = a collection that stores key-value pairs.**
>
> Every entry is `key => value`.

---

## 2.1 Syntax and First Example

### Syntax

```js
new Map([ [key, value], [key, value], ... ])
```

### Example

```js
const myMap = new Map([["a", "one"]]);

myMap.set("name", "Ali");
myMap.set("name2", "hi");
console.log(myMap);
```

### Output

```text
Map(3) { "a" => "one", "name" => "Ali", "name2" => "hi" }
```

---

## 2.2 Map vs Object — The Key Issue

### Problem: In objects, keys are always converted to Strings

In an object, when you provide a key, it is **automatically converted to a string**. If you use an object as a key, it becomes `"[object Object]"` — which causes a **conflict**.

### ❌ Object Example

```js
const myObject = {};

const a = {};
const b = {};

myObject[a] = "a";   // using a as a key
console.log(myObject);
```

### Output

```text
{ "[object Object]": "a" }
```

### Important Point

`a` (which is an object) was converted to the string `"[object Object]"` when used as a key. If you used `b` as a key too, both keys would be the same — **conflict**!

```text
Object:
object key → string conversion → conflict ❌
```

### ✅ Solution: Map uses object keys as References

A Map does **not convert** object keys to strings — it uses them as **object references**. So there is no conflict.

```text
Map:
object key → object reference → no conflict ✅
```

### Correct Example

```js
const a = {};
const b = {};

const myMap = new Map([
  [a, "a"],
  [b, "b"],
]);
console.log(myMap);
```

### Output

```text
Map(2) { {} => "a", {} => "b" }
```

Both objects look the same but are **different references**, so the Map stores them as different keys. **No conflict!**

---

## 2.3 Map Methods

First, let's create a students Map:

```js
const students = new Map([
  [1, "Ali"],
  [2, "Ahmed"],
  [3, "Sara"],
]);

console.log(students);
```

### Output

```text
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

### Output

```text
"Zoya"
```

### `has()` — Check existence

```js
console.log(students.has(4)); // true
```

### Output

```text
true
```

### `size` — Number of entries

```js
console.log(students.size); // 4
```

### Output

```text
4
```

### `delete()` — Delete an entry

```js
console.log(students.delete(4)); // true — deleted
console.log(students);           // entry with key 4 is gone
```

### Output

```text
true
Map(3) { 1 => "Ali", 2 => "hamza", 3 => "Sara" }
```

---

## 2.4 Iteration in Map (Loops)

You can loop over a Map in several ways.

### `keys()` — Only the keys

```js
console.log(students.keys());        // MapIterator
console.log([...students.keys()]);   // converted to an array
```

### Output

```text
MapIterator { 1, 2, 3 }
[1, 2, 3]
```

### `values()` — Only the values

```js
console.log([...students.values()]);
```

### Output

```text
["Ali", "hamza", "Sara"]
```

### `entries()` — Keys and values together

```js
console.log([...students.entries()]);
```

### Output

```text
[[1, "Ali"], [2, "hamza"], [3, "Sara"]]
```

### `forEach()` — Loop over every entry

```js
students.forEach((value, key) => {
  console.log(key, value);
});
```

### Output

```text
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

### Output

```text
1 Ali
2 hamza
3 Sara
```

### `clear()` — Empty the entire Map

```js
students.clear();
console.log(students); // Map(0) {}
```

### Output

```text
Map(0) {}
```

---

# 3. Set vs Map — Comparison

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

# ⭐ Final Revision

### Set

```js
const mySet = new Set([1, 2, 2, 3, 3, 3]);
console.log(mySet); // Set(3) { 1, 2, 3 }
```

**→ Sirf unique values store karta hai (duplicates remove).**

### Map

```js
const myMap = new Map([["name", "Ali"]]);
myMap.set("age", 21);
console.log(myMap); // Map(2) { "name" => "Ali", "age" => 21 }
```

**→ Key-value pairs store karta hai — object se zyada powerful.**

---

## 🧠 Remember

```text
Set            → Unique Values Ka Collection
Map            → Key-Value Pairs Ka Collection
Object key     → String (Conflict ❌)
Map key        → Reference (No Conflict ✅)
[...new Set()] → Duplicates Remove
Set checks reference, not content
```
