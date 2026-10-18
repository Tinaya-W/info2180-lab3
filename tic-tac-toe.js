/*
Name: Tinaya Wildman
INFO2180 Lab 3: Tic-Tac-Toe
*/

document.addEventListener("DOMContentLoaded", function () {
    const board = document.querySelector("#board");
    const status = document.querySelector("#status");
    const squares = board.querySelectorAll("div");
    let currentPlayer = "X";
    const gameState = Array(9).fill("");

    // To Apply the square class to each game square.
    squares.forEach(function (square, index) {
        square.classList.add("square");

    // Places an X or O when a square is clicked.
    square.addEventListener("click", function () {
        if (gameState[index] !== "") {
            return;
        }

        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);
        gameState[index] = currentPlayer;

        currentPlayer = currentPlayer === "X" ? "O" : "X";
    });
});
});