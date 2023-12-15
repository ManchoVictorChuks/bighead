var students =
 [
  {
  name : "Anita",
  class : "SS2",
  age : 15,
  school : "AUB",
  complexion : "Fair"
  },


  {
    name : "Kenti",
    class : "SS3",
    age : 16,
    school : "AUB",
    complexion : "Dark"
  },

  {
    name : "Promise",
    class : "SS1",
    age : 18,
    school : "AUB",
    complexion : "Fair"
  },

  {
    name : "favour",
    class : "SS2",
    age : 15,
    school : "AUB",
    complexion : "Fair"
  },

  {
    name : "Victor",
    class : "SS2",
    age : 18,
    school : "AUB",
    complexion : "Dark"
  }
]
// function printElement(elem){
//   console.log(elem)
// }
// students.forEach( printElement )


students.forEach(function check(element) {
   if(element.name == "Anita"){
    console.log(element)
  }else{
    return false
  }

})























