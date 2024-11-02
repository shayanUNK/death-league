// create array for data
const operation = ["+", "-", "*", "/", "**", "!", "isPrime"];

// function for addition operation
function operationAdd(x, y) {
  showResult(`${x} + ${y} = ${x + y}`);
}

// function for sub operation
function operationSub(x, y) {
  showResult(`${x} - ${y} = ${x - y}`);
}

// function for multiplication operation
function operationMul(x, y) {
  showResult(`${x} * ${y} = ${x * y}`);
}

// function for division operation
function operationDiv(x, y) {
  if (y === 0) {
    showResult("Error: Division by zero");
    return;
  }

  showResult(`${x} * ${y} = ${x * y}`);
}

// function for power operation
function operationPow(x, y) {
  showResult(`${x} ** ${y} = ${x ** y}`);
}

// function for factorial operation
function operationFactorial(number) {
  if (number === 0) {
    return 1;
  } else {
    return number * operationFactorial(number - 1);
  }
}

// function for isPrime operation
function operationIsPrime(number) {
  for (let i = 2, s = Math.sqrt(number); i <= s; i++) {
    if (number % i === 0) return false;
  }

  return number > 1;
}

// function to get user operation and check it
function getUserOperation() {
  while (true) {
    let userInput = prompt(`Enter the Operation ${operation}`, "0");
    if (!operation.includes(userInput)) {
      showResult("Invalid operator !!!");
    } else {
      return userInput;
    }
  }
}

//  function to get number from user
function getUserNumber() {
  while (true) {
    let userInput = prompt(`Enter the number`, "0");
    if (isValidNumber(userInput)) {
      return Number(userInput);
    } else {
      continue;
    }
  }
}

// function for show error with alert
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

// alert to show result
function showResult(text) {
  alert(text);
}

// Script Loop
while (true) {
  // Get User Operation
  const userOperation = getUserOperation();
  const userNumber1 = getUserNumber();
  const userNumber2 = getUserNumber();

  // Checking operation
  switch (userOperation) {
    case "+":
      operationAdd(userNumber1, userNumber2);
      break;

    case "-":
      operationSub(userNumber1, userNumber2);
      break;

    case "*":
      operationMul(userNumber1, userNumber2);
      break;

    case "/":
      operationDiv(userNumber1, userNumber2);
      break;

    case "**":
      operationPow(userNumber1, userNumber2);
      break;

    case "!":
      alert(`$${userNumber1}! = ${operationFactorial(userNumber1)}`);
      break;

    case "isPrime":
      alert(`${userNumber1} is prime number: ${operationIsPrime(userNumber1)}`);
      break;

    default:
      console.error("ERROR");
      break;
  }
}
