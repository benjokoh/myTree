function sayHello(greeting = "Goodmorning", name = "Student"){
  return`${greeting}, ${name}`;
}
let sayHelloToo = (name = "Teacher") => `Goodmorning, ${name}`;