import { generateRandomNumber, didUserWin } from './utils.js';

// import functions and grab DOM elements
const submitButton = document.getElementById("submit-button");
const computersGuess = document.getElementById("computers-guess");
const wins = document.getElementById("wins");
const losses = document.getElementById("losses");
const total = document.getElementById("total");


// initialize state
let winsState = 0;
let totalState = 0;

// set event listeners to update state and DOM

submitButton.addEventListener('click', () => {


});

//TEST CONSOLES
console.log(generateRandomNumber());
console.log(didUserWin(2,1));