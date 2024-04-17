// cpu picks between rock paper or scissors
// let playerChoice = prompt("Pick a play").toLowerCase().trim();

function getCompChoice() {
  let cpuChoice;
  let num = Math.floor(Math.random() * 3);
  if (num === 0) {
    cpuChoice = "rock";
  } else if (num === 1) {
    cpuChoice = "scissors";
  } else {
    cpuChoice = "paper";
  }
  return cpuChoice;
}

// sims one round of game taking in player and cpu choice
// case insensitive to choices
// returns winner
function playRound(playerSelection, computerSelection) {
  let result;
  let playerChoice = prompt("Pick a play").toLowerCase().trim();
  playerSelection = playerChoice;
  computerSelection = getCompChoice();
  if (playerSelection === computerSelection) {
    result = "its a tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    result = "you win!";
  } else {
    result = "you lose";
  }
  return (`"Player picked:" ${playerSelection} "cpu picked:" ${computerSelection} ", so the result is a" ${result}`);
}

//plays 5 round game that keeps score and returns winner
// display winner after each round
function playSeries() {
    
}

// console.log(getCompChoice());
console.log(playRound());
