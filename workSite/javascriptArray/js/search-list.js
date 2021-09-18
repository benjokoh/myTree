const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
const search = prompt('Search for a product.');
let message;

if(!search){
  message = `<strong>In stock:</strong> ${inStock.join(", ")}`
  
}else if(inStock.includes(search.toLowerCase())){ // includes: Is to check if item is on the list.
  message =`Yes, we have the <strong>${search}</strong>.Its #${inStock.indexOf(search.toLowerCase())+1}on the list.`; // The connection between inStock and seach objects.
  
}else{
  message =`Sorry! We are currently out of <strong>${search}</strong>`;
} //Error message....

document.querySelector("main").innerHTML = `<p>${message}</p>`;