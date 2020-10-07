const getUserChoice = userChoice => {
  userChoice = userChoice.toLowerCase();
  if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') { 
    return userChoice;
  } else {
  console.log('Error!')
}
};

const getComputerChoice = computerChoice => {
  const randomNumber = (Math.floor(Math.random() * 3));
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors'
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'A tie!'
    }  
  if (userChoice = 'rock') {
     if (computerChoice === 'paper') {
       return 'Computer won!'
     } else if (computerChoice === 'scissors') {
       return 'You won!'
     }
    }
  if (userChoice = 'paper') {
     if (computerChoice === 'scissors') {
       return 'Computer won!'
     } else if (computerChoice === 'rock') {
       return 'You won!'
     }
  }
  if (userChoice = 'scissors') {
     if (computerChoice === 'rock') {
       return 'Computer won!'
     } else if (computerChoice === 'paper') {
       return 'You won!'
     }
  }
};


const playGame = () => {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice(); 
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
 console.log(determineWinner(userChoice, computerChoice));
};

playGame();


 

