//const guestList = ['Eleven', 'Dustin', 'Lucas', 'Will'];

//guestList.push("Daniel", "Mickiel");
//guestList.unshift("Zakiri", "Mahael");
//guestList.pop();
//guestList.shift();

//console.log(`${guestList}`);

const orderQueue = ['1XT567437','1U7857317','1I9222528'];

let shipping  = orderQueue.shift();

console.log(` The shipping code is: ${shipping}`);
console.log(`The remaining code are: ${orderQueue}`);