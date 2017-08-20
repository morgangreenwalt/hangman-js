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
        console.log(selectedWord);

        // Have the word appear in "_ _ _"
        blanks = [];
        for (var i = 0; i < selectedWord.length; i++) {
            blanks[i] = "_";
        }
        console.log(blanks);
    };

    function addHTML() {
        var letters = document.getElementById("letters-guessed");
        letters.innerHTML = lettersArray;

        var life = document.getElementById("lives");
        life.innerHTML = lives;
    };

    startAndReset();
    addHTML();

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
                addHTML();
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
            addHTML();
        } else if (blanks.includes("_") === false) {
            alert("You win! Come back for more.");
            startAndReset();
            addHTML();
        }
    }

});