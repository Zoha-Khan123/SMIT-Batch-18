// =========== Assignment Question no 15 ================
// var password = prompt("Enter your password")
// var firstIndex = password.charCodeAt(0)

// if(password.length < 6){
//     console.log("password must be atleast 6 charcters long");

// }else if(firstIndex  >= 48 && firstIndex <=57){
//     console.log("Password should not start with a number");

// }else{
//     // ====== Alphabets and numbers
//     var hasNumber = false
//     var hasAlphabets = false

//     for(var i = 0; i < password.length; i++){
//         var code = password.charCodeAt(i)

//         if(code >= 48 && code <=57){
//             hasNumber = true
//         }

//         if((code >= 65 && code <= 90) || (code >= 97 && code <= 122)){
//             hasAlphabets = true
//         }

//     }

//     if(hasNumber && hasAlphabets){
//         console.log(password);
//     }else{
//         console.log("It should contain alphabets and numbers");

//     }
// }

// ======== Date methods =============
// var now = new Date("12 nov 2004")
// now.setFullYear(2004)
// console.log(now);

// ========= Function ================
// function greeting(){
//     console.log("HELLO");
// }
// greeting()

function currentTime() {
  var now = new Date();
  var min = now.getMinutes();
  var hour = now.getHours();

  console.log("Date " + now);
  console.log("Min " + min);
  console.log("hour " + hour);
}

currentTime();
