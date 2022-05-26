/* Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw! */

function rps(p1, p2) {
    let result = "";
    if (p1 === p2) {
      result = "Draw!";
    } else if (p1 === "rock" && p2 === "scissors") {
      result = "Player 1 won!";
    } else if (p1 === "rock" && p2 === "paper") {
      result = "Player 2 won!";
    } else if (p1 === "scissors" && p2 === "rock") {
      result = "Player 2 won!";
    } else if (p1 === "scissors" && p2 === "paper") {
      result = "Player 1 won!";
    } else if (p1 === "paper" && p2 === "rock") {
      result = "Player 1 won!";
    } else if (p1 === "paper" && p2 === "scissors") {
      result = "Player 2 won!";
    } 
    return(result);
  }