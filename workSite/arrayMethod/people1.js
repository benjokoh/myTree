const people = [ 'Maria', 'Alyssa', 'Toni', 'Lee', 'Reggie' ];
let personIndex = people.indexOf('Maria');  // 0

if ( personIndex !== -1) { // it's ok because we're checking for -1 only
 console.log(`${people[personIndex]} is in the array at index ${personIndex}.`);
}