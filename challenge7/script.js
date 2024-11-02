const courantNumber = document.querySelector("#number");
const increaseBtn = document.querySelector("#increase");
const resetBtn = document.querySelector("#reset");
const decreaseBtn = document.querySelector("#decrease");

let newNum;

increaseBtn.addEventListener("click", function () {
  newNum = Number(courantNumber.innerHTML) + 1;
  courantNumber.innerHTML = newNum;
  // color for increase
  courantNumber.style.color = "green";
});

decreaseBtn.addEventListener("click", function () {
  newNum = Number(courantNumber.innerHTML) - 1;
  courantNumber.innerHTML = newNum;
  courantNumber.style.color = "red";
});

resetBtn.addEventListener("click", function () {
  courantNumber.innerHTML = 0;
  courantNumber.style.color = "yellow";
});
