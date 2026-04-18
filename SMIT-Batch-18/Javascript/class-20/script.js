// ================ Age Calculator =====================
// var today = new Date()
// var todayMs = today.getTime()

// var dob = new Date("Nov 12, 2004")
// var dobMs = dob.getTime()

// var diff = todayMs - dobMs


// // ========== conversion ========
// var oneSecond = 1000
// var oneMinute = oneSecond * 60
// var oneHour = oneMinute * 60
// var oneDay = oneHour * 24
// var oneMonth = oneDay * 30
// var oneYear = oneDay * 365


// var years = Math.floor(diff / oneYear)
// var remainingMsAfterYear = diff % oneYear
// console.log(years);
// console.log(remainingMsAfterYear);


// var month = Math.floor(remainingMsAfterYear / oneMonth)
// var remainingMsAfterMonth = remainingMsAfterYear % oneMonth
// console.log(month);
// console.log(remainingMsAfterMonth);





// // =========== Birthday countdown timer ===============
// var today = new Date()
// var todayMs = today.getTime()

// var dob = new Date("Nov 12, 2026")
// var dobMs = dob.getTime()

// var diff = dobMs - todayMs


// // ========== conversion ========
// var oneSecond = 1000
// var oneMinute = oneSecond * 60
// var oneHour = oneMinute * 60
// var oneDay = oneHour * 24
// var oneMonth = oneDay * 30
// var oneYear = oneDay * 365



// var days = Math.floor(diff / oneDay)
// var remainingAfterDays = diff % oneDay
// console.log(days);

// var hour = Math.floor(remainingAfterDays / oneHour)
// console.log(hour);







// ======== username me special characters (! , . @) check karta hai aur agar mil jaye to invalid username show karta hai ===========
// var userName = prompt("Enter your name")

// var flag = false
// for(var i = 0 ; i < userName.length; i++){
//     var code = userName.charCodeAt(i)

//     if(code === 33 || code === 44 || code === 46 || code === 64){
//         flag = true
//         break;
//     }
    
// }

// if(flag){
//     console.log("Enter a valid username");
    
// }else{
//     console.log(userName);
    
// }