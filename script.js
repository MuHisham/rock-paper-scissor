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

console.log(getHumanChoice());

// let humanScore = 0;
// let computerScore = 0;

// function playRound(humanChoice, computerChoice) {

// }