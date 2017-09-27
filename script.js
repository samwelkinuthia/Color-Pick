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
var pickedColor = colors[3];

var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

//loop for every color, set background as value of i.
for(var i = 0; i < squares.length; i++){
  //initial colors
  squares[i].style.background = colors[i]

  //click listeners for click event
  squares[i].addEventListener("click", function(){
    alert("clicked a square!")
  });
}
