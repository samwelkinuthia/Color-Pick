let numSquares = 6;
let colors = generateColors(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisp = document.getElementById("colorDisp");
let message = document.querySelector("#message");
let topDiv = document.getElementById("top");
let reset = document.getElementById("reset");
let modeBtns = document.querySelectorAll(".mode");

for (let i =0; i < modeBtns.length; i++) {
  modeBtns[i].addEventListener('click', () => {
    modeBtns[0].classList.remove("selected");
    modeBtns[1].classList.remove("selected");
    modeBtns[2].classList.remove("selected");
    modeBtns[i].classList.add("selected");
  })
}
//
// easyBtn.addEventListener('click', () => {
//   easyBtn.classList.add("selected");
//   hardBtn.classList.remove("selected");
//   godBtn.classList.remove("selected");
//   numSquares = 3;
//   colors = generateColors(numSquares);
//   pickedColor = pickColor();
//   colorDisp.textContent = pickedColor;
//   for (let i = 0; i < squares.length; i++) {
//     if (colors[i]) {
//       squares[i].style.background = colors[i];
//     } else {
//       squares[i].style.display = "none";
//     }
//   }
// });
//
// hardBtn.addEventListener('click', () => {
//   hardBtn.classList.add("selected");
//   easyBtn.classList.remove("selected");
//   godBtn.classList.remove("selected");
//   numSquares = 6;
//   colors = generateColors(numSquares);
//   pickedColor = pickColor();
//   colorDisp.textContent = pickedColor;
//   for (let i = 0; i < squares.length; i++) {
//     if (colors[i]) {
//       squares[i].style.background = colors[i];
//       squares[i].style.display = "block";
//     } else {
//       squares[i].style.display = "none";
//     }
//   }
// });
//
// godBtn.addEventListener('click', () => {
//   godBtn.classList.add("selected");
//   hardBtn.classList.remove("selected");
//   easyBtn.classList.remove("selected");
//   numSquares = 9;
//   colors = generateColors(numSquares);
//   pickedColor = pickColor();
//   colorDisp.textContent = pickedColor;
//   for (let i = 0; i < squares.length; i++) {
//       squares[i].style.background = colors[i];
//       squares[i].style.display = "block";
//   }
// });
//


reset.addEventListener('click', () => {
  colors = generateColors(numSquares);
  pickedColor = pickColor();
  colorDisp.textContent = pickedColor;
  message.textContent = "";
  reset.textContent = "New Colors";
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].addEventListener('click', function() {
      let clickedColor = this.style.background;
      if (clickedColor === pickedColor) {
        message.textContent = "Correct";
        changeColors(clickedColor);
        topDiv.style.background = pickedColor;
        reset.textContent = "Play Again?";
      } else {
        this.style.background = "white";
        message.textContent = "Wrong";
      }
    })
  }
  topDiv.style.background = "white";
});

colorDisp.textContent = pickedColor;
let count = 0;
for (let i = 0; i < squares.length; i++) {
  if (colors[i]) {
    squares[i].style.background = colors[i];
  } else {
    squares[i].style.display = "none";
  }
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