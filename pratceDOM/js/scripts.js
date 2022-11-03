// 1: Select the element with the ID 'about'.  
//    Store the element in the variable `about`.
const about = document.querySelector("#about");
//const about = document.getElementById("about");
about.style.border = "5px solid firebrick";

// 2: Select all the <h2> elements in the document.
//    Set the color of the <h2> elements to a different color.
const h2 = document.querySelectorAll("h2");
//const h2 = doctment.getElementsByTagName("h2");
for (let i = 0; i < h2.length; ++i){
    h2[i].style.color = "#CA9703";// Chinese Gold
}

// 3: Select all elements with the class '.card'. 
//    Set their background color to the color of your choice.
const card = document.getElementsByClassName("card");
for (let i = 0; i < card.length; ++i){
    card[i].style.backgroundColor = "seashell";
}
// 4: Select only the first <ul> in the document.
//    Assign it to a variable named `ul`.
const ul = document.querySelector("ul");
ul.style.border = "5px solid #8F00FF";

// 5: Select only the second element with the class '.container'.
//    Assign it to a variable named `container`.
const container = document.getElementsByClassName("container")[1];
const containerA = document.getElementsByClassName("container")[0];
container.style.backgroundColor = "royalblue";
containerA.style.backgroundColor = "#F3F0E7";//Alabaster
// 6: Select all <a> elements that have a 'title' attribute. 
//    Set their color value to the color of your choice.
const titleLink = document.querySelectorAll("a[title]");
for (let i = 0; i < titleLink.length; ++i){
    titleLink[i].style.color = "salmon";
}
