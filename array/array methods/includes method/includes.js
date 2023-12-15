// checks if a value is present in an array



var dictionary =["the", "and", "but", "lest", "cant", "fart"]

console.log(dictionary.includes("bat"))


function check(value){
  if (dictionary.includes(value) == true){
    return true, value + " is in the array."
  }else{
    return false, value + " is not in the array."
  }
}
console.log(check("but"))