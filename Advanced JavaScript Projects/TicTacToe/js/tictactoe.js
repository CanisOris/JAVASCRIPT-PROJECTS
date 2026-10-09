// ===== Arrow-function example =====
const myFunction = () => "This is my function";

// ===== Game state =====
// Track whose turn it is, occupied squares, and pending timers.
// Each move is stored as a square number plus its player, such as '0X'.
// X is the human player; O is the computer.
let activePlayer = 'X';
let selectedSquares = [];
let gameOver = false;
let computerThinking = false;
let computerTimer;
let resetTimer;
let lineAnimation;

// ===== Page elements =====
// drawing canvas, and status message.
const board = document.querySelector('.center-container table');
const canvas = document.getElementById('win-lines');
const gameStatus = document.getElementById('game-status');

// ===== Place a piece and change turns =====
// Reject unavailable squares or moves made while the game is locked
// Return true only when a piece was successfully placed
function placeXOrO(squareNumber, isComputerMove = false) {
    squareNumber = String(squareNumber);

    if (gameOver || (computerThinking && !isComputerMove) ||
        (activePlayer === 'O' && !isComputerMove) ||
        !/^[0-8]$/.test(squareNumber) ||
        selectedSquares.some(element => element[0] === squareNumber)) {
        return false;
    }

    const square = document.getElementById(squareNumber);
    square.style.backgroundImage = activePlayer === 'X'
        ? 'url("./images/xactly.png")'
        : 'url("./images/oboy.png")';

    selectedSquares.push(squareNumber + activePlayer);
    audio('./media/place.mp3');
    checkWinConditions();

    // Stop the game when finished.
    if (gameOver) {
        return true;
    }

    // Switch players and schedule the computer move if it is now O's turn.
    activePlayer = activePlayer === 'X' ? 'O' : 'X';
    if (activePlayer === 'O') {
        computerThinking = true;
        disableClick();
        gameStatus.textContent = 'Computer is thinking...';
        computerTimer = setTimeout(computersTurn, 1000);
    } else {
        enableClick();
        gameStatus.textContent = 'Your turn (X).';
    }

    return true;
}

// ===== Computer turn =====
// Pick one random empty square and place O exactly once
function computersTurn() {
    clearTimeout(computerTimer);
    computerTimer = undefined;
    if (gameOver || activePlayer !== 'O') {
        return;
    }

    // Only empty squares list
    const emptySquares = [];
    for (let index = 0; index < 9; index++) {
        const squareNumber = String(index);
        if (!selectedSquares.some(element => element[0] === squareNumber)) {
            emptySquares.push(squareNumber);
        }
    }

    if (emptySquares.length === 0) {
        finishGame(null);
        return;
    }

    const pickASquare = emptySquares[Math.floor(Math.random() * emptySquares.length)];
    computerThinking = false;
    placeXOrO(pickASquare, true);
}

// ===== Win and tie detection =====
// Check every row, column, and diagonal for three matching pieces
// Draw the winning line; declare a tie only if no winner and all moves done
function checkWinConditions() {

    // X 0, 1, 2 condition.
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    // X 3, 4, 5 condition.
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    // X 6, 7, 8 condition.
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    // X 0, 3, 6 condition.
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    // X 1, 4, 7 condition.
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    // X 2, 5, 8 condition.
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    // X 6, 4, 2 condition.
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    // X 0, 4, 8 condition.
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    // O 0, 1, 2 condition.
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    // O 3, 4, 5 condition.
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    // O 6, 7, 8 condition.
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    // O 0, 3, 6 condition.
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    // O 1, 4, 7 condition.
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    // O 2, 5, 8 condition.
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    // O 6, 4, 2 condition.
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    // O 0, 4, 8 condition.
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    //This condition checks for a tie. If none of the above conditions are met and
    //9 squares are selected the code executes.
    else if (selectedSquares.length >= 9) {

        finishGame(null);
    }
}

// ===== Winning-combination helper =====
// Look for three specific square/player entries in selectedSquares
function arrayIncludes(squareA, squareB, squareC) {

    //These 3 variables will be used to check for 3 in a row
    const a = selectedSquares.includes(squareA);
    const b = selectedSquares.includes(squareB);
    const c = selectedSquares.includes(squareC);
    //If the 3 variables we pass are all included in our array then
    //true is returned and our else if condition executes the drawWinLine() function.
    if (a === true && b === true && c === true) { return true; }
}


// ===== Game sounds =====
// Play the supplied sound file and report playback errors in the console
function audio(soundFile) {
    const sound = new Audio(soundFile);
    sound.play().catch(error => {
        console.warn('Unable to play game sound:', error);
    });
}

// ===== Board click controls =====
// Block clicks during the computer turn or after a win or tie
// Re-enable them when the human can move again
// This is interesting I can see how it could be used for other things
function disableClick() {
    board.style.pointerEvents = 'none';
}

function enableClick() {
    board.style.pointerEvents = 'auto';
}

// ===== Winning-line animation =====
// End the game, then draw a green line over the winning squares
function drawWinLine(startX, startY, endX, endY) {
    const context = canvas.getContext('2d');
    let startTime;
    finishGame(activePlayer);

    function animateLineDrawing(timestamp) {
        if (startTime === undefined) {
            startTime = timestamp;
        }

        // Grow the line to its endpoint over 600 milliseconds.
        const progress = Math.min((timestamp - startTime) / 600, 1);
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.lineWidth = 10;
        context.lineCap = 'round';
        context.strokeStyle = 'rgba(70, 255, 33, .8)';
        context.moveTo(startX, startY);
        context.lineTo(
            startX + (endX - startX) * progress,
            startY + (endY - startY) * progress
        );
        context.stroke();

        if (progress < 1) {
            lineAnimation = requestAnimationFrame(animateLineDrawing);
        } else {
            lineAnimation = undefined;
        }
    }

    lineAnimation = requestAnimationFrame(animateLineDrawing);
}

// ===== Finish the round =====
// winner is 'X' or 'O' for a win, or null for a tie.

function finishGame(winner) {
    if (gameOver) {
        return;
    }

    gameOver = true;
    computerThinking = false;
    clearTimeout(computerTimer);
    computerTimer = undefined;
    // stop 
    disableClick();

    if (winner) {
        gameStatus.textContent = winner === 'X'
            ? 'You win! Starting a new game...'
            : 'Computer wins! Starting a new game...';
        audio('./media/winGame.mp3');
    } else {
        gameStatus.textContent = "It's a tie! Starting a new game...";
        audio('./media/tie.mp3');
    }
// reset
    resetTimer = setTimeout(resetGame, 2000);
}

// ===== Reset for a new round =====
// reset values to new game
function resetGame() {
    clearTimeout(computerTimer);
    clearTimeout(resetTimer);
    if (lineAnimation !== undefined) {
        cancelAnimationFrame(lineAnimation);
    }
    computerTimer = undefined;
    resetTimer = undefined;
    lineAnimation = undefined;
    selectedSquares = [];
    activePlayer = 'X';
    gameOver = false;
    computerThinking = false;

    for (let index = 0; index < 9; index++) {
        document.getElementById(String(index)).style.backgroundImage = '';
    }

    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
    enableClick();
    gameStatus.textContent = 'Your turn (X).';
}
