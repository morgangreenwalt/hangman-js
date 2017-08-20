// Variables
var guessessRemain = 10;
var lettersGuessed = [];
var wins = 0;
var words = ["country", "pop", "jazz", "rap", "dance", "electronic"];
var randomSelect = Math.floor((Math.random() * words.length));
console.log(randomSelect);

// Choose a random word
var selectedWord = words[randomSelect];
console.log(selectedWord);

// Have the word appear in _ _ _
var emptyWord = selectedWord.length;
console.log(emptyWord);
var blanks = selectedWord.split("").map(function() { return "_" });
console.log(blanks);

// Function taking user's guess
function userGuesses() {
    document.onkeyup = function(event) {
        var userChoice = event.key;
        guessessRemain--;
        console.log(userChoice);
        console.log(guessessRemain);
    };
};

userGuesses();