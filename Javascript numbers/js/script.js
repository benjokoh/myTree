const wholesalePrice = 5.45;
const retailPrice = 9.99;
const quantity = 47;

const salesTotal = retailPrice * quantity ;
let profit = salesTotal - wholesalePrice * quantity;
let profitPerUnit = profit/quantity;

console.log(`The cost of total_sale: ${salesTotal}`);
console.log(`And the general profit: ${profit}`);
console.log(`Your profit per Unit ${profitPerUnit}`);