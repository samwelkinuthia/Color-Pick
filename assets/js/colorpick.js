let colors = generateColors(9);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisp = document.getElementById("colorDisp");
let message = document.querySelector("#message");
let topDiv = document.getElementById("top");
colorDisp.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];
  squares[i].addEventListener('click', function() {
    let clickedColor = this.style.background;
    if (clickedColor === pickedColor) {
      message.textContent = "Correct";
      changeColors(clickedColor);
      topDiv.style.background = pickedColor;
    } else {
      this.style.background = "white";
      message.textContent = "Wrong";
    }
  })
}

function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
      squares[i].style.background = color;
    }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateColors(number) {
  let arr = [];
  for (let i = 0; i < number; i++) {
    arr.push(randomGen());
  }
  return arr;
}

function randomGen() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}