// console.dir(document.childNodes[1].childNodes[2].childNodes[3].textContent);

// var div1 = document.getElementById("humpty")
// var pCounter = 0

// for(var i =0; i < div1.childNodes.length; i++){
//     if(div1.childNodes[i].nodeType === 1){
//         pCounter++
//     }

//     if(pCounter === 3){
//         div1.childNodes[i].textContent = "hello world"
//         break
//     }

// }

// console.log(pCounter);

// var div1 = document.getElementById("humpty")
// console.log(div1.firstChild);

// var div2 = document.getElementById("div2")
// console.log(div2.parentNode);

// var para = document.getElementById("second_para")
// console.log(para.nextElementSibling.firstChild.nodeValue);

// var link = document.getElementById("link_tag").attributes
// console.log(link[1].nodeValue);
// console.log(link.hasAttribute("class"));
// console.log(link.getAttribute("id"));
// console.log(link.setAttribute("class","link_class"));
// console.log(link);

var div1 = document.getElementById("div1");
var p = document.createElement("p");
var text = document.createTextNode("Hello world");
p.appendChild(text);
console.log(div1.childNodes[1]);

div1.insertBefore(p, div1.childNodes[1].nextSibling);
// div1.appendChild(p)
// console.log(p);
