// =========== Nested If/Else ===============

// var html = prompt("Do you know html (yes/no)?")

// if(html === "yes"){
//    console.log("Html ate the");
//    var css = prompt("Do you know css (yes/no)?")
//    if(css === "yes"){
//     console.log("css ate ha");
//     var javascript = prompt("Do you know javascript (yes/no)?")
//     if(javascript === "yes"){
//         console.log("Javscript ate ha");
//     }else{
//         console.log("Javscript nahi ate");
//     }
//    }else{
//     console.log("css nahi ate");

//    }
// }else{
//     console.log("Html nahi ate");
// }

// ================== Array =================
// var students = ["Zoha","Rubina","Huma","Bisma"]
// // console.log(students[3]);
// // students[1] = "Alishba"
// // students[students.length -1] = "Alishba"
// console.log(students);

// =============== push =================
// / var students = ["Alishba","Huma","Rubina","Noor"]
// array ka end ma add karta ha
// var returnValue = students.push("Zoha","Rubina","Huma")
// console.log(returnValue);
// console.log(students);

// =================== pop ============
// array ka end say remove karta ha
// var students = ["Alishba","Huma","Rubina","Noor"]
// var returnValue = students.pop()
// console.log(returnValue);
// console.log(students);

// ================= unshift ==============
// unshift start ma elements ko add karta ha
//  var students = ["Alishba","Huma","Rubina","Noor"]
// var returnValue = students.unshift("Zoha")
// console.log(returnValue);
// console.log(students);

// ================= shift ==================
// shift start say element ko remove kar data ha
// var students = ["Alishba","Huma","Rubina","Noor"]
// var returnValue = students.shift()
// console.log(returnValue);
// console.log(students);

// ====================== splice ===============
// splice ma hum first value say target kartay han second say delete kartay han third say multiple elements add kartay han
// var students = ["Alishba","Huma","Rubina","Noor"]
// var returnValue = students.splice(1,2,"Zoha","Momina")
// console.log(returnValue);
// console.log(students);

// ====================== slice ==================
// slice say hum array ka koi sa bhe part copy kar saktay han is ma do values hum daltay han first target kartay han second
// ma hum batatay han kaha tak element ko copy karna ha is ma aik index zyada batana hota ha copy ka liya ya orignal array ko
// change nahi karta

// var students = ["Alishba","Huma","Rubina","Noor"]
// var copyStudents = students.slice(1,3)
// console.log(copyStudents);
// console.log(students);
