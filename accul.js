var numbers = [1,2,3,4,5,6,7,8,9,10];
const maths = (accumulate, value) => accumulate + value
console.log(numbers.reduce(maths))

var Anita = [];
for (i=0; i<= 500; i++){
  Anita.push(i);
}
const mfaths = (total, element) => total + element
console.log(Anita.reduce(mfaths))
console.log(Anita)


var cart =
 [
  {
  name : "Milk",
  quantity : 3,
  price : 200,
  discount : 10,
  },


  {
    name : "Egg",
    quantity : 2,
    price : 400,
    discount : 10,
  },

  {
    name : "Fish",
    quantity : 1,
    price : 250,
    discount : 2,
  },

  {
    name : "Garri",
    quantity : 1,
    price : 500,
    discount : 2,
  },

  {
    name : "Tomato",
    quantity : 10,
    price : 10,
    discount : 1,
  },

  {
    name : "Pepper",
    quantity : 10,
    price : 100,
    discount : 10,
  },

  {
    name : "Sugar",
    quantity : 3,
    price : 500,
    discount : 5,
  },
]


var pricegan = [];
cart.forEach (function check(element){
  var disc = element.discount / 100
  var plus = element.price * disc;
  var discountprice = element.quantity * (element.price - plus)
  pricegan.push(discountprice); 
}
)
console.log(pricegan)

const add = (total, element) => total + element;
console.log(pricegan.reduce(add))

cart.forEach(element => {
  var disc = element.discount / 100
  var plus = element.price * disc;
  var discountprice = element.quantity * (element.price - plus)
  pricegan.push(discountprice)
})


function checkdiscountfor (i){
  return (cart[i].discount)
}
console.log('The discount is ' + checkdiscountfor(0))

// function checkdiscountfor(i, name){
//   function indexin(i){
//     for (i=0; i<cart.length; i++){


//     }
//   }
//   if (cart[i].name == name){
//     console.log('The discount on ' + cart[i]['name'] + ' is = ' + cart[i]['discount'])
//   }else {
//   return "Not found"
// }}

// console.log(checkdiscountfor(6))

function cheq(element){
  if(element.name == "Egg"){
    console.log(element.discount)
  }else{
    return "Doesnt work"
  }
}
