var kunde = [24, -12, 33, 70, 170, 400, -100]
function account(){
  var firstmoney;
  firstmoney= kunde[0]
  var addThem;
  addThem = firstmoney + kunde[1] + kunde[2] + kunde[3] + kunde[4] + kunde[5] + kunde[6];
  return addThem
}

console.log(account())

var total= 0
for(var i = 0; i < kunde.length; i++ )
total += kunde[i]

console.log(total)

//how to add things in an array