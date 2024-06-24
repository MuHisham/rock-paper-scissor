const playerButtons = document.querySelectorAll(".p-items");
const playerIcons = document.querySelectorAll(".p-icon");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const computerChoice = document.querySelector(".computer");
let selectedBtn = null;
let selectedIcon = null;
let humanChoice = null;

const cRock = document.querySelector(".c-rock");
const cPaper = document.querySelector(".c-paper");
const cScissor = document.querySelector(".c-scissor");

let humanScore = document.querySelector(".player-score");
let computerScore = document.querySelector(".computer-score");
let humanCount = 0;
let computerCount = 0;

const resetBtnStyle = (btn) => {
    btn.style.borderColor = 'black';
}
const resetBtnStyle2 = (btn) => {
    btn.style.color = 'black';
}

let choices = ["rock", "paper", "scissor"];

// Get rock, paper, scissor randomly and setting the animation
function getComputerChoice() {
    let randint = Math.floor(Math.random() * 3);
    let computerOption =  choices[randint];
    if (computerOption == "paper") {
        cRock.style.order = 3;
        cPaper.style.order = 1;
        cScissor.style.order = 2;   
    } 
    else if (computerOption == "scissor") {
        cRock.style.order = 2;
        cPaper.style.order = 3;
        cScissor.style.order = 1;   
    }
    else {
        cRock.style.order = 1;
        cPaper.style.order = 2;
        cScissor.style.order = 3;   
    }
    computerChoice.style.cssText = "animation: infiniteScroll 500ms linear 4;"
    setTimeout(() => computerChoice.style.cssText = "animation: none;", 2000);
    return computerOption;
};

// Game logic
function playRound(humanChoice, computerChoice) {
    if((humanChoice === "rock" && computerChoice === "scissor") || 
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")) {
        humanCount++;
        setTimeout(function () {
            humanScore.innerText = `${humanCount}`;
            computerScore.innerText = `${computerCount}`;
        }, 2000)
    }
    else if (humanChoice === computerChoice) {

    }
    else {
        computerCount++;
        setTimeout(function () {
            humanScore.innerText = `${humanCount}`;
            computerScore.innerText = `${computerCount}`;
        }, 2000)
    }
};

// Displaying the computer choice container height
document.addEventListener('DOMContentLoaded', () => {
    const innerContainer = document.querySelector('.computer');
    const innerHeight = innerContainer.offsetHeight.toFixed(2);
    console.log(innerHeight);
    const outerContainer = document.querySelector('.outer-comp');
    outerContainer.style.height = `calc((${innerHeight}px - 45px) / 3)`
});

// Ui changes when a button is clicked
playerButtons.forEach(btn => btn.addEventListener("click", () => {
    if (selectedBtn && selectedBtn !== btn) {
        resetBtnStyle(selectedBtn);
    }
    btn.style.borderColor = '#D80032';
    selectedBtn = btn;
}));

playerIcons.forEach((icon, index) => icon.addEventListener("click", () => {
    if (selectedIcon && selectedIcon !== icon) {
        resetBtnStyle2(selectedIcon);
    }
    icon.style.color = '#D80032';
    selectedIcon = icon;
    humanChoice = choices[index];
    let compChoice = getComputerChoice();
    playRound(humanChoice, compChoice);
    if (humanCount === 5) {
        alert("You Won!");
    }
    else if (computerCount === 5) {
        alert("You Lost!");
    }
}));

