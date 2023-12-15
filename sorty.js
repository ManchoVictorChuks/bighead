function start(){
  var a= [10, 5, 4, 7, 2, 3, 9, 1, 6, 8];
  outputArray( "Data in Original order: ", a, document.getElementById("originalArray"))
  
  a.sort( compareintegers);
  outputArray( "Data in Ascending Order: ", a, document.getElementById("sortedArray"));

}

function outputArray(heading, theArray, Output){
  Output.innerHTML = heading + theArray.join ( " " );
}

function compareintegers(value1, value2){
  return parseInt(value1) - parseInt(value2);
}

window.addEventListener("load", start, false)