
// Function expression ----https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Operators/function
const square = function(length) {
    return length * length;
    };




console.log(square(12));



function getArea(length, breath){

    let area = length * breath;
    return area; //works fine.
    //return `${area}`;
}


console.log(getArea(15.689, 6.78));

console.log(getArea(15.6, 6.78)/square(12));// Don't forget to call a the function getArea


const square = x => x * x;
const multiply = (x, y) => x * y;
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;