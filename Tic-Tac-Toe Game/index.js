let boxes = document.body.querySelectorAll(".box");
let resetBtn = document.body.querySelector("#reset");
let newGameBtn = document.body.querySelector("#newGame")
let showWinner = document.body.querySelector(".winner")

let turn0 = true; // playerX and playerY
let gameActive = true; // Track if the game is active

const winnerPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    if (!gameActive) return; // Prevent moves if the game is over

    if (turn0) {
      box.innerHTML = "O";
      turn0 = false;
    } else {
      box.innerHTML = "X";
      turn0 = true;
    }

    box.disabled = true;

    checkWinner();
  });
});

const disableButtons = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
}

const enableButtons = () => {
  for (let box of boxes) {
    box.disabled = false;
  }
}

const checkWinner = () => {
  for (let pattern of winnerPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        WhoWinner(`${pos1Val} Wins!`);
        disableButtons();
        gameActive = false; // End the game
        return;
      }
    }
  }

  // Check for a draw
  const allBoxesFilled = [...boxes].every(box => box.innerText !== "");
  if (allBoxesFilled) {
    WhoWinner("It's a Draw!");
    gameActive = false; // End the game
  }
};

function WhoWinner(winner) {
  showWinner.innerText = winner;
}

function resetGame() {
  turn0 = true;
  gameActive = true; // Reactivate the game
  enableButtons();
  showWinner.innerHTML = ""; 

  boxes.forEach((box) => {
    box.innerHTML = ""; // Clear the content of each box
  });
}

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
