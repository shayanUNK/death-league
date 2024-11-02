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

let words = [];
let counter = 0;

let input = document.querySelector("#input");
let submit = document.querySelector("#submit");
let output = document.querySelector("#output");

submit.addEventListener("click", () => {
  output.textContent = "";
  counter = 0;
  let inputVal = input.value;
  words = inputVal.split("");
  words.forEach((element) => {
    if (symbol.includes(element)) {
      counter += 1;
    }
  });
  output.append(` There were ${counter} symbols in the input text`);
  input.value = "";
});
