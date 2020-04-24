let colors = [
  "rgb(240, 0, 0)",
  "rgb(210, 0, 0)",
  "rgb(100, 0, 0)",
  "rgb(123, 0, 0)",
  "rgb(10, 0, 0)",
  "rgb(255, 0, 0)",
  "rgb(68, 0, 0)",
  "rgb(193, 0, 0)",
  "rgb(211, 0, 0)"
];

let squares = document.querySelectorAll(".square");
let pickedColor = colors[4];
let colorDisp = document.getElementById("colorDisp");
let message = document.querySelector("#message");

colorDisp.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];
  squares[i].addEventListener('click', function() {
    let clickedColor = this.style.background;
    if (clickedColor === pickedColor) {
      message.textContent = "Correct";
    } else {
      this.style.background = "white";
      message.textContent = "Wrong";
    }
  })
}