let choices = ["rock", "paper", "scissor"];

// Get rock, paper, scissor randomly
function getComputerChoice() {
    let randint = Math.floor(Math.random() * 3);
    return choices[randint];
}

// Get player choice
function getHumanChoice() {
    console.log("Enter your choice (only the number)\n 1. Rock\n 2. Paper\n 3. Scissor");
    let pChoice = prompt();
    console.log(choices[pChoice-1]);
}

getHumanChoice();