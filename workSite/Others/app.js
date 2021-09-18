const students = ["Benny","Mike","Angelo"];

for(let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

students.push("Goniel","Basrak","Joseph","Jacob");


console.log(...students);