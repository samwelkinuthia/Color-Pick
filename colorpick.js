//array of colours to be selected.
var colors = generateRandomColors(6);

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

resetButton.addEventListener("click", function(){
  //generate all new colors
  colors = generateRandomColors(6);
  //pick a random color
  pickedColor = pickColor();
  //change color display to match picked color
  colorDisplay.textContent = pickedColor;
  //change square colors
  for(var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
  }
  //reset header background-color
  h1.style.background = "#f2f2f2";
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
function pickColor(){
  var random = Math.floor(Math.random() * colors.length)
  return colors[random];
}
//random color generator.
function generateRandomColors(num){
  //empty array to hold the colors.
  var arr = []
  //add colors to the array.
  //repeat num times.
  for(var i = 0; i < num; i++){
    //push colors to array
    arr.push(randomColor());
  }
  //return the array
  return arr;
}

//the random color generator
function randomColor(){
  //pick red
  var r = Math.floor(Math.random() * 256);
  //pick green
  var g = Math.floor(Math.random() * 256);
  //pick blue
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";

}
