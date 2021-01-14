import { generateRandomNumber, didUserWin } from './utils.js';

// import functions and grab DOM elements
const submitButton = document.getElementById("submit-button");
const winsDiv = document.getElementById("wins");
const lossesDiv = document.getElementById("losses");
const totalDiv = document.getElementById("total");
const endDiv = document.getElementById("end");



// initialize state
let winsState = 0;
let totalState = 0;
let lossState = 0

// set event listeners to update state and DOM

submitButton.addEventListener('click', () => {
    totalState++;
    console.log(totalState, "GAMES PLAYED SO FAR");

    const selectedRadioButton = document.querySelector('input[type="radio"]:checked');
    const userGuess = Number(selectedRadioButton.value);
    console.log(userGuess, "PLAYERS CHOICE");

    const computerChoice = generateRandomNumber();
    console.log(computerChoice, "COMPUTERS CHOICE");

    const whoWins = didUserWin(userGuess, computerChoice);
    console.log(whoWins, "RESULTSSSS");
    
    if(whoWins === "player gets a point"){
            winsState++
    } else if(whoWins === "computer gets a point"){
            lossState++
    }
    console.log(winsState, "PLAYER POINTSSS");
    console.log(lossState, "COMPUTER POINTSSS");
    console.log(totalState, "=====NEXT GAME=======");

    displayResults();

    if(totalState === 5 &&  winsState > lossState){
        endDiv.textContent = "Player Wins!";
        document.getElementById('submit-button').disabled = true;
    } else if (totalState === 5 &&  winsState < lossState){
        endDiv.textContent = "Computer Wins!";
        document.getElementById('submit-button').disabled = true;
    }
    


});



function displayResults() {
    winsDiv.textContent = `Player Points: ${winsState}`;
    lossesDiv.textContent = `Computer Points: ${lossState}`;
    totalDiv.textContent = `Total Tries: ${totalState}`;
}
