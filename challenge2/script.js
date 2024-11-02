let gameNumber = 0;
let gameGuessCounter = 0;

function gameInit() {
  // Set random number for "Game Number"
  gameNumber = Math.floor(Math.random() * 100) + 1;

  // Set counter to 0
  gameGuessCounter = 0;
}

// this function manages the display of output to the user.
function showResult(text) {
  alert(text);
}

// function checks whether the given value is a valid number under the following conditions
function isValidNumber(number) {
  if (isNaN(Number(number))) {
    showResult("⚠️ Not a Number");
    return false;
  } else if (number === "Infinity") {
    showResult("⚠️ Infinity !!!");
    return false;
  } else if (Number(number) % 1 !== 0) {
    showResult("⚠️ Float is invalid");
    return false;
  }

  return true;
}

// Game preparation
gameInit();

// Game Loop
while (true) {
  // Counting new guess
  gameGuessCounter += 1;

  // Get user inputs
  const number = prompt("Guess the number?", 0);

  // Validation user inputs
  if (!isValidNumber(number)) {
    continue;
  }

  // Convert number to string
  const userNumber = Number(number);

  // Check the user input
  if (userNumber > gameNumber) {
    showResult("📉: Choose lower number");
  } else if (userNumber < gameNumber) {
    showResult("📈: Choose bigger number");
  } else if (userNumber === gameNumber) {
    showResult(`👑: Winner, Guesses: ${gameGuessCounter}`);

    // Reset the game
    gameInit();
  }
}
