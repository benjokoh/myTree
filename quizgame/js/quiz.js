/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let correct = 0;

// 2. Store the rank of a player

let rank = "";
// 3. Select the <main> HTML element
const main = document.querySelector("main");

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
const quest1 = prompt(" What is my name?");
if(quest1.toUpperCase()==="BENSON"){
  correct += 1;
}
const quest2 = sundayprompt(" What is fathers name?"); 
if(quest2.toUpperCase()==="SUNDAY"){
  correct += 1;
}
const quest3 = prompt(" What is my mother name?"); 
if(quest3.toUpperCase()==="DELIGHT"){
  correct += 1;
}
const quest4 = prompt(" What was my first pet?"); 
if(quest4.toUpperCase()=== "CAT"){
  correct += 1;
}
const quest5 = prompt(" What is name of my first love?"); 
if(quest5.toUpperCase()=== "CECILIA"){
  correct += 1;
}

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/
if(correct === 5){
  rank = "Gold";
}else if(correct >= 3){
    rank = "Silver";
}else if(correct >= 2){
    rank = "Bronze";
}else{
  rank = "Better lock next time.";
}

// 6. Output results to the <main> element
main.innerHTML = `<h2>You've got ${correct} out of 5 quest correct.</h2>
                  <p>Your Crown: <Strong>${rank}</Strong></p>`;