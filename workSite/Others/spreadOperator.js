const mathStudents = [
    'Marty',
    'Jennifer',
    'Lorraine',
    'Goldie'
  ];
  
  const scienceStudents = [
    'Emmett', 
    'Clara', 
    'Needles',
    'Strickland'
  ];
  
  const mathStudentsCopy = [...mathStudents];
  const scienceStudentsCopy = [...scienceStudents];
  
  // This affects the copied arrays only
  //  The original arrays remain unchanged
  console.log(mathStudentsCopy.pop());
  console.log(scienceStudentsCopy.push('Marvin'));