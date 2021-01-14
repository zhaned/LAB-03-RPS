import { generateRandomNumber, didUserWin } from './utils.js';

// import functions and grab DOM elements
const submitButton = document.getElementById("submit-button");
const winsDiv = document.getElementById("wins");
const lossesDiv = document.getElementById("losses");
const totalDiv = document.getElementById("total");
const endDiv = document.getElementById("end");
const userThrowImage = document.getElementById('user-throw');
const compThrowImage = document.getElementById('comp-throw');
const resultsBox = document.getElementById('results-box');
const resetButton = document.getElementById('reset-button');
const resetCountDisplay = document.getElementById('reset-count');

// initialize state
let winsState = 0;
let totalState = 0;
let lossState = 0;
let resetClicked = 0;
// set event listeners to update state and DOM

submitButton.addEventListener('click', () => {
    totalState++;

    const selectedRadioButton = document.querySelector('input[type="radio"]:checked');
    const userGuess = Number(selectedRadioButton.value);

    let srcUserImage = `/assets/${userGuess}.png`;
    userThrowImage.src = srcUserImage;

    const computerChoice = generateRandomNumber();

    let srcCompImage = `/assets/${computerChoice}.png`;
    compThrowImage.src = srcCompImage;

    console.log(userGuess, 'USER\'S CHOICE', computerChoice, "COMPUTER'S CHOICE");

    const whoWins = didUserWin(userGuess, computerChoice);
    
    if(whoWins === "player gets a point"){
            winsState++
    } else if(whoWins === "computer gets a point"){
            lossState++
    }

    displayResults();

    if(totalState === 5 &&  winsState > lossState){
        endDiv.textContent = "Player Wins!";
        document.getElementById('submit-button').disabled = true;
    } else if (totalState === 5 &&  winsState < lossState){
        endDiv.textContent = "Computer Wins!";
        document.getElementById('submit-button').disabled = true;
    } else if (totalState === 5){
        endDiv.textContent = 'Draw!';
        document.getElementById('submit-button').disabled = true;
    }

    resultsBox.style.display = 'block';

});

resetButton.addEventListener('click', () => {
    winsState = 0;
    lossState = 0;
    totalState = 0;
    displayResults();
    ++resetClicked;
    resetCountDisplay.textContent = `Reset: ${resetClicked}`;
    document.getElementById('submit-button').disabled = false;
});

function displayResults() {
    winsDiv.textContent = `Player Points: ${winsState}`;
    lossesDiv.textContent = `Computer Points: ${lossState}`;
    totalDiv.textContent = `Total Tries: ${totalState}`;
}
