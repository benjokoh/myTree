const name = {
    firstName: 'Reggie',
    lastName: 'Williams',
  };
  
  const role = {
    title: 'Software developer',
    skills: ['JavaScript', 'HTML', 'CSS'],
    isTeacher: true
  };
  
  // merge `name` and `role` into a `person` object
  const person = {  
    ...name,
    ...role
  };
  console.log(person);