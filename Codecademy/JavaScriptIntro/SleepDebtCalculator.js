const getSleepHours = day => {
  switch(day) {
  case 'monday':
    return 8
    break;
  case 'tuesday':
    return 8
    break;
  case 'wednesday':
    return 8
    break;
  case 'thursday':
    return 8
    break;
  case 'friday':
    return 8
    break;
  case 'saturday':
    return 8
    break;
  case 'sunday':
    return 8
    break;
    default: 
    return 'Error!'
  }
};

const getActualSleepHours = () => 
  [ 'monday'
  , 'tuesday'
  , 'wednesday'
  , 'thursday'
  , 'friday'
  , 'saturday'
  , 'sunday'
  ].map(getSleepHours)  
  .reduce((a, b) => a + b)
  
const getIdealSleepHours = idealHours => idealHours * 7;

const calculateSleepDebt = () => {
const actualSleepHours = getActualSleepHours();
const idealSleepHours = getIdealSleepHours(8);
if (actualSleepHours === idealSleepHours) {
  console.log('Good job! You nailed the ideal sleeping hours');
} else if (actualSleepHours > idealSleepHours) {
  console.log('Try sleeping less');
} else {
  console.log('You`ve slept ' + (idealSleepHours - actualSleepHours) + ' hour(s) less than you needed this week. Sleep more man');
  }
};

calculateSleepDebt();
