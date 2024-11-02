// Count the number of clicks *13*

// select element
let clickElement = document.getElementById("clickElement");
let textElement = document.getElementById("textElement");
// ------------------------------

// select button
const button = document.getElementById("btn");

// a value for the number of clicks
let clickCounter = 0;

// add event fot check user click
button.addEventListener("click", countClick);

// create function for check number of click and show alert
function countClick() {
  // Increase the number of clicks with each click
  ++clickCounter;
  console.log(clickCounter);
  // show in DOM with element
  clickElement.textContent = clickCounter;

  // Show alert set for every 10 clicks
  if (clickCounter % 10 === 0) {
    textElement.textContent = `تعداد کلیک ها به حد نصاب رسید`;
  } else {
    clickElement.textContent = "";
  }
}
