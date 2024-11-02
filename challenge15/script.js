// define the available symbols in a list
let symbol = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "~",
  ".",
  "+",
  "=",
  "?",
  "_",
  "-",
  "/",
  "<",
  "|",
];
// create varable
let words = [];
let counter = 0;
// select DOM element
let input = document.querySelector("#input");
let submit = document.querySelector("#submit");
let output = document.querySelector("#output");

// add event for get user choice
// add arrow function for check user data
submit.addEventListener("click", () => {
  output.textContent = "";
  counter = 0;
  let inputVal = input.value;
  words = inputVal.split("");
  words.forEach((element) => {
    // Examining the presence of symbols with includes's method
    if (symbol.includes(element)) {
      counter += 1;
    }
  });
  output.append(` There were ${counter} symbols in the input text`);
  input.value = "";
});
