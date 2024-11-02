let counter = 0;

let timer;

function setTimer() {
  timer = setInterval(function () {
    counter -= 1;

    if (counter === 0) {
      timerRestart();
    }

    showResult(counter);
  }, 1000);
}

function timerStart() {
  const number = document.getElementById("user-input").value;

  if (!isValidNumber(number)) {
    return;
  }

  const convertToNumber = Number(number);

  counter = convertToNumber;

  setTimer();
}

function timerStop() {
  clearInterval(timer);
}

function timerRestart() {
  timerStop();
  counter = 0;
  showResult(counter);
  timer = undefined;
}

/**
 * This function manages the display of output to the user.
 * @param {*} text Text to display on HTML.
 */
function showResult(text) {
  document.getElementById("result").textContent = text;
}

function isValidNumber(number) {
  if (isNaN(Number(number))) {
    showResult("⚠️ Not a Number");
    return false;
  } else if (number <= 0) {
    showResult("⚠️ Invalid Number");
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

document.getElementById("user-start").addEventListener("click", timerStart);
document.getElementById("user-stop").addEventListener("click", timerStop);
document.getElementById("user-restart").addEventListener("click", timerRestart);
