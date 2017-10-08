//checking game mode
var numSquares = 6;



//array of colours to be selected.
var colors = generateRandomColors(numSquares);

//selecting all six colours defined in var colors.
var squares = document.querySelectorAll(".square");
//set picked color.
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
//message
var messageDisplay = document.querySelector("#message");
//selected H1
var h1 = document.getElementById("title");
//event listener for reset button
var resetButton = document.querySelector("#reset");
//easy and hard buttons
var modeButtons = document.querySelectorAll(".mode");

for (var i = 0; i < modeButtons.length; i++) {
  modeButtons[i].addEventListener("click", function() {
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
    reset();
  });
}
//contains repetitive code
function reset() {
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a random color
  pickedColor = pickColor();
  //change color display to match picked color
  colorDisplay.textContent = pickedColor;
  //change textContent to nil afer previous result
  messageDisplay.textContent = "";
  //change square colors
  for (var i = 0; i < squares.length; i++) {
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else{
      squares[i].style.display = "none";
    }
  }
  //reset header background-color
  resetButton.textContent = "New Colors";
  h1.style.background = "steelblue";
}

//easy button behaviour
// easyBtn.addEventListener("click", function() {
//   hardBtn.classList.remove("selected");
//   easyBtn.classList.add("selected");
//   //generate 3 random colors
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   //pick color
//   pickedColor = pickColor();
//   //set title background equal to picked color
//   colorDisplay.textContent = pickedColor;
//   //set new colors for 3 squares and hide the other three
//   for (var i = 0; i < squares.length; i++) {
//     if (colors[i]) {
//       squares[i].style.background = colors[i]
//     } else {
//       squares[i].style.display = "none";
//     }
//   }
//   h1.style.background = "steelblue";
// });
//
//
// hardBtn.addEventListener("click", function() {
//   hardBtn.classList.add("selected");
//   easyBtn.classList.remove("selected");
//   //generate 6 random colors
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   //pick color
//   pickedColor = pickColor();
//   //set title background equal to picked color
//   colorDisplay.textContent = pickedColor;
//   //set new colors for 3 squares and hide the other three
//   for (var i = 0; i < squares.length; i++) {
//     squares[i].style.background = colors[i]
//     squares[i].style.display = "block";
//   }
//   h1.style.background = "steelblue";
// });
//


resetButton.addEventListener("click", function() {
  reset();
})

colorDisplay.textContent = pickedColor;

//loop for every color, set background as value of i.
for (var i = 0; i < squares.length; i++) {
  //initial colors
  squares[i].style.background = colors[i]
  // //click listeners for click event
  squares[i].addEventListener("click", function() {
    //grab the color of the clicked square
    var clickedColor = this.style.background;
    //compare to pickedColor
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!"
      changeColors(clickedColor);
      h1.style.background = clickedColor;
      resetButton.textContent = "Play Again?";
    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again"
    }
  });
}

//change colors after successful color select

function changeColors(color) {
  //loop through all squares, set color to equal selected square
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}

//randomize color selection
function pickColor() {
  var random = Math.floor(Math.random() * colors.length)
  return colors[random];
}
//random color generator.
function generateRandomColors(num) {
  //empty array to hold the colors.
  var arr = []
  //add colors to the array.
  //repeat num times.
  for (var i = 0; i < num; i++) {
    //push colors to array
    arr.push(randomColor());
  }
  //return the array
  return arr;
}

//the random color generator
function randomColor() {
  //pick red
  var r = Math.floor(Math.random() * 256);
  //pick green
  var g = Math.floor(Math.random() * 256);
  //pick blue
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";

}
