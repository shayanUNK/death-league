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
  } else if (number === "Infinity") {
    showResult("⚠️ Infinity !!!");
    return false;
  }

  return true;
}

function toFarenhaight() {
  const temp = document.getElementById("user-input").value;

  const tempToFarenhaight = (temp * 9) / 5 + 32;

  showResult(`temperature: ${tempToFarenhaight} f`);
}

function toCelsius() {
  const temp = document.getElementById("user-input").value;

  const tempToCelsius = ((temp - 32) * 5) / 9;

  showResult(`temperature: ${tempToCelsius} c`);
}

document.getElementById("user-f").addEventListener("click", toFarenhaight);
document.getElementById("user-c").addEventListener("click", toCelsius);
