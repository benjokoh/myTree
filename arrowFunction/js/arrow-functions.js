// const getRandomNumber = (upper) => {
//   const randomNumber = Math.floor( Math.random() * upper ) + 1;
//   return randomNumber;
// };
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

// test Code commands 
 console.log(getRandomNumberDiff(1,2));
 console.log(getRandomNumberDiff(68,208));
 console.log(`${getRandomNumberDiff(45,67)} is a random number betwween 45 and 67....`);
 console.log(getRandomNumberDiff(6000,9786));
 console.log(getRandomNumberDiff(50));
 // Call the function and pass it different values