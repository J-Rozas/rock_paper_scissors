function computerPlay() {
    let result = Math.floor(Math.random() * 3);
    let computerSelectionName;
    if (result === 0) {
        computerSelectionName = "rock";
    }
    else if (result === 1) {
        computerSelectionName = "paper";
    }
    else {
        computerSelectionName = "scissors"
    }
    console.log(`The computer selected ${computerSelectionName}.`)
    return result;
}

function oneRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock") {
        playerSelection = 0;
    }
    else if (playerSelection.toLowerCase() === "paper") {
        playerSelection = 1;
    }
    else if (playerSelection.toLowerCase() === "scissors") {
        playerSelection = 2;
    }
    else {
        return "Try again";
    }

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    else if (playerSelection === 2 && computerSelection === 1 || playerSelection  === 1 && computerSelection === 0 || playerSelection === 0 && computerSelection === 2) {
        return "You win!"
    }
    else {
        return "You lose :-("
    }
}    

function game() {
    for (let i=0; i<5; i++) {
        console.log(oneRound(prompt("Make your selection"), computerPlay()));
    }
}

game();