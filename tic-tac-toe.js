/*
Name: Tinaya Wildman
INFO2180 Lab 3: Tic-Tac-Toe
*/

document.addEventListener("DOMContentLoaded", function () {
    const board = document.querySelector("#board");
    const status = document.querySelector("#status");
    const newGameButton = Array.from(
        document.querySelectorAll("button")
    ).find(function (button) {
        return button.textContent.trim() === "New Game";
    });
    const squares = board.querySelectorAll("div");
    let currentPlayer = "X";
    const gameState = Array(9).fill("");

// Exercise 4: All possible winning combinations.
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const originalStatus = status.textContent;
    let gameOver = false;

    function checkWinner() {
        for (const combination of winningCombinations) {
            const [a, b, c] = combination;

            if (
                gameState[a] !== "" &&
                gameState[a] === gameState[b] &&
                gameState[b] === gameState[c]
            ) {
                return gameState[a];
            }
        }

        return null;
    }

// To Apply the square class to each game square.
    squares.forEach(function (square, index) {
        square.classList.add("square");

// Exercise 5: Reset the game when New Game is clicked.
    newGameButton.addEventListener("click", function () {
        gameState.fill("");
        currentPlayer = "X";
        gameOver = false;

        squares.forEach(function (square) {
            square.textContent = "";
            square.classList.remove("X", "O", "hover");
        });

        status.textContent = originalStatus;
        status.classList.remove("you-won");
    });

// To highlight a square when the mouse enters it.
    square.addEventListener("mouseover", function () {
        square.classList.add("hover");
    });

// To remove the highlight when the mouse leaves the square.
    square.addEventListener("mouseout", function () {
        square.classList.remove("hover");
    });

// Exercise 2 and Exercise 4: Handle moves and check for a winner.
    square.addEventListener("click", function () {
// Exercise 6: Prevent changing an occupied square or making moves after the game has ended.
    if (
        gameOver ||
        square.textContent.trim() !== "" ||
        gameState[index] !== ""
    ) {
        return;
    }

        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);
        gameState[index] = currentPlayer;

        const winner = checkWinner();

        if (winner !== null) {
            status.textContent =
                "Congratulations! " + winner + " is the Winner!";

            status.classList.add("you-won");
            gameOver = true;
            return;
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
    });
});
});