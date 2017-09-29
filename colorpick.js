//array of colours to be selected.
var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(255, 0, 255)",
  "rgb(255, 255, 10)",
  "rgb(255, 20, 180)",
  "rgb(255, 50, 250)"
]

//selecting all six colours defined in var colors.
var squares = document.querySelectorAll(".square");
//set picked color.
var pickedColor = pickedColor();
var colorDisplay = document.getElementById("colorDisplay");
//message
var messageDisplay = document.querySelector("#message");

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
    } else {
      this.style.background = "#f2f2f2";
      messageDisplay.textContent = "Try Again"
    }
  });
}

//change colors after successful color select

function changeColors(color){
  //loop through all squares, set color to equal selected square
  for(var i = 0; i < squares.length; i++){
    squares[i].style.background = color;
  }
}

//randomize color selection
