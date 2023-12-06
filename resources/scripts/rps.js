let userMove = '';

let computerMove = '';
let result = '';

function generateComputerMove() {
    const random = Math.random();
    if (random < 1 / 3) {
        computerMove = 'Rock';
    }
    else if (random < 2 / 3) {
        computerMove = 'Paper';
    }
    else {
        computerMove = 'Scissors'
    }
}
function evaluateMoves() {
    if (userMove === computerMove) {
        result = 'Tie';
    }
    else if ((userMove === 'Rock' && computerMove === 'Scissors') ||
        (userMove === 'Paper' && computerMove === 'Rock') ||
        (userMove === 'Scissors' && computerMove === 'Paper')) {
        result = 'Win';
    }
    else {
        result = 'Loose';
    }
}