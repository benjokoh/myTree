/**
 * 
 */
const person = {
    name: "Benson",
    city: "London",
    age: 34,
    isStudent: true,
    skill: ["Javascript", "HTML","CSS", "Java","Python"]
};

person.nickname = "Benzino";

const message = `<h2>Hello, My name is ${person.name}, and I currenty live in ${person.city} city. 
<strong>I am ${person.age + 1} years old.</strong>
Most people also know as ${person.nickname}.</h2> 
<h2>I've got ${person.skill.length} skills: ${person.skill.join(", ")}.</h2>`;

console.log(message); //To check for errors 
//console.log(person);


let html = message;
document.querySelector('main').innerHTML = html;