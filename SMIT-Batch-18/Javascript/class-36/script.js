// const nums = [1,2,3,4,5,6,7,8,9,10]
// const result = nums.filter( function (num){
//   return num % 2 === 0;
  
// })
// console.log(result);

// [2,4,6,8,10]

const products = [
  {
    id: 1,
    name: "iPhone 15",
    price: 250000,
    category: "Mobile",
    brand: "Apple",
    stock : true
  },
  {
    id: 2,
    name: "Galaxy S24",
    price: 220000,
    category: "Mobile",
    brand: "Samsung",
    stock : false
  },
  {
    id: 3,
    name: "MacBook Air M2",
    price: 300000,
    category: "Laptop",
    brand: "Apple",
    stock : true
  },
  {
    id: 4,
    name: "AirPods Pro",
    price: 70000,
    category: "Accessories",
    brand: "Apple",
    stock : true
  },
  {
    id: 5,
    name: "Dell Inspiron 15",
    price: 180000,
    category: "Laptop",
    brand: "Dell",
    stock : false
  }
];

// const result = products.reduce( (acc , curr)=>{
//        return  acc += curr.price
// }, 0)

// console.log(result);


// const laptops = products.filter( a => a.category === "Laptop" && a.price > 200000)

// console.log(laptops);



// const nums = [1,2,3,4,5,6,7,8,9,10]

// const result = nums.map( curr => curr * 2)
// console.log(result);


// const availabe = products.filter( item => item.stock )
// console.log(availabe);

// const discount = availabe.map( item => {
//     const twentyPerDisc = (item.price * 20 ) / 100
//     const discountedPrice = item.price - twentyPerDisc
//     return {productName : item.name , price : discountedPrice}
// })

// console.log(discount);


// const nums = [20,40,50,60]

// var sum = 0

// for(var i = 0 ; i < nums.length; i++){
//     sum += nums[i]
// }

// console.log(sum);

// const result = nums.reduce( (acc , curr) => {
//     return acc += curr
// }, 0)


// console.log(result);
