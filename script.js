// Make the computer choose its move

function getComputerChoice() {
  const choiceNum = Math.floor(Math.random() * 3);
  switch(choiceNum) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
  // No need for break statements since we're returning a value after each case statement anyway
}

// console.log(getComputerChoice());

// Let the user choose their move
// Compare the results
// Announce the winner