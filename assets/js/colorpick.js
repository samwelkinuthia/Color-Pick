//checking game mode
var numSquares = 6;
//array of colours to be selected.
var colors = [];
//set picked color.
var pickedColor;
//selecting all six colours defined in var colors.
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
//message
var messageDisplay = document.querySelector("#message");
//selected H1
var h1 = document.getElementById("title");
//event listener for reset button
var resetButton = document.querySelector("#reset");
//easy and hard buttons
var modeButtons = document.querySelectorAll(".mode");
//click counter functionality
// var clickBtn = document.getElementById("clicks");

//init function, runs on page load
init();

function init() {
  //modeButtons event listeners
  setUpModeButtons();
  //squares logic
  setUpSquaresLogic();
  //loop for every color, set background as value of i.
  reset();
}
//modeButtons
function setUpModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      //calls the reset functon if easy or hard mode is selected
      reset();
    });
  }
}
//squares Logic
function setUpSquaresLogic() {
  // limit()
  for (var i = 0; i < squares.length; i++) {
    //initial colors
    // squares[i].style.background = colors[i] removed == reset function will do this.
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
        messageDisplay.style.cssText = "color:#00cc00;font-size:16px;font-weight:600;";
      } else {
        this.style.background = "#232323";
        messageDisplay.textContent = "Wrong";
        messageDisplay.style.cssText = "color: red; font-size:17px;font-weight:600;";
      }
    });
  }
}
//squares Logic
// function limit() {
//   for (var i = 0; i < squares.length; i++) {
//     count = 0
//     squares[i].addEventListener("click", function() {
//       count += 1
//       console.log(count)
//     });
//   }
// }

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
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  //reset header background-color
  resetButton.textContent = "New Colors";
  h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function() {
  reset();
})

// colorDisplay.textContent = pickedColor;

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


//=============================================BEFORE REFACTORING=======================================================///
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

$('.instructions').click(function(){
  $('body').chardinJs('start');
});
