// select element
let input = document.getElementById("input");
let submit = document.getElementById("submit");
let output = document.getElementById("output");

// create varable
let arrayNumber = [];
let sum = 0;

// add event for get user input
submit.addEventListener("click", sumNumber);

// create function to add the numbers as stated in the challenge
function sumNumber() {
  let inputNumber = input.value;

  // Find the number of numbers
  for (let i = 0; i <= inputNumber; i++) {
    // Add to previous list
    arrayNumber.push(i);
  }

  // sum array numbers
  arrayNumber.forEach((element) => {
    sum = sum + element;
  });

  // show output
  output.append(`The result of your calculation ${sum}`);
}
