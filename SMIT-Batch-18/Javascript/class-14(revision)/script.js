// =========== without loop ========
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");

// ============= with loop =========
// for (var i = 1; i < 11; i++) {
//     console.log(i + " hello world");
// }

// ============== without loop ===========
// var arr = ["a","b","c"]
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// ============ with loop ==============
// var arr = ["a","b","c","d","e","f","g"]
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// ================ flag variable ================
// var cities = ["Karachi", "Lahore", "Quetta","Peshawar"]
// var flag = false;
// for (var i = 0; i < cities.length; i++) {
//     if (cities[i] === "Quetta") {
//         flag = true
//         break;
//     }
// }

// if (flag) {
//     console.log("Found");

// } else {
//     console.log("Not found");

// }

// =========== break keyword ==============
// for(var i = 1; i < 6 ; i++){
//     console.log(i);
//     if (i === 3) {
//         break;
//     }
// }

// ================ Nested Loop =================
// for(var i = 1; i <4 ; i++){
//     for(var j = 1; j < 6; j++){
//         console.log("outer loop " + i  + " inner loop "+ j);
//     }
// }

// i = 1
// 1 , 1
// 1, 2
// 1,3
// 1,4
// 1,5

// i = 2
// 2,1
// 2,2
// 2,3
// 2,4
// 2,5

// i = 3
// 3,1
// 3,2
// 3,3
// 3,4
// 3,5

// ============ Without Loop =================
// var firstName = ["Zoha","Ayesha","Huma","Laiba","Rubina"]
// var lastName = ["Khan","Latif","Zahid","Khurram"]
// console.log(firstName[0]+ lastName[0]);
// console.log(firstName[0]+ lastName[1]);
// console.log(firstName[0]+ lastName[2]);
// console.log(firstName[0]+ lastName[3]);

// ============ With Loop =====================
// var firstName = ["Zoha","Ayesha","Huma","Laiba","Rubina"]
// var lastName = ["Khan","Latif","Zahid","Khurram"]

// for(var i = 0; i < firstName.length; i++){
//     for(var j = 0; j < lastName.length ; j++){
//         console.log(firstName[i]+ " " + lastName[j]);

//     }
// }

// ================= Changing Case ======================
// var cleanestCities = ["karachi", "lahore", "quetta","peshawar"]
// var userInput = prompt("Enter your city").toLowerCase()

// for(var i = 0; i < cleanestCities.length; i++){
//     if(cleanestCities[i]=== userInput){
//         console.log("Your city is clean");

//     }

// }

// console.log("zoha".toUpperCase());
// console.log("ZOHA".toLowerCase());

// ============ Extract string parts ===========
var myName = "zoHa";
// console.log(myName[0]);
console.log(myName.length);

// var firstChar = myName.slice(0,1).toUpperCase()
// var remainingChar = myName.slice(1).toLowerCase()

// console.log(firstChar + remainingChar);
