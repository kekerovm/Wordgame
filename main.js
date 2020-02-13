$(document).ready(function() {
var commonWords = [
  "the",
  "of",
  "and",
  "a",
  "to",
  "in",
  "is",
  "you",
  "that",
  "it",
  "he",
  "was",
  "for",
  "on",
  "are",
  "as",
  "with",
  "his",
  "they",
  "I",
  "at",
  "be",
  "this",
  "have",
  "from",
  "or",
  "one",
  "had",
  "by",
  "word",
  "but",
  "not",
  "what",
  "all",
  "were",
  "we",
  "when",
  "your",
  "can",
  "said",
  "there",
  "use",
  "an",
  "each",
  "which",
  "she",
  "do",
  "how",
  "their",
  "if",
  "will",
  "up",
  "other",
  "about",
  "out",
  "many",
  "then",
  "them",
  "these",
  "so",
  "some",
  "her",
  "would",
  "make",
  "like",
  "him",
  "into",
  "time",
  "has",
  "look",
  "two",
  "more",
  "write",
  "go",
  "see",
  "number",
  "no",
  "way",
  "could",
  "people",
  "my",
  "than",
  "first",
  "water",
  "been",
  "call",
  "who",
  "oil",
  "its",
  "now",
  "find",
  "long",
  "down",
  "day",
  "did",
  "get",
  "come",
  "made",
  "may",
  "part"
];

//choosing a random word
var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
} 

var remainingletters = word.length;

//Coding the game loop

while (remainingletters > 0) {
  alert(answerArray.join(" "));

///Handling the player's input

  var guess = prompt("Guess a letter, or Click cancel to stop playing.");

  if (guess === null) {

///Exit the game loop
   break;
 } else if (guess.length !== 1) {
   alert("Please enter a letter");
 } else {

///Updating the game state
  for (var j = 0; j < word.length; j++) {
    if (word[j] === guess) {
      answerArray[j] = guess;
      remainingletters--;
    }
  }
}
///The end of the game loop
}
// ///New array containing 3 letters or more
// var words = commonWords.filter(function(item) {
//     return item.length >= 3
// })

///Ending the game

alert(answerArray.join(" "));
alert("Great job! The answer was " + word);

// document.getElementById("result").innerHTML = answerArray.join("")
// document.getElementById("maxWrong").innerHTML = maxwrong

// document.getElementById("letters").onClick = function guessedLetter())