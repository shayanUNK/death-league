let numberValue;

let getInputValue = Number(prompt("Enter the desired number"));

if (getInputValue % 2 !== 0) {
  alert("Your number is odd");
} else {
  document.body.innerHTML = `Your number is even`;
}
