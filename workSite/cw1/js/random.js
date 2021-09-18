// Collect input from a user
const Anumber = prompt("Please input in lower number!");
const Bnumber = prompt("Please input bigger number!");

// Convert the input to a number
const lowerNumber = parseInt(Anumber);
const biggerNumber = parseInt(Bnumber);

if(lowerNumber && biggerNumber){ 
  // Use Math.random() and the user's number to generate a random number
//Rdnumber = Math.random(number)+1;
Rdnumber = Math.floor(Math.random()* (biggerNumber - lowerNumber + 1))+ lowerNumber;


// Create a message displaying the random number

console.log(`${Rdnumber} is a random between ${lowerNumber} and ${biggerNumber}`);
}else{
  console.log("You have to input two number not string!");
}