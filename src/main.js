let computerScore = document.querySelector(".computerscore");
let playerScore = document.querySelector(".playerscore");
let computerGuess = document.querySelector(".computerguess");
let playerGuess = document.querySelector(".playerguess");
let result = document.querySelector(".resultstatement");
let emojiDiv = document.querySelectorAll(".emojidiv");
let emojis = ["✊", "✌️", "✋"];
let playerScoreNumber = 0;
let computerScoreNumber = 0;
emojiDiv.forEach((e) => {
  e.addEventListener("click", function () {
    playerGuess.textContent = e.children[0].textContent;
    let computerSelection = getComputerChoice();
    computerGuess.textContent = emojis[computerSelection];
    determineWinner();
    playerScore.textContent = playerScoreNumber;
    computerScore.textContent = computerScoreNumber;
  });
});

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * emojis.length);
  return randomNumber;
}

function determineWinner() {
  if (playerGuess.textContent === computerGuess.textContent) {
    result.textContent = "CURRENTLY DRAW";
  } else {
    switch (playerGuess.textContent) {
      case "✊":
        if (computerGuess.textContent === "✌️") {
          result.textContent = "PLAYER WINS";
          playerScoreNumber++;
        } else {
          result.textContent = "COMPUTER WINS";
          computerScoreNumber++;
        }
        break;
      case "✋":
        if (computerGuess.textContent === "✊") {
          result.textContent = "PLAYER WINS";
          playerScoreNumber++;
        } else {
          result.textContent = "COMPUTER WINS";
          computerScoreNumber++;
        }

        break;
      case "✌️":
        if (computerGuess.textContent === "✋") {
          result.textContent = "PLAYER WINS";
          playerScoreNumber++;
        } else {
          result.textContent = "COMPUTER WINS";
          computerScoreNumber++;
        }

        break;
      default:
    }
  }
}

document.addEventListener('contextmenu', event => event.preventDefault());