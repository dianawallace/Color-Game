
let numSquares = 6;
let colors = [];
let pickedColor;

let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");


init();

function init() {
  setupModeButtons();
  setupSquares();
  reset();
}


function setupModeButtons() {
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
      reset();
    });
  }
}

function setupSquares() {
  for (let i = 0; i < squares.length; i++) {
    //add click listeners to squares
    squares[i].addEventListener("click", function() {
      //grab color of clicked squares
      let clickedColor = this.style.background;
      //compare color to pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.background = clickedColor;
      } else {
        this.style.background = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

