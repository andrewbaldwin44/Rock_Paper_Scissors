class Game {
  constructor() {
    this.userScore = 0;
    this.compScore = 0;
    this.userWeapon = "";
    this.compWeapon = "";

    this.choices = ["rock", "paper", "scissors"];

    this.userScoreBoard = document.querySelector("#userScore");
    this.compScoreBoard = document.querySelector("#compScore");

    this.gameBanner = document.querySelector("#gameBanner");
    this.gameStatus = document.querySelector("#gameStatus");
    this.userChoice = [...document.querySelectorAll(".choiceSelect")];

    this.faceOffLeft = document.querySelector("#faceOffLeft");
    this.faceOffRight = document.querySelector("#faceOffRight");

    this.userChoice.map(button => button.addEventListener("click", button => {
      this.faceOff(button.target.id);
      this.faceOffBannerAnimation();
    }));
    this.faceOffLeft.addEventListener("animationend", () => this.showHand(), false);
  }

  faceOff(selectedButton) {
    this.disableButtons();

    this.resetFaceOff();

    this.toggleFaceOff();

    this.userWeapon = selectedButton;
    this.compWeapon = this.choices[Math.floor(Math.random() * this.choices.length)];
  }

  faceOffBannerAnimation() {
    let currentPercent = 0;
    setInterval(() => {
      if (currentPercent < 100) {
        currentPercent += 1;
      }
      else {
        return;
      }

      if (currentPercent > 0) {
        this.gameStatus.style.transition = "0.5s";
        this.gameStatus.style.fontSize = "1.6rem";
        this.gameStatus.textContent = "Rock!";
      }
      if (currentPercent > 10) {this.gameStatus.style.opacity = "0"}
      if (currentPercent > 22) {
        this.gameStatus.style.opacity = "1";
        this.gameStatus.textContent = "Paper!";
      }
      if (currentPercent > 35) {this.gameStatus.style.opacity = "0"}
      if (currentPercent > 45) {
        this.gameStatus.style.opacity = "1";
        this.gameStatus.textContent = "Scissors!";
      }
      if (currentPercent > 55) {this.gameStatus.style.opacity = "0"}
      if (currentPercent > 65) {
        this.gameStatus.style.opacity = "1";
        this.gameStatus.style.fontSize = "1rem";
        this.gameStatus.style.fontSize = "2.5rem";
        this.gameStatus.textContent = "Shoot!";
      }
      if (currentPercent > 99) {
        this.gameStatus.style.transition = "none";
        this.gameStatus.style.fontSize = "1.6rem";
        this.pickWinner();
      }
    }, 45);
  }

  showHand() {
    switch (this.userWeapon) {
      case "paper":
        this.faceOffLeft.setAttribute("src", "images/paper.png");
        break;
      case "scissors":
        this.faceOffLeft.setAttribute("src", "images/scissors.png");
        break;
      default:
        this.faceOffLeft.setAttribute("src", "images/rock.png");
    }
    switch (this.compWeapon) {
      case "paper":
        this.faceOffRight.setAttribute("src", "images/papermirror.png");
        break;
      case "scissors":
        this.faceOffRight.setAttribute("src", "images/scissorsmirror.png");
        break;
      default:
        this.faceOffRight.setAttribute("src", "images/rockmirror.png");
    }
    this.toggleFaceOff();
  }

  pickWinner() {
    if (this.userScore < 5 && this.compScore < 5) {
      if (this.userWeapon == this.compWeapon) {
        this.gameStatus.textContent = "Tie Game!"
        this.gameBanner.style.background = "rgb(218, 20, 192)";
      }

      else if (this.userWeapon == "rock" && this.compWeapon == "scissors"
      || this.userWeapon == "paper" && this.compWeapon == "rock"
      || this.userWeapon == "scissors" && this.compWeapon == "paper") {
        this.gameStatus.textContent = "You Win!";
        this.gameBanner.style.background = "rgb(77, 218, 20)";
        this.userScore += 1;
      }

      else {
        this.gameStatus.textContent = "You Lose!";
        this.gameBanner.style.background = "rgb(240, 128, 37)";
        this.compScore += 1;
      }
    }
    this.updateScoreBoard();
    this.endGame();
  }

  updateScoreBoard() {
    this.userScoreBoard.textContent = this.userScore;
    this.compScoreBoard.textContent = this.compScore;
  }

  resetFaceOff() {
    this.faceOffLeft.setAttribute("src", "images/rock.png");
    this.faceOffRight.setAttribute("src", "images/rockmirror.png");
    this.gameBanner.style.backgroundColor = "rgb(38, 159, 246)";
  }

  toggleFaceOff() {
    this.faceOffLeft.classList.toggle("faceOffLeft");
    this.faceOffRight.classList.toggle("faceOffRight");
  }

  enableButtons() {
    this.userChoice.map(button => {button.disabled = false; button.classList.remove("disabled")});
  }

  disableButtons() {
    this.userChoice.map(button => {button.disabled = true; button.setAttribute("class", "disabled")});
  }

  endGame() {
    if (this.userScore == 5) {
      this.gameStatus.textContent = "You win the game!!!!";
      this.disableButtons();
    }
    else if (this.compScore == 5) {
      this.gameStatus.textContent = "You lose the game!";
      this.disableButtons();
    }
    else {
      this.enableButtons();
    }
  }

  restart() {
    this.userScore = 0;
    this.compScore = 0;
    this.gameStatus.textContent = "Let's Play!";
    this.resetFaceOff();
    this.updateScoreBoard();
    this.enableButtons();
  }
}

let playGame = new Game();

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => playGame.restart());
