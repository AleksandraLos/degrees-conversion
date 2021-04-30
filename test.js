const kelvin = 293;
const celcius = kelvin - 273;
console.log('The temperature is ' + celcius + ' degrees Celcius');

let fahrenheit = celcius * (9 / 5) + 32;
fahrenheit = Math.floor(fahrenheit);
console.log('The temperature is ' + fahrenheit + ' degrees Fahrenheit.');

let newton = celcius * (33 / 100);
newton = Math.floor(newton);
console.log(newton);