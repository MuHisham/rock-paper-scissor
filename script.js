// Get rock, paper, scissor randomly
function getComputerChoice() {
    let choices = ["rock", "paper", "scissor"];
    let randint = Math.floor(Math.random() * 3);
    return choices[randint];
}

console.log(getComputerChoice());