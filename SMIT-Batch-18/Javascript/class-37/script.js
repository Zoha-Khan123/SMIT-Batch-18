// ============= Set ====================
// sub say pehlay set ka baray ma batana ha set ha kya set ka syntax waghera batana ha ya jo 
// neechay examples kar rahe ho isko dakh ka lecture banatay jana pehlay ya batana set ma kya kya
// store kar wa saktay han array object object ke baat jab ho to do same object ko add karwana or 
// usko dikhana ka dono object same ha lakin phir bhe dono ko add kar diya to waha say phir pass by 
// refernce or pass by value ke kahane start kar dana batana ha in dono ma kya differnce ha or set
// q dono ko add kar raha ha 
// const myArray = [1,2,3,4,5,6,4,2,3,1,7,7]
// const mySet = new Set(myArray)
// mySet.add({a:"zoha"})
// mySet.add({a:"zoha"})  
// console.log(typeof(mySet));   // Output: "object"
// console.log(mySet);           // Output: Set(9) { 1, 2, 3, 4, 5, 6, 7, { a: 'zoha' }, { a: 'zoha' } }


// pass by value and pass by refernce topic start
// yaha multiple exmaples dana takay concepts clear hojai
// const obj1 = {a:"Zoha"}
// const obj2 = obj1
// console.log(obj1 ===obj2);    // Output: true (dono same reference ko point kar rahe hain)


// set destructuring
// const myArray = [1,2,3,4,5,6,4,2,3,1,7,7]
// const mySet = [...new Set(myArray)]
// console.log(mySet);           // Output: [ 1, 2, 3, 4, 5, 6, 7 ]



// set methods 
// add
// delete
// has
// size
// clear

// const myArray = [1,2,3,4,5,6,4,2,3,1,7,7]
// const mySet = new Set(myArray)
// console.log(mySet);                // Output: Set(7) { 1, 2, 3, 4, 5, 6, 7 }
// console.log(mySet.has(3));         // Output: true
// console.log(mySet.has(20));        // Output: false
// console.log(mySet.delete(4));      // Output: true
// console.log(mySet.has(4));         // Output: false  (proof: 4 successfully delete ho gaya)
// console.log(mySet.size);           // Output: 6
// mySet.clear()                      // clear all set
// console.log(mySet);                // Output: Set(0) {}




// set ma kya kya cheezan daal saktay han 
// set ma sirf aik he parameter lata ha or wo bhe iterable hona cahiya

// const mySet1 = new Set({a:"one"})
// console.log(mySet1);               // ❌ Output: Error: object is not iterable




// another option
// const mySet2 = new Set()
// const obj = {a:"one"}
// console.log(mySet2.add(obj));      // Output: Set(1) { { a: 'one' } }
// console.log(mySet2.has(obj));      // Output: true



// ============= Map ====================

// const myMap = new Map([["a" , "one"]]);

// myMap.set("name", "Ali");
// myMap.set("name2", "hi");
// console.log(myMap);                // Output: Map(3) { "a" => "one", "name" => "Ali", "name2" => "hi" }

// this is the issue 

// Object:
// object key → string conversion → conflict

// Map:
// object key → object reference → no conflict

// const myObject = {}

// const a = {}
// const b = {}

// myObject[a] = "a"
// console.log(myObject);             // Output: { "[object Object]": "a" } (object key string ban gayi → conflict)


// ======= solution ========
// const a = {}
// const b = {}

// const myMap = new Map([ [ a , "a"] , [ b , "b"]])
// console.log(myMap);                // Output: Map(2) { {} => "a", {} => "b" } (no conflict)


// Map methods
const students = new Map([
  [1, "Ali"],
  [2, "Ahmed"],
  [3, "Sara"]
]);

console.log(students);                // Output: Map(3) { 1 => "Ali", 2 => "Ahmed", 3 => "Sara" }


// add
students.set(4,"Zoya")
console.log(students);                // Output: Map(4) { 1 => "Ali", 2 => "Ahmed", 3 => "Sara", 4 => "Zoya" }
// update
students.set(2,"hamza")
console.log(students);                // Output: Map(4) { 1 => "Ali", 2 => "hamza", 3 => "Sara", 4 => "Zoya" }

// get
console.log(students.get(4));         // Output: "Zoya"


// has
console.log(students.has(4));         // Output: true

// size
console.log(students.size);           // Output: 4

// delete
console.log(students.delete(4));      // Output: true
console.log(students);                // Output: Map(3) { 1 => "Ali", 2 => "hamza", 3 => "Sara" }

// ========== iteration ===============

// keys
console.log(students.keys());         // Output: MapIterator { 1, 2, 3 }

// agar array cahiya
console.log([...students.keys()]);    // Output: [ 1, 2, 3 ]

// values

console.log([...students.values()]);  // Output: [ "Ali", "hamza", "Sara" ]



// entries

console.log([...[...students.entries()]]);  // Output: [ [ 1, "Ali" ], [ 2, "hamza" ], [ 3, "Sara" ] ]

// for each
students.forEach((value, key) => {
  console.log(key, value);            // Output: 1 "Ali" / 2 "hamza" / 3 "Sara"
});

// for of
for (const [key, value] of students) {
  console.log(key, value);            // Output: 1 "Ali" / 2 "hamza" / 3 "Sara"
}

// clear
students.clear();

console.log(students);                // Output: Map(0) {}