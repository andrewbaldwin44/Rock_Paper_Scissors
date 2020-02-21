function gamePlay(usrChoice) {
  let choices = ['rock', 'paper', 'scissors'];
  let compChoice = choices[Math.floor(Math.random() * choices.length)];

  console.log(`You picked ${usrChoice} and the computer picked ${compChoice}.`)

  if (usrChoice == compChoice) {console.log("Tie Game!")}
  else if (usrChoice == 'rock' && compChoice == 'scissors' || usrChoice == 'paper' && compChoice == 'rock' || usrChoice == 'scissors' && compChoice == 'paper') {
    console.log("You Win!");
  }
  else {
    console.log("You Lose!");
  }
}
