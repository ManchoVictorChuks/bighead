var choices = ["Rock", "Paper", "Scissors"];

var playername; 

function yourName(name){
  playername = name;
}

let personScore = 0;

let computerScore = 0;

function updateScore(result){
  if(result == "win"){
    personScore += 1;
  }else if(result == "lose"){
    computerScore += 1;
  }else{
    personScore = personScore;
    computerScore = computerScore

  }
  displayscore();
 
  if (personScore + computerScore === 3){
   endgame()
    
  }
  else{
    personScore = 0;
    computerScore = 0;
  }
  
}

function gamechoice(value)
{
  const computerchoices = choices[Math.floor(Math.random() * choices.length)];
  if(
     value === computerchoices
  ){
    updateScore("tie")
    console.log(playername + "'s Choice: " + value + "\nThe Computer Chose: " + computerchoices + ".\nIt's a Tie!");
  }
    else if
    (
      value == "Rock" && computerchoices == "Scissors" ||
      value == "Paper" && computerchoices == "Rock" ||
      value == "Scissors" && computerchoices == "Paper"   
    )
    {
      updateScore("win")
      console.log(playername + "'s Choice: " + value + "\nThe Computer's Choice: " + computerchoices + ".\nYou Win!");
     }else
     {
      updateScore("lose")
      console.log(playername + "'s Choice: " + value + "\nThe Computer's Choice: " + computerchoices + ".\nYou Lose!");
     }
}




function displayscore(){
  console.log(playername + "'s Score: " + personScore + "\nComputer's Score: " + computerScore);
}

function endgame(){
  console.log("Game Over!")
  if (personScore > computerScore){
    console.log(playername + "Wins!")
  }
  else if(personScore < computerScore){
    console.log("Computer Wins!")
  }
  else{
    console.log("It's a Tie!")
  }
//store last scores
  let previousPlayerScore = personScore;
  let previousComputerScore = computerScore;

  // reset

  personScore = previousPlayerScore;
  computerScore = previousComputerScore;
}




//Input your name below. replace whatever name is there with your name.

console.log(yourName("Nita"))

// Rock, Paper or Scissors. Must begin with capital letter.

console.log(gamechoice("Rock"));



function scoreboard(){
  while (endgame) {
    
  }
}
