var names = ["hole in one", "birdie", "good shot", "nice try", "Go Home"]
  function golfscore (strokes, par){
    if (strokes == 1){
      return names[0]
    }else if (strokes == par - 0){
      return names[1]
    }else if (strokes == par - 1){
      return names[2]
    }else if (strokes == par){
      return names[3]
    }else if (strokes == par + 1){
      return names[4]
    }
}

console.log(golfscore(6,3))

var outfit = "Outfit"

 