const mathOperators = ["+", "-", "*", "/"];

/**
 * This function get two number and then adds the numbers together and displays the output.
 * @param {number} number1 First number to sum
 * @param {number} number2 Second number to sum
 */
function operatorSum(number1, number2) {
  showResult(number1 + number2);
}

/**
 * This function get two number and then subtract the numbers together and displays the output.
 * @param {number} number1 First number to subtract
 * @param {number} number2 Second number to subtract
 */
function operatorSub(number1, number2) {
  showResult(number1 - number2);
}

/**
 * This function get two number and then multiply the numbers together and displays the output.
 * @param {number} number1 First number to multiply
 * @param {number} number2 Second number to multiply
 */
function operatorMul(number1, number2) {
  showResult(number1 * number2);
}

/**
 * This function get two number and then division the numbers together and displays the output.
 * @param {number} number1 First number to division
 * @param {number} number2 Second number to division
 */
function operatorDiv(number1, number2) {
  // Error division by zero handling
  if (number2 === 0) {
    showResult("⚠️ Division by zero");
  }

  showResult(number1 / number2);
}

/**
 * This function manages the process of calculating.
 * From getting number value from the user to displaying the final result to the user.
 */
function calculatorHandler() {
  const number1 = document.getElementById("user-input-1").value;
  const mathOperator = document.getElementById("user-input-2").value;
  const number2 = document.getElementById("user-input-3").value;

  if (!isValidNumber(number1)) {
    return;
  }

  if (!isValidNumber(number2)) {
  }

  if (!mathOperators.includes(mathOperator)) {
    showResult("⚠️ Invalid Operator");
    return;
  }

  const convertToNumber1 = Number(number1);
  const convertToNumber2 = Number(number2);

  switch (mathOperator) {
    case "+":
      operatorSum(convertToNumber1, convertToNumber2);
      break;

    case "-":
      operatorSub(convertToNumber1, convertToNumber2);
      break;

    case "*":
      operatorMul(convertToNumber1, convertToNumber2);
      break;

    case "/":
      operatorDiv(convertToNumber1, convertToNumber2);
      break;

    default:
      break;
  }
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
  } else if (number === "Infinity") {
    showResult("⚠️ Infinity !!!");
    return false;
  }

  return true;
}

document
  .getElementById("user-submit")
  .addEventListener("click", calculatorHandler);
