// select element
const courantNumber = document.querySelector("#number");
const increaseBtn = document.querySelector("#increase");
const resetBtn = document.querySelector("#reset");
const decreaseBtn = document.querySelector("#decrease");

// create variable
let newNum;

// event and function to increase the number
increaseBtn.addEventListener("click", function () {
  newNum = Number(courantNumber.innerHTML) + 1;
  courantNumber.innerHTML = newNum;
  // color for increase
  courantNumber.style.color = "green";
});

// event and function to decrease the number
decreaseBtn.addEventListener("click", function () {
  newNum = Number(courantNumber.innerHTML) - 1;
  courantNumber.innerHTML = newNum;
  // color for decrease
  courantNumber.style.color = "red";
});

// event and function to reset the number
resetBtn.addEventListener("click", function () {
  courantNumber.innerHTML = 0;
  courantNumber.style.color = "yellow";
});
