// select element
let colorBTN = document.querySelector("#color-BTN");
// add color list
let colors = ["red", "blue", "green", "black"];

// foreach loop to create color element
colors.forEach((element) => {
  // create element for color
  let createColor = document.createElement("div");
  createColor.id = element;
  createColor.style.backgroundColor = element;

  // add event to get user target
  createColor.addEventListener("click", changeBackColor);

  // add color element in DOM
  colorBTN.append(createColor);
});

// function for change background color with id
function changeBackColor(e) {
  let targetID = e.target.id;
  document.body.style.backgroundColor = targetID;
}
