// ========== is examples ma return ka use seekha ha ============

// =========== Return Example 01 ===============
// function greeting(myName){
//    var str = "hello world " + myName;
//     return str
// }

// console.log(greeting("zoha"));




// =========== Return Example 02 ===============

// function sum(num1 , num2){
//     return num1 + num2
// }
// console.log(sum(2,3));





// ======== if else ma har student ke liye code dobara likhna parta ha ==========
// var marks = 80
// var result;
// if(marks >= 80){
//     result = "Grade A"
// }else if(marks >= 50){
//     result = "Grade B"
// }else{
//     result = "Fail"
// }
// console.log(result);




//  =========== function use kar ke multiple students ka result aik hi code se easily check kar saktay hain, aur return se output ko function ka bahar bhe use kar saktay hain ==========
// function studentResult(marks){
//     var result;
//     if(marks >= 80){
//         result = "Grade A"
//     }else if(marks >= 50){
//         result = "Grade B"
//     }else{
//         result = "Fail"
//     }
//     return result;
// }

// var student1 = studentResult(30)
// var student2 = studentResult(80)
// console.log(student1);
// console.log(student2);





// ============== is example ma studentResult function ka output pehle student1 variable ma store kiya gaya aur phir us par if else condition apply ki gai ha ============
// if(student1 === "Grade A"){
//     console.log("You got scolarship");
    
// }else{
//     console.log("Try again");
// }





// =========== is example ma studentResult function ko checkResult function ke argument ke andar call kiya gaya ha =============
// function checkResult(grade){
//     if(grade === "Grade A"){
//     console.log("You got scolarship");
//     }else{
//         console.log("Try again");
//     }

// }
// checkResult(studentResult(50))





// ============ is example ma studentResult() function ko checkResult2 function ke andar call kiya gaya ha ===============
// function checkResult2(myName , number){
//     // console.log("My name " + myName);
//     // console.log("Result " + studentResult(number));
//     return[ myName , studentResult(number)]
// }
// var arr = checkResult2("zoha",80)
// console.log("Name " + arr[0] + " Result " +  arr[1]);






// ================== Global Variable vs Local Variable =================


// ========== Example 01 ============
// var globalVar = "global"

// function abc(){
//     var localVar = "local"
//     return localVar;
    
// }
// console.log("=================");

// console.log("Outside function " + abc());



// ============ Example 02 ============
// var name = "zoha"

// function accessName(){
//     var name = "bisma"
//     console.log(name);
    
// }
// accessName()


// ========== Block Scope Example 3 =============
if(true){
    var Myname = "zoha"
}
console.log(Myname);
