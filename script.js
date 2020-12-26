function computerPlay() {
    let result = Math.floor(Math.random() * 3);
    let computerSelectionName;
    if (result === 0) {
        computerSelectionName = `rock`;
    }
    else if (result === 1) {
        computerSelectionName = `paper`;
    }
    else {
        computerSelectionName = `scissors`
    }
    console.log(`The computer selected ${computerSelectionName}.`)
    return computerSelectionName;
}

function oneRound(playerSelection, computerSelection) {
    console.log(`You have selected ${playerSelection}.`);
    if (playerSelection != `rock` && playerSelection != `paper` && playerSelection != `scissors`) {
            console.log(`Please, select either rock, paper or scissors.`);
            oneRound(prompt(`Make your selection again`).toLowerCase(), computerPlay());
    } else {
        if (playerSelection == `rock` && computerSelection == `scissors` || playerSelection == `scissors` && computerSelection == `paper` || playerSelection == `paper` && computerSelection == `rock`) {
            console.log(`${playerSelection} beats ${computerSelection}; you win this round!`);
        } else if (playerSelection === computerSelection) {
            console.log(`It's a tie!`);
        } else {
            console.log(`${computerSelection} beats ${playerSelection}; the computer wins this round.`);
        }
    }
}    

function game() {
    for (let i = 0; i < 5; i++) {
        oneRound(prompt(`Make your selection`).toLowerCase(), computerPlay());
    }
}

game();