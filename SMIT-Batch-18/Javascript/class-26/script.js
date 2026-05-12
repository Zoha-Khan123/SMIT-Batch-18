// ===== Topics Covered =====
// Object Literal
// CRUD Operations (Create, Read, Update, Delete)
// for...in Loop (Objects)
// Object Destructuring
// Array Destructuring
// Object Methods: keys(), values(), entries()
// for Loop (Arrays)


// ===== Object Literal =====
// Object stores data in key-value pairs.
// It can contain strings, numbers, booleans, arrays, and functions.

// var student = {
//     firstName: "John",
//     "last Name": "Doe",
//     email: "johndoe@gmail.com",
//     isEnrolled: true,
//     age: 20,
//     greeting: function greet() {
//         return "Hello world";
//     }
// };


// ===== CRUD Operations =====
// C = Create  -> Add new property
// R = Read    -> Access property
// U = Update  -> Change property value
// D = Delete  -> Remove property


// ===== Read Properties =====

// console.log(student.age);
// console.log(student["last Name"]);
// console.log(student["firstName"]);
// console.log(student.email);
// console.log(student.greeting());


// ===== Create New Properties =====

// student.skill = ["HTML", "CSS", "JAVASCRIPT"];
// console.log(student.skill[1]);

// student.sayBye = function bye() {
//     return "Bye";
// };


// ===== Update Existing Properties =====

// student.isEnrolled = false;

// student.sayBye = function bye() {
//     return "Bye byeeeeeeeeeeee";
// };


// ===== Delete Properties =====

// delete student["email"];
// console.log(student.email);

// delete student.sayBye;
// console.log(student);


// ===== Empty Object =====
// Create an empty object and add properties later.

// var obj = {};
// obj.name = undefined;
// obj.name = "zoha";
// console.log(obj);


// ===== Check Property Exists =====
// "in" checks whether a property exists in the object.

// console.log("name" in student);


// ===== for...in Loop =====
// Used to loop through all keys of an object.

// for (var a in student) {
//     console.log(a, student[a]);
// }


// ===== for Loop with Array =====
// Used to access array elements one by one.

// var arr = ["a", "b", "c"];

// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// ===== Without Destructuring =====
// Access properties directly.

// console.log(student["email"]);
// console.log(student.email);


// ===== Object Destructuring =====
// Extract object properties into variables.

// var {
//     email: userEmail,
//     isEnrolled: userIsEnrolled
// } = student;

// console.log(userEmail);
// console.log(userIsEnrolled);


// ===== Array Destructuring =====
// Extract array values by position.

// var arr = ["a", "b", "c"];

// var [num1, num2] = arr;

// console.log(num1);
// console.log(num2);


// ===== Object.keys() =====
// Returns an array of all property names.

// var keys = Object.keys(student);
// console.log(keys);


// ===== Loop Through keys() =====
// Get both key and value using the keys array.

// for (var i = 0; i < keys.length; i++) {
//     console.log(keys[i] + " " + student[keys[i]]);
// }


// ===== Object.values() =====
// Returns an array of all property values.

// var values = Object.values(student);
// console.log(values);


// ===== Object.entries() =====
// Returns an array of [key, value] pairs.

// var entries = Object.entries(student);
// console.log(entries);


// ===== Loop Through entries() =====
// Destructure each key-value pair.

// for (var i = 0; i < entries.length; i++) {
//     var [key, value] = entries[i];
//     console.log(key, value);
// }