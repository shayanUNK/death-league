let age = document.querySelector("#age");
let submit = document.querySelector("#submit");
let output = document.querySelector("#output");

submit.addEventListener("click", checkAge);

function checkAge() {
  let ageVal = age.value;
  ageVal = Number(ageVal);
  if (ageVal >= 18) {
    output.textContent = "you can sign in";
  } else if (ageVal <= 0) {
    output.textContent = "your age is incorrect";
  } else if (isNaN(ageVal)) {
    output.textContent = "erorr : The value is invalid";
  } else {
    output.textContent = "you cant sign in";
  }
}
