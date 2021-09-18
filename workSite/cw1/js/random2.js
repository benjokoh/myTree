// Convert the input to a number
const lowNumber = parseInt(inputLow);
const highNumber = parseInt(inputHigh);

// Check if lowNumber OR highNumber is not a number
if ( isNaN(lowNumber) || isNaN(highNumber) ) {
  console.log('You need to provide two numbers. Try again.');
} else {
  // Use Math.random() and the user's number to generate a random number
  const randomNumber = Math.floor( Math.random() * (highNumber - lowNumber + 1) ) + lowNumber;

  // Create a message displaying the random number
  console.log(`${randomNumber} is a random number between ${lowNumber} and ${highNumber}.`);
}