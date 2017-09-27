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

//loop for every color, set background as value of i.
for(var i = 0; i < squares.length; i++){
  squares[i].style.background = colors[i]
}
