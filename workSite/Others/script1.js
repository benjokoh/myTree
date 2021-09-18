let message = "Welcome!";

function setMessage() {
  message = "Goodbye!";
}

setMessage();
console.log(message);
console.log(`Hey, ${message}`);


const Name = "Trish";
function setName() {
  const Name = "Sarah";
  return Name;
}
setName();
console.log(setName());
console.log(`Hello, nice to meet you`,setName(),`and ${Name}`);


function sayHello(greeting = "Goodmorning", name = "Student"){
  return`${greeting}, ${name}`;
}
//Arrow function at its best.
let sayHelloToo = (name = "Teacher") => `Goodmorning, ${name}`;