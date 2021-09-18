function getRandomNumber(upper){
  const randomNumber = Math.floor( Math.random() * upper ) + 1;
   return randomNumber;
}

//console.log(getRandomNumber());
//alert(getRandomNumber());
//const dieRoll = getRandomNumber();

console.log(getRandomNumber(8));
console.log(getRandomNumber(1000));
console.log(getRandomNumber(2545));
console.log(getRandomNumber(59));
console.log(getRandomNumber(50));