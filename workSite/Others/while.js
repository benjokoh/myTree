/**
 * 
 * @param {BigInteger} upper 
 * @returns 
 */
function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}
/**
 * 
 */
let counter = 0;
while ( counter < 10 ) {
  console.log( `The random number is ${getRandomNumber(15)}` );
 // console.log(getRandomNumber(25));
  //++ counter ;
  counter ++;
}
