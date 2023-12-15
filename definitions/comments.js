var name;
//this is a variable called name
function Checkglobe(){
  //this is a function to be carried out by the program called checkglobe
  if (name != undefined){
    /*here, the if function is called.
    it checks if the variable Name "is NOT" undefined.
    */ 
    return name;
    //this returns name if previous line is 1
  }
  else {
    return "Undefined";
    //this returns undefined if "If" function is 0
  }
}
console.log(Checkglobe());
