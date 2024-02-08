//Function that returns either 'Rock', 'paper', or 'scissor'
function getComputerChoice() {
  const rockPaperScissorActions = ["rock", "paper", "scissor"];
  let result = "";

  result +=
    rockPaperScissorActions[
      Math.floor(Math.random() * rockPaperScissorActions.length)
    ];

  return result;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = prompt(
    "Take your action! type 'Rock', 'Paper', or 'Scissor': ",
  );
  computerSelection = getComputerChoice();
  console.log(
    `You chose ${playerSelection}. You're opponent chose ${computerSelection}`,
  );

  if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
    return console.log("It's a tie!");
  } else if (
    (playerSelection.toUpperCase() === "rock".toUpperCase() &&
      computerSelection.toUpperCase() === "scissor".toUpperCase()) ||
    (playerSelection.toUpperCase() === "paper".toUpperCase() &&
      computerSelection.toUpperCase() === "rock".toUpperCase()) ||
    (playerSelection.toUpperCase() === "scissor".toUpperCase() &&
      computerSelection.toUpperCase() === "paper".toUpperCase())
  ) {
    return console.log("You Win!");
  } else if (
    (playerSelection.toUpperCase() === "rock".toUpperCase() &&
      computerSelection.toUpperCase() === "paper".toUpperCase()) ||
    (playerSelection.toUpperCase() === "paper".toUpperCase() &&
      computerSelection.toUpperCase() === "scissor".toUpperCase()) ||
    (playerSelection.toUpperCase() === "scissor".toUpperCase() &&
      computerSelection.toUpperCase() === "rock".toUpperCase())
  ) {
    return console.log("You Lose!");
  }
}

playRound();
