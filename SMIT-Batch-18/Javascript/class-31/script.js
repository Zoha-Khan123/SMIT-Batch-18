// var student = {
//     firstName : "Zoha",
//     lastName : "Khan",
//     age : 20,
//     isEnrolled : true,
//     skills : ["HTML","Css","Javscript"],
//     getFullName : function (){
//         console.log(this.firstName + " " + this.lastName)
//     }
// }

// student.getFullName()

// var student1 = {
//     firstName : "Zoha",
//     lastName : "Khan",
//     marks : 80,
// }

// var student2 = {
//     firstName : "Ali",
//     lastName : "Khan",
//     marks : 70,
// }

// var student3 = {
//     firstName : "Ayesha",
//     lastName : "Khan",
//     marks : 70,
// }

// function Student(firstName , lastName, marks ){
//     this.firstName =  firstName;
//     this.lastName = lastName;
//     this.marks = marks;
//     this.getFullName = function (){
//         console.log(this.firstName + " " + this.lastName);

//     }
// }
// Student.prototype.skills = []
// Student.prototype.extra = "Extra add"

// Student.prototype.getFullName = function () {
//     console.log(this.firstName + " " + this.lastName);

// }

// var student1 = new Student("Ali", "Ahmed" , 80)
// var student2 = new Student("Zoha", "Khan" , 40)

// // student2.getFullName = function(){
// //     console.log("Topper" , this.firstName + " " + this.lastName);
// // }
// student1.skills.push("HTML")
// console.log(student1);
// console.log(student2);

// console.log("getFullName" in student1);
// for(var key in student1){
//     if(student1.hasOwnProperty(key)){
//         console.log(key);

//     }

// }

// var student = {
//     firstName : "Zoha",
//     lastName : "Khan",
//     age : 20,
//     isEnrolled : true,
//     marks : [20,30,40],
//     getFullName : function (){
//         console.log(this.firstName  + " " + this.lastName)
//     }
// }

// console.log(student.getFullName());

// var student1 = {
//     firstName : "Zoha",
//     lastName : "Khan",
//     marks : 40,
// }

// var student2 = {
//     firstName : "Ali",
//     lastName : "Khan",
//     marks : 40,
// }

// var student2 = {
//     firstName : "Jawad",
//     lastName : "Khan",
//     marks : 40,
// }

// function Student(a,b , c){
//     this.firstName = a;
//     this.lastName = b;
//     this.marks = c
//     // this.getFullName = function (age){
//     //     console.log(this.firstName + " " + this.lastName + "and my age is " + age)
//     // }

// }
// // Student.prototype.marks = [40,50,60];
// Student.prototype.getFullName = function (age){
//         console.log("my age is " + age)
// }

// var student1 = new Student("Zoha","Khan",[20,30,40])

// for(key in student1){
//     if(student1.hasOwnProperty(key)){
//         console.log(key);
//     }
// }
// console.log(student1.getFullName(20));

// var getPropertyName = "getFullName" in student1
// var getPropertyName = student1.hasOwnProperty("getFullName")

// console.log(getPropertyName);

// Student.prototype.remarks = "Good"
// Student.prototype.remarks = "Excellent"

// Student.prototype.getFullName = function (age){
//     console.log(age)
// }

// var student2 = new Student("Khan","Khan")

// console.log(student2);
