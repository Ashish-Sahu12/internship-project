# Tic-Tac-Toe Game

![image](https://github.com/user-attachments/assets/aa2f70d4-282e-4955-881c-ecd8ab181a2c)

This is a simple Tic-Tac-Toe game implemented using HTML, CSS, and JavaScript. The game allows two players to take turns marking spaces in a 3×3 grid with "X" and "O". The first player to align three of their marks in a row (vertically, horizontally, or diagonally) wins the game. If all the boxes are filled without a winner, the game ends in a draw.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Code Overview](#code-overview)
- [How to Play](#how-to-play)
- [Resetting the Game](#resetting-the-game)
- [License](#license)

## Features

- Two-player gameplay with alternating turns.
- Detects and displays the winner when three marks align.
- Detects and displays a draw when all boxes are filled and no winner.
- Reset button to start a new game.
- New Game button to clear the board and restart.

--Usage
Simply open the index.html file in your web browser. The game will load, and two players can start playing immediately by clicking on the boxes.

--Code Overview
HTML Structure
The game board is created using a simple 3x3 grid of divs with the class box. The player information and control buttons (Reset and New Game) are also included in the HTML.

--JavaScript Logic
Game Setup: The game is initialized with empty boxes, and the first player starts with "O".
Winner Detection: The game checks all possible winning combinations after each move to see if a player has won.
Draw Detection: If all boxes are filled and no winner is found, the game declares a draw.
Reset Functionality: The Reset and New Game buttons clear the board, re-enable the boxes, and reset the game state.
--CSS Styling
Basic CSS is used to style the game board and buttons, ensuring a clean and responsive layout.

--How to Play
Players take turns clicking on the empty boxes in the 3x3 grid.
Player 1 starts with "O", and Player 2 plays with "X".
The first player to get three of their marks in a row (horizontally, vertically, or diagonally) wins the game.
If all boxes are filled and no player has aligned three marks, the game ends in a draw.
Resetting the Game
Reset Button: Clears the board and allows the current game to restart with the same players.
New Game Button: Clears the board, resets the game state, and starts a new game.
License
This project is licensed under the MIT License. See the LICENSE file for more details.



## Installation

1. Clone the repository or download the zip file.
   ```bash
   git clone https://github.com/ayush-23-30/tic-tac-toe.git

   
### Notes:
- Replace `https://github.com/yourusername/tic-tac-toe.git` with your actual GitHub repository URL.
- You can expand the README by adding screenshots or additional instructions as needed.

