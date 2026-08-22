# 📘 JavaScript Modules — `import` & `export`

In this lecture, we will learn how to divide JavaScript code into multiple files and share code between those files.

Modules are important because modern JavaScript projects, including Firebase projects, usually contain many files.

## 1. 🚀 Introduction

JavaScript projects become easier to manage when related code is placed in separate modules. This lecture introduces the modern `import` and `export` syntax used by Node.js projects and many JavaScript libraries.

## 2. 🎯 Learning Objectives

By the end of this lecture, you should understand:

- What a JavaScript module is
- Why projects use multiple JavaScript files
- How `export` and `import` work
- Named exports, named imports, and renamed imports
- Default exports and default imports
- `import * as`
- ES Modules and `"type": "module"`
- Basic local module file paths
- How to build a small module-based Node.js project

## 3. 🧩 What Is a Module?

A module is a JavaScript file that contains related code. A file can share selected variables and functions with another file.

```text
math.js                         app.js
  functions  ── export ──>  import and use functions
```

Instead of writing all project code in one large file, we can create separate files for separate responsibilities.

For example:

```text
project/
├── math.js       calculations
├── user.js       user functions
└── app.js        starts the application
```

Modules help us organize code, reuse code, and maintain a project more easily.

> 💡 **Simple idea:** One file can share selected code, and another file can import and use it.

## 4. ✅ Why Do We Use Modules?

Keeping all code in one file can make a project difficult to read and update.

### Project Without Modules

```text
app.js
├── user code
├── product code
├── calculation code
├── validation code
└── application code
```

As the project grows, this file can become confusing.

### Project Using Modules

```text
project/
├── users.js       user-related code
├── products.js    product-related code
├── calculations.js calculation code
└── app.js         main application code
```

Modules provide:

- **Organization:** related code stays together.
- **Reusability:** one function can be used in many files.
- **Maintainability:** small files are easier to read and update.
- **Separation of responsibilities:** each file has a clear job.

## 5. 📤 Export

`export` makes a variable, function, or other value available to another module.

Code inside a file is not automatically available to other files. We must export it first.

```js
// message.js
export const message = "Welcome to JavaScript modules";
```

The `message` value is now available for another module to import.

## 6. 🏷️ Named Export

A named export is an exported value with a specific name. A file can have multiple named exports.

### Exporting a Variable

```js
// student.js
export const studentName = "Ayesha";
export const course = "JavaScript";
```

### Exporting a Function

```js
// greeting.js
export function sayHello(name) {
  return `Hello, ${name}!`;
}
```

### Exporting at the End of a File

We can also declare values first and export them at the end.

```js
const city = "Karachi";

function showCity() {
  return `City: ${city}`;
}

export { city, showCity };
```

The names inside the export list are named exports.

## 7. 📥 Named Import

A named import receives one or more named exports from another file. Named imports use curly braces `{ }`.

```js
// app.js
import { studentName, course } from "./student.js";
import { sayHello } from "./greeting.js";

console.log(studentName);
console.log(course);
console.log(sayHello("Ayesha"));
```

The imported name must match the exported name:

```js
import { studentName } from "./student.js";
```

Here, `studentName` is imported because that is the name used in the export.

Multiple named exports can be imported in one statement:

```js
import { city, showCity } from "./location.js";
```

## 8. 🔄 Renaming Named Imports

Sometimes a local name is clearer or avoids a naming conflict. Use the `as` keyword to rename a named import.

```js
import { studentName as name } from "./student.js";

console.log(name);
```

The original exported name is still `studentName`, but this file uses it as `name`.

Multiple imports can be renamed:

```js
import {
  studentName as name,
  course as subject,
} from "./student.js";

console.log(name);
console.log(subject);
```

## 9. ⭐ Default Export

A default export is the main value a module wants to share. A module can have only one default export.

```js
// calculate.js
function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

export default add;
```

The default export can also be written directly:

```js
export default function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}
```

Named exports and default exports are different. Named exports use their names. A default export is the module's main exported value.

## 10. 📦 Default Import

Import a default export without curly braces.

```js
// app.js
import addNumbers from "./calculate.js";

console.log(addNumbers(5, 3));
```

The local name does not have to match the original function name:

```js
import sum from "./calculate.js";

console.log(sum(10, 2));
```

Both `addNumbers` and `sum` can receive the default export from `calculate.js`.

## 11. ⚖️ Named Export vs Default Export

| Feature | Named Export / Import | Default Export / Import |
| --- | --- | --- |
| Syntax | `export { value }` | `export default value` |
| Import syntax | `import { value } from "./file.js"` | `import value from "./file.js"` |
| Curly braces | Required for named imports | Not used for default imports |
| Number per file | Many named exports | One default export |
| Name | Must match unless renamed with `as` | Importer can choose the local name |
| Best for | Sharing several related values | Sharing one main value |

Example:

```js
// tools.js
export const version = "1.0";
export default function start() {
  return "Application started";
}

// app.js
import start, { version } from "./tools.js";
```

## 12. 🔗 Multiple Named Exports + Default Export

A module can contain multiple named exports and one default export.

```js
// profile.js
export const name = "Sara";
export const age = 20;

export default function getProfile() {
  return `${name} is ${age} years old.`;
}
```

Import the default value first, followed by named values in curly braces:

```js
// app.js
import getProfile, { name, age } from "./profile.js";

console.log(name);
console.log(age);
console.log(getProfile());
```

## 13. 🌐 `import * as`

`import * as` imports all named exports from a file under one name. That name is called a namespace object in this simple example.

```js
// calculator.js
export const taxRate = 0.05;

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}
```

```js
// app.js
import * as calculator from "./calculator.js";

console.log(calculator.taxRate);
console.log(calculator.add(8, 2));
console.log(calculator.subtract(8, 2));
```

Normal named imports use separate names:

```js
import { add, subtract } from "./calculator.js";
```

With `import * as`, all named exports are accessed through the selected name, such as `calculator.add()`.

## 14. 🛠️ ES Modules

ES Modules, usually called ESM, are JavaScript's standard module system. The `import` and `export` keywords are ES Module syntax.

ES Modules allow JavaScript files to communicate in a clear way:

```text
File A
  │ export
  ▼
File B
  │ import
  ▼
Use shared code
```

In this lecture, we use ESM with Node.js. These same ideas will help us understand imports from the Firebase SDK in future lectures.

## 15. ⚙️ `"type": "module"` in `package.json`

When Node.js directly runs a project that uses `import` and `export`, add `"type": "module"` to `package.json`.

```json
{
  "name": "modules-class",
  "version": "1.0.0",
  "type": "module"
}
```

The `type` field tells Node.js to treat `.js` files in this project as ES Modules. This allows us to use `import` and `export`.

In Lecture 01, we used `require()` while demonstrating package usage. In this lecture, we are learning the modern ES Module syntax: `import` and `export`. CommonJS details are outside the scope of this lecture.

## 16. 📁 Module File Paths

Local modules use file paths.

- `./` means the current folder.
- `../` means the parent folder.
- Include `.js` in local imports for this course.

Example structure:

```text
project/
├── app.js
├── utils/
│   └── format.js
└── data/
    └── products.js
```

From `app.js`:

```js
import formatPrice from "./utils/format.js";
import products from "./data/products.js";
```

From a file inside `utils/` importing a file in the parent folder:

```js
import products from "../data/products.js";
```

## 17. 💻 Complete Practical Example

Create a folder named `module-practice` with this structure:

```text
module-practice/
├── package.json
├── profile.js
├── message.js
└── app.js
```

### `package.json`

```json
{
  "name": "module-practice",
  "version": "1.0.0",
  "type": "module"
}
```

### `profile.js` — Named Exports

```js
export const studentName = "Ayesha";
export const courseName = "JavaScript";

export function getStudentInfo() {
  return `${studentName} is learning ${courseName}.`;
}
```

### `message.js` — Default Export

```js
export default function createMessage(name) {
  return `Welcome, ${name}!`;
}
```

### `app.js` — Import and Use the Exports

```js
import {
  studentName,
  courseName as subject,
  getStudentInfo,
} from "./profile.js";
import welcomeMessage from "./message.js";

console.log(studentName);
console.log(subject);
console.log(getStudentInfo());
console.log(welcomeMessage("Class 39"));
```

The example shows named imports, a renamed named import, and default imports. Run it from the project folder:

```bash
node app.js
```

Expected output:

```text
Ayesha
JavaScript
Ayesha is learning JavaScript.
Welcome, Class 39!
```

## 18. ⚠️ Common Beginner Mistakes

### Mistake 1: Forgetting `export`

Problem: another file cannot import a value that was not exported.

```js
// Wrong
const name = "Ali";

// Correct
export const name = "Ali";
```

### Mistake 2: Importing a value that was not exported

Problem: the imported name must exist in the source file's exports.

```js
// profile.js
export const name = "Ali";

// Correct
import { name } from "./profile.js";
```

### Mistake 3: Using curly braces incorrectly

Problem: named imports need curly braces, and default imports do not.

```js
// Named export
import { name } from "./profile.js";

// Default export
import createMessage from "./message.js";
```

### Mistake 4: Using curly braces with a default import

Problem: `{ createMessage }` asks for a named export, not a default export.

```js
// Wrong for a default export
import { createMessage } from "./message.js";

// Correct
import createMessage from "./message.js";
```

### Mistake 5: Forgetting `.js`

Problem: local Node.js imports may fail when the file extension is missing.

```js
// Wrong
import { name } from "./profile";

// Correct
import { name } from "./profile.js";
```

### Mistake 6: Forgetting `"type": "module"`

Problem: Node.js may not treat the `.js` file as an ES Module.

```json
{
  "name": "my-project",
  "type": "module"
}
```

### Mistake 7: Using an incorrect file path

Problem: the path must point to the correct file location.

```js
// If profile.js is in the same folder as app.js
import { name } from "./profile.js";
```

### Mistake 8: Mixing named and default syntax

Problem: use the syntax that matches the type of export.

```js
// profile.js
export const name = "Ali";
export default function getProfile() {}

// app.js
import getProfile, { name } from "./profile.js";
```

## 19. 📝 Practice Task

Create a small project named `student-module-project`.

Requirements:

1. Create a `package.json` file with `"type": "module"`.
2. Create at least three JavaScript files: `app.js`, `student.js`, and `course.js`.
3. In `student.js`, create multiple named exports such as a student name and a function.
4. In `course.js`, create one default export.
5. In `app.js`, use named imports and a renamed named import.
6. In `app.js`, use the default import from `course.js`.
7. Add another file with multiple named exports and use `import * as` to access them.
8. Include `.js` in every local module path.
9. Run the project with `node app.js`.
10. Print clear information about the student and course in the terminal.

Do not copy a complete solution. Write the modules and imports yourself, then test each part step by step.

## 20. 🧠 Quick Recap

- A **module** is a JavaScript file containing related code.
- `export` shares code from a module.
- `import` uses exported code in another module.
- A **named export** has a specific name and uses curly braces when imported.
- A **named import** can be renamed with `as`.
- A **default export** is the main export and there can be only one per module.
- A **default import** does not use curly braces.
- `import * as` groups named exports under one name.
- ES Modules use `import` and `export` syntax.
- `"type": "module"` enables ES Module syntax in a Node.js project.
- Use `./` for the current folder and `../` for the parent folder.
- Include `.js` in local imports for this course.

## 21. 🔜 What We Will Learn Next

### Firebase Setup & Configuration

In the next lecture, we will learn:

- How to create a Firebase project
- How to connect JavaScript with Firebase
- Firebase configuration
- How to install the Firebase package
- The basic idea of the Firebase SDK

## 22. 📚 Official Documentation

- [MDN JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Node.js ECMAScript Modules](https://nodejs.org/api/esm.html)
- [npm Official Website](https://www.npmjs.com/)
