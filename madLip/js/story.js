// 1. Declare variables and capture input.
const noun = prompt(" Please type a noun");
const pronoun = prompt ("Please type a pronoun");
const verb = prompt("Please type a verb");
const adverb = prompt("Please type an adverb");
const adjective = prompt("Please type an adjective");

// 2. Combine the input with other words to create a story.
const story = `<p>Long long ago in a distance ${noun}, there lived as ${verb} and
 ${adverb} king who was ${verb} my all his ${noun} but whom will ${pronoun} 
 to know as the ${adjective}one.The people where ${adverb} 
 for while but that was doomed to ${pronoun} for the ${adjective}one 
 remained forever in shadow, ${adverb}.<p\>`

// 3. Display the story as a <p> inside the <main> element.

document.querySelector("main").innerHTML = story;