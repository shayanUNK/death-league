let clickElement = document.getElementById("clickElement");
let textElement = document.getElementById("textElement");

const button = document.getElementById("btn");

let clickCounter = 0;

button.addEventListener("click", countClick);

function countClick() {
  ++clickCounter;
  console.log(clickCounter);

  clickElement.textContent = clickCounter;

  if (clickCounter % 10 === 0) {
    textElement.textContent = `تعداد کلیک ها به حد نصاب رسید`;
  } else {
    clickElement.textContent = "";
  }
}
