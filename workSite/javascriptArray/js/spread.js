const middle = ['lettuce', 'cheese', 'patty'];
const burger = ['top bun',...middle, 'bottom bun'];
//console.log(burger);

//Something else...
const brass = ["trumpet", "trombone", "french horn","bartone", "tuba"];
const woodwind =["flute","oboe","charinet","saxiphone","bassoon"];
// combining array using spread
const instruments = [...brass,...woodwind];
brass.push("flugelhorn");

//console.log(instruments);

//Max number....
const number = [10,20,30,40,50, -500];

//Always remember to use a ...(Spread) or else you will get a NaN
console.log(Math.min(...number)); 