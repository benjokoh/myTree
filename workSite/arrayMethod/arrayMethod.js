const daysInWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];
  
  const d = daysInWeek.join(', ');
  
  const fruit = [
    'apple', 
    'orange', 
    'grapefruit', 
    'pineapple', 
    'strawberry'
  ];
  
  const a = fruit.includes('apple'); //Can assign object to variables
  const b = fruit.indexOf('apple');
  const c = fruit.indexOf('pear');

  const e = fruit.join(', ')

  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.log(e);
