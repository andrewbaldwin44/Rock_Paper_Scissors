/*Values for Computer and User Score*/
let usrScore = 0;
let compScore = 0;

/*Function to randomly select rock, paper, or scissors*/
function compPlay() {
  let choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

/*Gameplay*/
function gamePlay(usrChoice) {
  let compChoice = compPlay();

  const usrScoreBoard = document.getElementById("usrScore");
  const compScoreBoard = document.getElementById("compScore");
  const result = document.getElementById("gameResult");

  if (usrScore < 5 && compScore < 5) {
    document.getElementById("usrPicked").innerHTML = usrChoice;
    document.getElementById("compPicked").innerHTML = compChoice;

    if (usrChoice == compChoice) {
      result.innerHTML = "Tie Game!"
      result.style.background = "rgb(218, 20, 192)";
    }

    else if (usrChoice == 'rock' && compChoice == 'scissors'
    || usrChoice == 'paper' && compChoice == 'rock'
    || usrChoice == 'scissors' && compChoice == 'paper') {
      result.innerHTML = "You Win!";
      result.style.background = "rgb(77, 218, 20)";
      usrScore +=1;
      usrScoreBoard.innerHTML = usrScore;
    }

    else {
      result.innerHTML = "You Lose!";
      result.style.background = "rgb(240, 128, 37)";
      compScore+=1;
      compScoreBoard.innerHTML = compScore;
    }
  }
  else {
      document.getElementById("gameResult").innerHTML = "Lets Start a New Game!"
  }
  console.log(usrScore, compScore)

}

/*End of game*/
function endGame() {
  const result = document.getElementById("gameResult");
  if (document.getElementById("usrScore").innerHTML.slice(-1) == 5) {
    result.innerHTML = "You win the game!!!!";
  }
  if (document.getElementById("compScore").innerHTML.slice(-1) == 5) {
    result.innerHTML = "You lose the game!";
  }
}
