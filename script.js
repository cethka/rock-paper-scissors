// Declare the players score variables
let humanScore = 0;
let computerScore = 0;

// Write the logic to get the computer choice
const getComputerChoice = () => {
  const choiceNum = Math.floor(Math.random() * 3);
  switch(choiceNum) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

// Write the logic to get the human choice
const getHumanChoice = () => prompt("Enter your move");

// Write the logic to play a single round
const winHandler = (player, computer) => {
  const winningCon =
    player === "rock" && computer === "scissors" ||
    player === "scissors" && computer === "paper" ||
    player === "paper" && computer === "rock";

  winningCon ? humanScore++ : computerScore++;
  return winningCon ? 
    `The player gets a score! ${player} beats ${computer}.`:
    `The computer gets a score! ${computer} beats ${player}.`;
}

const playRound = (humanChoice, computerChoice) => {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    return `Both sides chose ${humanChoice}.`;
  } 
  
  return winHandler(humanChoice, computerChoice);
}

// Write the logic to play the entire game
const playGame = () => {
  for (let game = 0; game < 5; game++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
  }

  const result = humanScore === computerScore ? 
    "The game is a tie!": 
    `${humanScore > computerScore ? "Player" : "Computer"} wins!`;
  console.log(`${result} Player: ${humanScore}, Computer: ${computerScore}`);
}

playGame();