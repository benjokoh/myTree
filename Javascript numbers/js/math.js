const secPerMin = 60;
const minsPerHour = 60;
const hourPerDay = 24;
const daysPerweek = 7;
const weekPerYear = 52;

const secondsPerDay = secPerMin * minsPerHour * hourPerDay;
console.log(`There are ${secondsPerDay}seconds in a day.`)

const yearAlive = secondsPerDay * daysPerweek * weekPerYear;
console.log(`I,ve been alive for more than ${yearAlive} seconds!`)