let action = ["rock", "paper", "scissors"];
let playerScore = 0;


//computer selects a random array number
function computerPlay() {
    let result = Math.floor(Math.random()*action.length);
    return action[result];
}

//execute 1 round
function playRound(playerSelection, computerSelection) {
    let winMessage = "You win!";
    let loseMessage = "You lose!";

    if (playerSelection==computerSelection){
        return "It's a tie!";
    }

    else if (playerSelection=="rock"){
        if (computerSelection=="scissors"){
            playerScore++;
            return winMessage;
        }
        else if (computerSelection=="paper") {
            return loseMessage;
        } 
    }

    else if (playerSelection=="paper"){
        if (computerSelection=="scissors"){
            return loseMessage;
        }
        else if (computerSelection=="rock") {
            playerScore++;
            return winMessage;
        } 
    }

    else if (playerSelection=="scissors"){
        if (computerSelection=="paper"){
            playerScore++;
            return winMessage;
        }
        else if (computerSelection=="rock") {
            return loseMessage;
        } 
    }   
}

function game(){
    let tries = 5;
    while (tries>0){
        const computerSelection = computerPlay();
        const playerAnswer = prompt("Rock, paper, or scissors?");
        let playerSelection = playerAnswer.toLowerCase();
        
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player score: ${playerScore}`);
        tries--;
    }

    if (playerScore>=3){
        alert("You win overall!")
    }

    else {
        alert("You lose overall!")
    }
}
game();