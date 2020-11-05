let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => Math.floor(Math.random() * 10);
 
const compareGuesses = (human, computer, target) => {
     if (human > 9) {
        return alert('Out of range!');
     }
     let humanDiff = Math.abs(target - human);
     let computerDiff = Math.abs(target - computer);
     if (computerDiff > humanDiff) {
         return false;
     } else {
         return true;
     }
 }

const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    } else {
        console.log('Error');
    }
 }

const advanceRound = () => {
     currentRoundNumber++;
 }; 
