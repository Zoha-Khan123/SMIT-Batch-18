// var num = "10.5872138"
// var integer = parseInt(num)
// var decimal = parseFloat(num)
// var changeNumber = Number(num)
// console.log(changeNumber);



// var num = 10
// console.log(num);

// var str = num.toString()
// console.log(str);



var num = 123.5555
var str = num.toString()
// console.log(str[str.length - 1]);
if(str[str.length - 1] === "5"){
  str = str.slice(0,str.length-1) + "6";
  
}
num = Number(str)
console.log(num.toFixed(5));



