//Function expression
const getRandomNumber = function(upper) {
  const randomNumber = Math.floor(Math.random() * upper ) + 1;
  return randomNumber;
}

console.log(getRandomNumber(20));