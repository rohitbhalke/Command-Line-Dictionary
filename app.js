(function () {

    var stdin = process.openStdin();
    var handler = require('./handler/wordHandler');
    var gameAPI = require('./api/gameAPI');

    var dictionary = {
        'firstArgument': './dict',
        'gameMode': false
    };

    stdin.addListener("data", function (terminalInput) {
        var input = terminalInput.toString().trim().split(" ");

        if (dictionary.gameMode) {
            gameAPI.verifyAnswer(input[0]);
        }
        else if (input[0] === dictionary.firstArgument) {
            if (input[1] === 'play') {
                gameAPI.playGame();
                dictionary.setGameMode();
            }
            else if (input[1] && handler[input[1]] && input[2]) {
                handler[input[1]](input[2]).then(function (result) {
                    print(result);
                }).catch(function(err){})
            }
            else if (input[1] && input.length === 2) {
                // dictonary get all info of word
                handler['dict'](input[1]).then(function (result) {
                    print(result);
                }).catch(function(err){})
            }
            else if (input[1] === undefined) {
                // Word of the day
                handler['wordOfTheDay']().then(function (result) {
                    print(result);
                }).catch(function(err){});
            }
            else {
                console.error("Wrong Command");
            }
        }
        else {
            console.error("Wrong command");
        }
    });


    dictionary.resetGameMode = function () {
        dictionary.gameMode = false;
    };

    dictionary.setGameMode = function () {
        dictionary.gameMode = true;
    };

    function print(result) {
        console.log(result);
    }

    console.log("Welcome to Command Line Dictionary");

    module.exports  = dictionary;

})();