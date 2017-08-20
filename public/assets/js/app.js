$(document).ready(function() {

    // Variables
    var lives = 12;
    var lettersArray = [];
    var correctGuess;
    var wins = 0;
    var words = ["country", "pop", "jazz", "rap", "dance", "electronic"];
    var randomSelect;

    function startAndReset() {
        var randomSelect = Math.floor((Math.random() * words.length));
        selectedWord = words[randomSelect];
        console.log(selectedWord);

        // Have the word appear in "_ _ _"
        blanks = [];
        for (var i = 0; i < selectedWord.length; i++) {
            blanks[i] = "_";
        }
        console.log(blanks);
    }

    startAndReset();

    // Function taking user's guess
    function userGuesses() {
        document.onkeyup = function(event) {
            var userChoice = event.key;
            lives--;
            gameOver();
            console.log(userChoice);
            console.log(lives);

            var checkLetter = selectedWord.indexOf(userChoice);
            console.log(checkLetter);

            if (checkLetter === -1) {
                lettersArray.push(userChoice);
                console.log(lettersArray);

            } else {
                for (var i = 0; i < selectedWord.length; i++) {
                    blanks[checkLetter] = userChoice;
                    blanks[selectedWord.lastIndexOf(userChoice)] = userChoice;
                }
                console.log(blanks);
            }
        };
    };
    userGuesses();

    function gameOver() {
        if (lives === -1) {
            alert("No more guesses remaining. Try again!");
            startAndReset();
            lives = 12;
        } else if (blanks.includes("_") === false) {
            alert("You win! Come back for more.");
            startAndReset();
            lives = 12;
        }

    }
});