// Make the computer choose its move

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

// Let the user choose their move

const getHumanChoice = () => prompt("Enter your move");

// Write the logic to play a single round

let humanScore = 0;
let computerScore = 0;

const playRound = (humanChoice, computerChoice) => {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    console.log(`It's a tie! Both sides chose ${humanChoice}.`);
  } else if (
    humanChoice === "rock" && computerChoice === "scissors" ||
    humanChoice === "scissors" && computerChoice === "paper" ||
    humanChoice === "paper" && computerChoice === "rock"
  ) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

// Announce the winner