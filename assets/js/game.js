
        var computerChoices = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i','j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z' ];
        var wins = 0;
        var losses = 0;
        var guess = 0;
        var guessRemaining = 9;
        var guessLetters = [];
        var lettersRemaining = null;


        var computer = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        var updateGuessRemaining = function() {
            document.querySelector('#guessLeft').innerHTML = "Guesses Left:" + guessRemaining;
        
        };

        var updateLettersRemaining = function() {
            this.lettersRemaining = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
        };

        var updateGuessLetters = function() {
            document.querySelector('#let').innerHTML = "Letters Guessed So Far:" + guessLetters.join(',');
        };

        var reset = function() {
            totalGuesses = 9;
            guessRemaining = 9;
            guessLetters = [];

            updateLettersRemaining();
            updateGuessRemaining();
            updateGuessLetters();

        }

        updateLettersRemaining();
        updateGuessRemaining();


        // What button was pressed

        document.onkeyup = function(event) {
            guessRemaining--;
            var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

            guessLetters.push(userGuess);
            updateGuessRemaining();
            updateGuessLetters();

                if(guessRemaining > 0) {
                    if (userGuess == lettersRemaining) {
                    wins++;
                    document.querySelector('#wins').innerHTML = "Wins: " + wins;
                    alert("Yes, you're a pshycic!");
                    reset();
                }
                } else if(guessRemaining == 0) {
                    losses ++;
                    document.querySelector('#losses').innerHTML = "Losses: " + losses;
                    alert("Sorry, You're Not A Psychic");
                    reset();

                }
                
        };
   