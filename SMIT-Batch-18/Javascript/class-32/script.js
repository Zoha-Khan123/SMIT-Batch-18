// var monkeyWindow = window.open("about.html","win1")
// var studentName = "zoha"
// var windowContent = `<h1>Hello ${studentName}</h1>`
// monkeyWindow.document.write(windowContent)
// monkeyWindow.location.href = "https://www.google.com";

// window.open("about.html","win1")
// window.open("https://www.google.com","win1")

// window.open("","","width=500,height=500,top=250,left=250")

// function checkForPopBlocker() {
//     var testPop = window.open("", "", "width=100,height=100");
//     if (testPop === null || typeof (testPop === "undefined")) {
//         alert("Please disable your popup blocker.");
//     }
//     testPop.close();
// }
// checkForPopBlocker()

// aler("hello")
// console.log("javascript");

// try {
//     aler("hello")

// } catch (error) {
//     console.log(error);
// }

// console.log("javascript");

// function passCheck(e){
//     e.preventDefault()
//     try {
//         var password = document.getElementById("password").value
//         if(password.length < 8){
//             throw "Please enter at least 8 characters.";
//         }
//     } catch (error) {
//         console.log(error);
//     }

// }

var btn = document.getElementById("btn");

function hello() {
  alert("javascript is completed");
}

btn.onclick = hello;
