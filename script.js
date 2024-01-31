let container = document.querySelector('#container');
const results = document.querySelector('#results');
const resetButton = document.querySelector('#resetButton');


//Initialise scores
let playerScore = 0;
let computerScore = 0;
resetButton.addEventListener('click', resetGame);

container.addEventListener('click', game);

function getComputerChoice() {
    let result;

    let computerChoice = Math.floor(Math.random() * 3);
    if(computerChoice == 2) result = 'Rock';
    else if(computerChoice == 1) result = 'Paper';
    else result = 'Scissors';

    return result;
}

function playRound(playerSelection, computerSelection) {
    let result;
    let endResult;

    if(playerSelection === computerSelection) result = 2;
    else if(playerSelection == 'Rock') result = computerSelection == 'Scissors';
    else if(playerSelection == 'Paper') result = computerSelection == 'Rock';
    else if(playerSelection == 'Scissors') result = computerSelection == 'Paper';
    else result = 3;

    if (result == 2) {
        endResult = 'Draw';
    } else if (result == 1) {
        endResult = `You Won! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
    } else if (result == 0) {
        endResult = `You lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
    } else {
        endResult = 'This input is not allowed!';
    }

    return endResult;
}


function resetGame() {
    playerScore = 0;
    computerScore = 0;
    results.textContent = 'Game reset!\nPlayer: 0 | Computer: 0';
    container.addEventListener('click', game);
}


function game(event) 
{
    let i = 0;
    let realComputerSelection;
    let realPlayerSelection;
    let winner;



    realComputerSelection = getComputerChoice();

    let target = event.target;

    switch(target.id) {
        case 'Rock':
            realPlayerSelection = 'Rock';
            break;

        case 'Paper':
            realPlayerSelection = 'Paper';
            break;

        case 'Scissors':
            realPlayerSelection = 'Scissors';
            break;
        }

    winner = playRound(realPlayerSelection, realComputerSelection);        
    results.textContent = `${winner}\nPlayer: ${playerScore} | Computer: ${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {
        results.textContent += `\n${playerScore === 5 ? 'You' : 'Computer'} won the game!`;
        container.removeEventListener('click', game);
    }
}