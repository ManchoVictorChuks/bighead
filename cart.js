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


var pricegan = []
cart.forEach(function mainprice(element){
  var disc = (element.discount/100) * element.price
  var discp =  element.price - disc
  pricegan.push((element.quantity * discp))
  
})
const madman = (accumulate, currentValue) => accumulate + currentValue;
console.log("Cart Value: " + pricegan.reduce(madman) + " Naira");

cart.forEach(function finddiscount(element){
  if(element.name == "Sugar"){
    var discountprice = (element.discount/ 100) * element.price

    var mainpriceofprod = element.price - discountprice;
    console.log("The Discount on this product is " + element.discount + "% " + "which is:   " + discountprice + " Naira. Therefore, the price of the product after discount is:  " + mainpriceofprod + "Naira")
  }else{
    return element + " is not on the cart";
  }
})


function checkit(element){
  if(element.name == "Sugar"){
   
    var discountprice = (element.discount/ 100) * element.price

    var mainpriceofprod = element.price - discountprice;
    console.log("The Discount on this product is " + element.discount + "% " + "which is:   " + discountprice + " Naira. Therefore, the price of the product after discount is:  " + mainpriceofprod + "Naira")
  }else{
    return element.name + " is not on the cart";
  }}


function checkdiscountfor(i){
  
  if (cart[i].name == "Sugar"){
    console.log('The discount on ' + cart[i]['name'] + ' is = ' + cart[i]['discount'])
  }else {
  return "Not found"
}}

console.log(checkdiscountfor(6))