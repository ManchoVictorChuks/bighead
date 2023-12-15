var set = ["Jenti", "jromise", 44, [66, 99]]

function find(name){
 var search;
 search = set[name]

 if (name !== search){
  return false
 }else{
  return name
  
 }

}

console.log(find("Jenti"));