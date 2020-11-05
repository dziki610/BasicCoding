// Kelvin scale 
let kelvin = 293;
// Celsius scale
let celsius = kelvin - 273;
// Fahrenheit scale
let fahrenheit = (celsius * (9/5) + 32);
// Fahrenheit - rounding down 
fahrenheit = Math.floor(fahrenheit);
// Newton scale
let newton = (celsius * (33/100));
// Newton - rounding down 
newton = Math.floor(newton);

// printing all the values
/* console.log(`The temperature is ${kelvin} degrees Kelvin.`)
console.log(`The temperature is ${celsius} degrees Celsius.`)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
console.log(`The temperature is ${newton} degrees Newton.`) */

// single line 
console.log(`The temperature is ${celsius} degrees Celsius. It is ${fahrenheit} degrees Fahrenheit, ${newton} degrees Newton and ${kelvin} degrees Kelvin`)
