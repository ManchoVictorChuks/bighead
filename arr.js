var set = ["Jenti", "jromise", 44, [66, 99]]

function find(name){
 if (set.includes(name)){
  return true + ", it was found"
  
 }else{
  return false + ", Not Found"

 }

}

console.log(find("Jent"));