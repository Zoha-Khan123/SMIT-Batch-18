// for(var i = 0; i < text.length; i++){
//     if(text.slice(i,i+12) === "World War II"){
//         console.log(text.slice(0,i)+"Second world war zoha saba"+text.slice(i+12));
//     }
// }

var text =
  "The New Yorker magazine doesn't allow the phrase World War II. They say it should be the Second World War.";
var firstChar = text.indexOf("World War II");
// console.log(firstChar);

console.log(
  text.slice(0, firstChar) + "second world war" + text.slice(firstChar + 12)
);
// 0,49                                                                49 + 12
