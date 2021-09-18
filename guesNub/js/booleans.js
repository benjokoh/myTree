/* this is a guessing game. */

let correctGuess = false;
const number = 6;// number to guess
const guess = prompt("Guess a number between 1 and 10"); // range number to guess within

/*the +guess has to with uniary conversion of string to integers. for more information, 
check this resource
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Unary_plus_2
*/ 
if (+guess === number){
  correctGuess = true;
}

if (correctGuess === true) {
  console.log("You've guessed the number correctly.");
} else {
  console.log(`Sorry mate, the number was ${number}.`);
}
