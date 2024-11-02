let colorBTN = document.querySelector("#color-BTN");

let colors = ["red", "blue", "green", "black"];

colors.forEach((element) => {
  let createColor = document.createElement("div");
  createColor.id = element;
  createColor.style.backgroundColor = element;

  createColor.addEventListener("click", changeBackColor);

  colorBTN.append(createColor);
});

function changeBackColor(e) {
  let targetID = e.target.id;
  document.body.style.backgroundColor = targetID;
}
