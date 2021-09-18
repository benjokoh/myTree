const person = {
    name: 'Reggie',
    role: 'Software developer',
    skills: ['JavaScript', 'HTML', 'CSS'],
    isTeacher: true
  };
  
// Store the keys of the `person` object in `personProps`
const personProps = Object.keys(person); 
//console.log( Object.keys(person).length );  // For checking the length: 4
console.log(`Skills: ${personProps}`);

// Store the `person` object's property values in `personVals`
const personVals = Object.values(person); 
console.log(personVals);
