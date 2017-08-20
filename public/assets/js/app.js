$(document).ready(function() {

    // Variables
    var lives;
    var lettersArray;
    var correctGuess;
    var wins = 0;
    var words = ["country", "pop", "jazz", "rap", "dance", "electronic"];
    var randomSelect;

    function startAndReset() {
        lives = 12;
        lettersArray = [];
        var randomSelect = Math.floor((Math.random() * words.length));
        selectedWord = words[randomSelect];

        // Have the word appear in "_ _ _"
        blanks = [];
        for (var i = 0; i < selectedWord.length; i++) {
            blanks[i] = "_";
        }
    };

    function addHTML() {
        var life = document.getElementById("lives");
        life.innerHTML = "Guesses Remaining: " + lives;

        var word = document.getElementById("word");
        var prettyWord = blanks.join(" ");
        word.innerHTML = prettyWord;

        var letters = document.getElementById("letters-guessed");
        var prettyLetters = lettersArray.join(" ");
        letters.innerHTML = "Letters Guessed: <br><br>" + prettyLetters;
    };

    startAndReset();
    addHTML();

    // Function taking user's guess
    function userGuesses() {
        document.onkeyup = function(event) {
            var userChoice = event.key;
            lives--;
            gameOver();

            var checkLetter = selectedWord.indexOf(userChoice);

            if (checkLetter === -1) {
                lettersArray.push(userChoice);
                addHTML();

            } else {
                for (var i = 0; i < selectedWord.length; i++) {
                    blanks[checkLetter] = userChoice;
                    blanks[selectedWord.lastIndexOf(userChoice)] = userChoice;
                }
                addHTML();
            }
        };
    };

    userGuesses();

    function gameOver() {
        if (lives === -1) {
            alert("No more guesses remaining. Try again!");
            startAndReset();
            addHTML();
        } else if (blanks.includes("_") === false) {
            alert("You win! Come back for more.");
            startAndReset();
            addHTML();
        }
    }

});