// ================= is example ma if else ke zariye different days check karke condition apply ki gai ha =================
// var day = "friday"

// if(day === "sunday" || day === "saturday"){
//     console.log("Weekend days");
// }else if(day === "friday"){
//     console.log("Half day");

// }else{
//     console.log("Working days");
// }




// ================ switch statement ma same logic ko clean aur readable way ma multiple cases ke sath handle kiya jata ha ===============

// =========== Example 01 ================
// var day = "wednesday"
// switch(day){
//     case "sunday":
//     case "saturday":
//         console.log("weeekend days");
//         break;
//     case "friday":
//         console.log("half day");
//         break;
//     default:
//         console.log("working days");

// }


// ============ Example 02 =====================
// var marks = 51;
// switch (true) {
//   case (marks >= 81 && marks <= 100):
//     console.log("Grade A");
//     break;
//   case (marks >= 51 && marks <= 80):
//     console.log("Grade B");
//     break;
//   case (marks >= 1 && marks <= 50):
//     console.log("Fail");
//     break;
//   default:
//     console.log("Invalid marks");
// }




// ============== Check if number is prime  ============
function isPrime(num) {
  if (num <= 1) {
    return "Not Prime";
  }

  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return "Not prime";
    }
  }

  return "Prime";
}

console.log(isPrime(12));
