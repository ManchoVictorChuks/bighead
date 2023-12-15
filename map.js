var numbers =[1,3,5,7,9];

const map1 = numbers.map(element => element * 2);

console.log(numbers)

console.log(map1)

var num2 =[];

numbers.forEach(element => { 
  num2.push(element * 2)
});

console.log(num2)
