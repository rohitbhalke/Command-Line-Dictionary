var stdin = process.openStdin();
var handler = require('./handler/wordHandler');
var static = {
    'firstArgument' : './dict'
};


stdin.addListener("data", function(d) {
    var input = d.toString().trim().split(" ");
    if(input[0] === static.firstArgument){
        handler[input[1]].call(undefined, input[2]).then(function(result){
            print(result);
        })
    }
    else {
        console.error("Wrong command");
    }
});

function print(result) {
    console.log(result);
}