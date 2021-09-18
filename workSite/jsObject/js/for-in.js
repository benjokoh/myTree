// const person = {
//   name: 'Edward',
//   nickname: 'Duke',
//   city: 'New York',
//   age: 37,
//   isStudent: true,
//   skills: ['JavaScript', 'HTML', 'CSS']
// };

const person = {
  name: "Benson",
  nickname: "Benzino",
  city: "London",
  age: 34,
  isStudent: true,
  skill: ["Javascript", "HTML","CSS", "Java","Python"]
};


for(let prop in person) {
  console.log(`${prop} ${person[prop]}`); // Properties are defined.

  //console.log(`${prop} ${person.prop}`); // Properties undefined.
}