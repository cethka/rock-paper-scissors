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

const getHumanChoice = () => prompt("Enter your move").toLowerCase();

console.log(getHumanChoice());

// Compare the results
// Announce the winner