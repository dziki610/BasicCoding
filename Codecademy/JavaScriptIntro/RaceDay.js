// Codecademy: starting code
let raceNumber = Math.floor(Math.random() * 1000);
// early registration
const registerRunner = true;
// runner age 
const ageRunner = 18;
// early bird number allocation
if (registerRunner === true && ageRunner > 18) {
  raceNumber += 1000;
};

// number allocation
if (registerRunner === true && ageRunner > 18) {
  console.log(`Your race starts at 9:30 am. Your Race Number is ${raceNumber}`)
} else if (registerRunner === false && ageRunner > 18) {
  console.log(`Your race starts at 11:00 am. Your Race Number is ${raceNumber}`)
} else if (ageRunner < 18){ 
  console.log(`Your race starts at 12:30 pm. Your Race Number is ${raceNumber}`)
} else {
  console.log(`Please check the registration deck`)
};
