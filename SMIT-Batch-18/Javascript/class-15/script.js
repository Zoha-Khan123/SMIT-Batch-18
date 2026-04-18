// var month = prompt("Enter month name")
// if(month.length > 3){
//     console.log(month.slice(0,3)); 
// }

// ============ word found ============
// var text = "Javascript programming is a programming programming programming language"
// var count = 0
// for(var i = 0; i < text.length; i++){
//     if(text.slice(i,i+11)==="programming"){
//         console.log("programming found");
//         count++
        
//     }
// }
// console.log(count);


// ============ word replace ===================
// var text = "Javascript is a programming language"
// for(var i = 0; i < text.length; i++){
//     if(text.slice(i,i+10)==="Javascript"){
//         console.log("Python" + text.slice(i+10));
        
//     }
// }


// var text = "Javascript is a programming language programming"
// for(var i = 0; i < text.length; i++){
//     if(text.slice(i,i+11)==="programming"){
//         text = text.slice(0,i)+ "frontend" + text.slice(i+11);
        
//     }
// }
// console.log(text);

// ============ word replace with different methods ================
// var text = "Javascript is a programming language programming"
// console.log(text.replace("programming","frontend"));
// console.log(text.replace(/programming/g,"frontend"));
// console.log(text.replaceAll("programming","frontend"));
