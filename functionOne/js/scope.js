//Global scope
let person = "Benson"

function greeting() {
  //Function scope
  let person = 'Meg';
  alert(`Hi, ${person}!`);
}
greeting();
alert(`Hi, ${person}`);
greeting();
greeting();