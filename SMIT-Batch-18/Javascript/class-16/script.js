// ========== loop ke through word find kar ka usko replace karna =============
// var str = "Javacsript is a programming language."
// for(var i = 0; i < str.length; i++){
//     if(str.slice(i,i+11) === "programming"){
//         console.log(str.slice(0,i) + "frontend" + str.slice(i+11));
        
//     }
// }




// =========== indexOf start say pehla occurrence ka index no data ha ===========
// var str = "Javacsript is a programming language programming."
// var indexNo = str.indexOf("programming")
// console.log(indexNo);

// if(indexNo !== -1){
//     console.log(str.slice(0,indexNo) + "frontend" + str.slice(indexNo+11));
    
// }else{
//     console.log("Invalid word");
// }





// =========== lastIndexOf last say find karta ha or uska index no data ha ===========
// var str = "Javacsript is a programming language programming."
// var indexNo = str.lastIndexOf("programming")
// console.log(indexNo);

// if(indexNo !== -1){
//     console.log(str.slice(0,indexNo) + "frontend" + str.slice(indexNo+11));
    
// }else{
//     console.log("Invalid word");
// }





// ========= word replace with methods ==============
// var str = "Javacsript is a programming language programming."
// console.log(str.replace("programming","frontend"));
// console.log(str.replaceAll("programming","frontend"));
// console.log(str.replace(/programming/g,"frontend"));




// ======== Access a character by its index using different methods ===========
// var str = "zoha"
// console.log(str.slice(0,1));
// console.log(str.charAt(0));
// console.log(str[0]);




// ====== Math.round number ko nearest integer par round karta hai ======
// var no2 = 4.5
// console.log(Math.round(no2));




// ====== Math.floor number ko next smaller integer ki taraf round karta hai ======
// var no1 = 4.9
// console.log(Math.floor(no1));




// ========== Math.ceil number ko next greater integer ki taraf round karta hai ======
// var no = -0.5
// console.log(Math.ceil(no));




// ========  1 se 6 tak random number generate karna ==========
// var randomNo = Math.floor(Math.random() * 6 ) + 1
// console.log(randomNo);




// =======  1 se 10 tak random number generate karna ========
// var randomNo = Math.ceil(Math.random() * 10 )
// console.log(randomNo);




// ===== array me se random index pick karke random color select karna =======
// var arr = ["blue","pink","orange"]
// var randomNo = Math.floor(Math.random() * arr.length)
// console.log(arr[randomNo]);
