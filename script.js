game();

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

    if (result == 2) endResult = 'Draw';
    else if(result == 1) endResult = 'You Won! ' + playerSelection + ' beats ' + computerSelection;
    else if(result == 0) endResult = 'You lose! ' + computerSelection + ' beats ' + playerSelection;
    else endResult = 'This input is not allowed!';

    console.log(playerSelection);
    console.log(computerSelection);
    console.log(result);
    return endResult;
}


function game() 
{
    let i = 0;
    let realComputerSelection;
    let realPlayerSelection;
    let winner;

    while(i < 5)
    {
        realComputerSelection = getComputerChoice();
        realPlayerSelection = prompt("Let's play Rock, Paper, Scissors!");
        
        //Make right string format
        realPlayerSelection = realPlayerSelection.charAt(0).toUpperCase() + realPlayerSelection.slice(1).toLowerCase();

        winner = playRound(realPlayerSelection, realComputerSelection);
        if(winner != 'Draw' && winner != 'This input is not allowed!') i++;
        console.log(winner);
    }
}