var stdin = process.openStdin();
var handler = require('./handler/wordHandler');
var static = {
    'firstArgument' : './dict'
};


stdin.addListener("data", function(d) {
    var input = d.toString().trim().split(" ");
    if(input[0] === static.firstArgument ){
        if(input[1] && handler[input[1]] && input[2]) {
            handler[input[1]](input[2]).then(function(result){
                print(result);
            })
        }
        else if(input[1] && input.length ===2){
            // dictonary get all info of word
            handler['dict'](input[1]).then(function(result){
                print(result);
            })
        }
        else if(input[1] === undefined) {
            // Word of the day
            handler['wordOfTheDay']().then(function(result){
                print(result);
            });
        }
        else {
            console.error("Wrong Command");
        }
    }
    else {
        console.error("Wrong command");
    }
});

function print(result) {
    console.log(result);
}