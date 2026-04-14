// object
// var rightNow = new Date()
// console.log(typeof rightNow);
// console.log(rightNow.getDate());
// console.log(rightNow.getTime());


// Day
// var dayNames = ["Sunday", "Monday", "منگل", "Wed", "Thu", "Fri", "Sat"];
// var day = dayNames[rightNow.getDay()]
// console.log(day);







// ======== date and time in milliseconds ===
// var now = Date.now()
// console.log(now);

// ======== str =========
// var rightNowStr = rightNow.toString()
// console.log(typeof rightNowStr);
// console.log(rightNowStr);
// console.log(rightNowStr.slice(0,4));
// console.log(rightNowStr.charAt(0));





setInterval(() => {
    // ======== specifying a date and time
var today = new Date()
var ramzanDate = new Date("Feb 07, 2027")
var todayMs = today.getTime()
var ramzanMs = ramzanDate.getTime()
var diff = ramzanMs - todayMs


// ====== calculation of milliseconds
var oneSecond = 1000
var oneMin = oneSecond * 60
var oneHour = oneMin * 60
var oneDay = oneHour * 24
var oneMonth = oneDay * 30


var days = Math.floor(diff / oneDay)
var remainingMsAfterDays = diff % oneDay

var hours = Math.floor(remainingMsAfterDays / oneHour)
var remainingMsAfterHours = remainingMsAfterDays % oneHour


var minutes = Math.floor(remainingMsAfterHours / oneMin)
var remainigMsAfterMinutes = remainingMsAfterHours % oneMin

var seconds = Math.floor(remainigMsAfterMinutes / oneSecond)

console.clear()
console.log(days + " Days " + hours + " Hours " + minutes +  " Minutes " + seconds + " Seconds ");

}, 1000);