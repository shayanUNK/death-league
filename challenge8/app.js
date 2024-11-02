// select element
let age = document.querySelector("#age");
let submit = document.querySelector("#submit");
let output = document.querySelector("#output");

// add event for user get input
submit.addEventListener("click", checkAge);

// function for check value
function checkAge() {
  // get age value
  let ageVal = age.value;
  ageVal = Number(ageVal);
  // Conditions for checking the entered age
  if (ageVal >= 18) {
    output.textContent = "you can sign in";
  } else if (ageVal <= 0) {
    output.textContent = "your age is incorrect";
  }
  // error (The value is invalid)
  else if (isNaN(ageVal)) {
    output.textContent = "error : The value is invalid";
  }
  // Error for age condition not being met
  else {
    output.textContent = "you cant sign in";
  }
}
