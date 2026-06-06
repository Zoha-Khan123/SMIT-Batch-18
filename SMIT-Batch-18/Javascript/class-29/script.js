var heading1 = document.getElementById("heading1")

// create element
// var createEle = document.createElement("h2")
// createEle.textContent = "h2 update"
// createEle.id = "heading2"
// // createEle.className = "class1 " 
// // createEle.className += " class2" 
// createEle.classList.add("class1","class2")
// // createEle.style.backgroundColor = "red"
// // createEle.style.color = "white"
// // createEle.classList.remove("class2")
// // console.log(createEle.getAttribute("class"));
// console.log(createEle.setAttribute("title","Hello world"));
// heading1.after(createEle)


// console.dir(createEle)
// console.log(createEle);


var unorder = document.getElementById("unorder-list")
console.dir(unorder)


// var listItem1 = document.createElement("li")
// listItem1.textContent = "rice"


// var listItem2 = document.createElement("li")
// listItem2.textContent = "milk"


// var listItem3 = document.createElement("li")
// listItem3.textContent = "juice"



// var listItem4 = document.createElement("li")
// listItem4.textContent = "lays"

// unorder.append(listItem1,listItem2)
// unorder.prepend(listItem3)
// unorder.children[1].after(listItem4)
// listItem1.after(listItem4)
// console.log(listItem1);
// console.log(listItem2);

var items = ["rice","juice","lays","milk"]
var store = []
for(var i = 0; i < items.length; i++){
    var listItems = document.createElement("li")
    listItems.textContent = items[i]
    console.log(listItems);
    store.push(listItems)
    
}
unorder.append(...store)
console.log(store);