let input = document.getElementById("input");
let submit = document.getElementById("submit");
let output = document.getElementById("output");

let arrayNumber = [];
let sum = 0;

submit.addEventListener("click", sumNumber);

function sumNumber() {
  let inputNumber = input.value;

  for (let i = 0; i <= inputNumber; i++) {
    arrayNumber.push(i);
  }

  arrayNumber.forEach((element) => {
    sum = sum + element;
  });

  output.append(`The result of your calculation ${sum}`);
}
