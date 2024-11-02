let gameNumber = 0;
let gameGuessCounter = 0;

function gameInit() {
  gameNumber = Math.floor(Math.random() * 100) + 1;

  gameGuessCounter = 0;
}

function showResult(text) {
  alert(text);
}

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

gameInit();

// Game Loop
while (true) {
  gameGuessCounter += 1;

  const number = prompt("Guess the number?", 0);
  if (!isValidNumber(number)) {
    continue;
  }

  const userNumber = Number(number);

  if (userNumber > gameNumber) {
    showResult("📉: Choose lower number");
  } else if (userNumber < gameNumber) {
    showResult("📈: Choose bigger number");
  } else if (userNumber === gameNumber) {
    showResult(`👑: Winner, Guesses: ${gameGuessCounter}`);

    gameInit();
  }
}
