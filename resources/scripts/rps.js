let userMove = '';

let computerMove = '';

let result = '';
const game = JSON.parse(localStorage.getItem('game')) || {
    win: 0,
    looses: 0,
    ties: 0
};
let gamehistory = JSON.parse(localStorage.getItem('gameHistory')) || [];
randomGameSummary();
rendergamehistory();
function captureUserMove(move) {
    userMove = move;
}

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
    const gamehistoryitems = { userMove: userMove, computerMove: computerMove, result: result };
    gamehistory.push(gamehistoryitems);
}

function randomGameSummary() {
    const gamePlayed = game.win + game.looses + game.ties;
    // console.log(`userMove:${userMove} computerMove ${computerMove} result: ${result}`);
    document.querySelector('#win').innerHTML = game.win;
    document.querySelector('#looses').innerHTML = game.looses;
    document.querySelector('#ties').innerHTML = game.ties;
    document.querySelector('#gamePlayed').innerHTML = gamePlayed;
    console.log(game);
}
function resetGameScore() {
    game.win = 0;
    game.looses = 0;
    game.ties = 0;
}
function resetGameHistory() {
    gamehistory = []
}
function updateGameScore() {
    if (result === 'Win') {
        game.win++;
    } else if (result === 'Tie') {
        game.ties++;
    }
    else {
        game.looses++;
    }

    localStorage.setItem('game', JSON.stringify(game));
    localStorage.setItem('gameHistory', JSON.stringify(gamehistory));
}
function rendergamehistory() {
    let finalgamehistoryhtml = `<tr>
        <th>#</th>
        <th>User Move</th>
        <th>Computer Move</th>
        <th>Result</th>
      </tr>`;
    for (let i = 0; i < gamehistory.length; i++) {
        finalgamehistoryhtml += `
        <tr>
        <th>${i + 1}</th>
        <th>${gamehistory[i].userMove}</th>
        <th>${gamehistory[i].computerMove}</th>
        <th>${gamehistory[i].result}</th>
      </tr>
        `
    }
    document.querySelector('#gamehistory').innerHTML = finalgamehistoryhtml;
}