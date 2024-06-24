let choices = ["rock", "paper", "scissor"];

// Get rock, paper, scissor randomly
function getComputerChoice() {
    let randint = Math.floor(Math.random() * 3);
    return choices[randint];
};

// Get player choice
function getHumanChoice() {
    console.log("Enter your choice \n(Rock | Paper | Scissor)");
    while (true) {
        let pChoice = prompt().toLowerCase();
        if (choices.includes(pChoice)) {
            return pChoice;
        }
    } 
};

let humanScore = 0;
let computerScore = 0;

// Game logic
function playRound(humanChoice, computerChoice) {
    let result = "";
    if((humanChoice === "rock" && computerChoice === "scissor") || 
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")) {
        result = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    }
    else if (humanChoice === computerChoice) {
        result = "Its a draw!";
    }
    else {
        result = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }
    console.log(result);
};


