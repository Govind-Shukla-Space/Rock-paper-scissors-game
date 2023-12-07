let userMove = '';

let computerMove = '';

let result = '';

function captureUserMove(move) {
    userMove = move;
}

const game = {
    wins: 0,
    looses: 0,
    ties: 0
};
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
        result = 'Ties';
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

function randomGameSummary() {
    const gamesPlayed = game.wins + game.looses + game.ties;
    // console.log(`userMove:${userMove} computerMove ${computerMove} result: ${result}
    // gamePalyed:${gamesPlayed}`);
    document.querySelector('#wins').innerHTML = game.wins;
    document.querySelector('#looses').innerHTML = game.looses;
    document.querySelector('#ties').innerHTML = game.ties;
    document.querySelector('#gamesPlayed').innerHTML = gamesPlayed;
    console.log(game);
}
function updateGameScore() {
    if (result == 'Win') {
        game.wins++;
    }
    else if (result == 'Ties') {
        game.ties++;
    }
    else {
        game.looses++;
    }
}
