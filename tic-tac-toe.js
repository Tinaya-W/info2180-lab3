/*
Name: Tinaya Wildman
INFO2180 Lab 3: Tic-Tac-Toe
*/

document.addEventListener("DOMContentLoaded", function () {
    const board = document.querySelector("#board");
    const status = document.querySelector("#status");
    const squares = board.querySelectorAll("div");

    // To Apply the square class to each game square.
    squares.forEach(function (square) {
        square.classList.add("square");
    });
});