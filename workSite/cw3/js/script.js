/**
 *  I failed this assignment.....
 */
// let html = '';
// let red;
// let green;
// let blue;
// let randomRGB;



// for( let i = 0; i <10; i++ ) {

//    red = Math.floor(Math.random() * 256);
//    green = Math.floor(Math.random() * 256);
//    blue = Math.floor(Math.random() * 256);
//    randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
//    html += `<div style="background-color: ${randomRGB}">${i}</div>`;
// }

// document.querySelector('main').innerHTML = html;
/**
 * 
 */
 let html = '';
 const randomValue = () => Math.floor(Math.random() * 256);
 
 function randomRGB(value) {
   const color = `rgb( ${value()}, ${value()}, ${value()} )`;
   return color;
 }
 
 //for ( let i = 1; i <= 10; i++ ) {
   //html += `<div style="background-color: ${randomRGB(randomValue)}">${i}</div>`;
 //}
 let i = 1;
 do{
   html += `<div style="background-color: ${randomRGB(randomValue)}">${i}</div>`;
   i++;
 }while( i <= 101)
 
 document.querySelector('main').innerHTML = html;
// You must learn to focus..................................................
// red = Math.floor(Math.random() * 256);
// green = Math.floor(Math.random() * 256);
// blue = Math.floor(Math.random() * 256);
// randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
// html += `<div style="background-color: ${randomRGB}">1</div>`;

// red = Math.floor(Math.random() * 256);
// green = Math.floor(Math.random() * 256);
// blue = Math.floor(Math.random() * 256);
// randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
// html += `<div style="background-color: ${randomRGB}">2</div>`;

// red = Math.floor(Math.random() * 256);
// green = Math.floor(Math.random() * 256);
// blue = Math.floor(Math.random() * 256);
// randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
// html += `<div style="background-color: ${randomRGB}">3</div>`;

// red = Math.floor(Math.random() * 256);
// green = Math.floor(Math.random() * 256);
// blue = Math.floor(Math.random() * 256);
// randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
// html += `<div style="background-color: ${randomRGB}">4</div>`;

// red = Math.floor(Math.random() * 256);
// green = Math.floor(Math.random() * 256);
// blue = Math.floor(Math.random() * 256);
// randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
// html += `<div style="background-color: ${randomRGB}">5</div>`;

// red = Math.floor(Math.random() * 256);
// green = Math.floor(Math.random() * 256);
// blue = Math.floor(Math.random() * 256);
// randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
// html += `<div style="background-color: ${randomRGB}">6</div>`;

// red = Math.floor(Math.random() * 256);
// green = Math.floor(Math.random() * 256);
// blue = Math.floor(Math.random() * 256);
// randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
// html += `<div style="background-color: ${randomRGB}">7</div>`;

// red = Math.floor(Math.random() * 256);
// green = Math.floor(Math.random() * 256);
// blue = Math.floor(Math.random() * 256);
// randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
// html += `<div style="background-color: ${randomRGB}">8</div>`;

// red = Math.floor(Math.random() * 256);
// green = Math.floor(Math.random() * 256);
// blue = Math.floor(Math.random() * 256);
// randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
// html += `<div style="background-color: ${randomRGB}">9</div>`;

// red = Math.floor(Math.random() * 256);
// green = Math.floor(Math.random() * 256);
// blue = Math.floor(Math.random() * 256);
// randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
// html += `<div style="background-color: ${randomRGB}">10</div>`;

// document.querySelector('main').innerHTML = html;