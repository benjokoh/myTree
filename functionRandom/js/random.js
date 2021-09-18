/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */
function getRandomNumberDiff(lower, upper = 100){
  if(isNaN(lower)||isNaN(upper)){
    throw Error("Both values must be a number....");
  }
   return Math.floor(Math.random() * (upper  - lower + 1)) + lower;
  //return randomNumer;
} 

console.log(`${getRandomNumberDiff(60,200)} is a random number 60 and 200.`);
console.log(getRandomNumberDiff(1,8));
console.log(getRandomNumberDiff(50,55));
console.log(getRandomNumberDiff(70));
console.log(getRandomNumberDiff("seven", 30));

// Call the function and pass it different values


