/**
 * This is code explain the difference between the 0 and -1 concept 
 */
const people = [ 'Maria', 'Alyssa', 'Toni', 'Lee', 'Reggie' ];
let personIndex = people.indexOf('Benson');  /* 0 is Maria so the code will not run,
Where as Alyssa and the other will. */

//let personIndex = people.indexOf('Guil'); // -1


if ( personIndex ) {
 console.log(`${people[personIndex]} is in the array at index ${personIndex}.`);
}