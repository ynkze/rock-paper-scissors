
let action = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;



//computer selects a random array number
function computerPlay() {
    let result = Math.floor(Math.random()*action.length);
    return action[result];
}

//execute 1 round
function playRound(playerSelection, computerSelection) {
    let winMessage = `You win! You choose ${playerSelection} and computer choose ${computerSelection}`;
    let loseMessage = `You lose! You choose ${playerSelection} and computer choose ${computerSelection}`;

    if (playerSelection==computerSelection){
        return `It's a tie with both ${playerSelection}!`;
    }

    else if (playerSelection=="rock"){
        if (computerSelection=="scissors"){
            playerScore++;
            return winMessage;
        }
        else if (computerSelection=="paper") {
            computerScore++;
            return loseMessage;
        } 
    }

    else if (playerSelection=="paper"){
        if (computerSelection=="scissors"){
            computerScore++;
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
            computerScore++;
            return loseMessage;
        } 
    }   
}
//defining parameters
let playerSelection = " ";
const displayresult = document.querySelector('#result_display');
const player_score = document.querySelector('#player_score');
const computer_score = document.querySelector('#computer_score');

//display the result and reset upon reaching 5
function displayFunc () {
    if (playerScore==5){
        playerScore = 0;
        computerScore = 0;
        alert("You won with 5 points!");
        displayresult.textContent="Well done!";
    }

    if (computerScore==5){
        playerScore = 0;
        computerScore = 0;
        alert("The computer won with 5 points!")
        displayresult.textContent="It's ok...try again next time?";
    }

}

// player click on button and it will return a value for player selection
const buttons = document.querySelectorAll('button');

buttons.forEach((button)=> {
    button.addEventListener('click', () => {
        //take in player and computer input
        playerSelection=button.value;
        const computerSelection = computerPlay();
        displayresult.textContent = playRound(playerSelection, computerSelection);
        
        // display running score
        player_score.textContent = `Player: ${playerScore}`;
        computer_score.textContent = `Computer: ${computerScore}`;
        displayFunc();
    });
});


