let numSquares = 6;
let limit = 3;
let clicksLeft = document.getElementById("limit");
let colors = generateColors(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisp = document.getElementById("colorDisp");
let message = document.querySelector("#message");
let topDiv = document.getElementById("top");
let resetButton = document.getElementById("resetButton");
let modeBtns = document.querySelectorAll(".mode");

for (let i =0; i < modeBtns.length; i++) {
  modeBtns[i].addEventListener('click', () => {
    modeBtns[0].classList.remove("selected");
    modeBtns[1].classList.remove("selected");
    modeBtns[2].classList.remove("selected");
    modeBtns[i].classList.add("selected");
    if(modeBtns[i].textContent === "Easy") {
      numSquares = 3;
      limit = 2;
      clicksLeft.textContent = limit;
    } else if (modeBtns[i].textContent === "Hard") {
      numSquares = 6;
      limit = 3;
      clicksLeft.textContent = limit;
    } else if (modeBtns[i].textContent === "God") {
      numSquares = 9;
      limit = 1;
      clicksLeft.textContent = limit;
    }
    reset()
    
  })
}

function reset() {
  colors = generateColors(numSquares);
  pickedColor = pickColor();
  colorDisp.textContent = pickedColor;
  message.textContent = "";
  resetButton.textContent = "New Colors";
  
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  topDiv.style.background = "white";
}

resetButton.addEventListener('click', () => {
  colors = generateColors(numSquares);
  pickedColor = pickColor();
  colorDisp.textContent = pickedColor;
  message.textContent = "";
  resetButton.textContent = "New Colors";
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].addEventListener('click', function() {
      let clickedColor = this.style.background;
      if (clickedColor === pickedColor) {
        message.textContent = "Correct";
        changeColors(clickedColor);
        topDiv.style.background = pickedColor;
        resetButton.textContent = "Play Again?";
      } else {
        this.style.background = "white";
        message.textContent = "Wrong";
      }
    })
  }
  topDiv.style.background = "white";
});

colorDisp.textContent = pickedColor;
clicksLeft.textContent = limit;

let count = 0;
for (let i = 0; i < squares.length; i++) {
  if (colors[i]) {
    squares[i].style.background = colors[i];
  } else {
    squares[i].style.display = "none";
  }
  squares[i].addEventListener('click', function() {
    count++;
    let clickedColor = this.style.background;
    if (clickedColor === pickedColor) {
      message.textContent = "Correct";
      changeColors(clickedColor);
      topDiv.style.background = pickedColor;
      count = 0;
    } else {
      this.style.background = "none";
      this.style.pointerEvents = "none";
      message.textContent = "Wrong";
    }
    console.log(count);
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
