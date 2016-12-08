(function(){
    var api = {};
    var rp = require('request-promise');
    var Promise = require("bluebird");

    api['get'] = function (reqURL){
        var url = 'http://api.wordnik.com:80/v4/word.json/arrive/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';

        var options = {
            uri: 'http://api.wordnik.com:80/v4/word.json/arrive/definitions',
            headers: {
                'api_key': 'a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5',
                'useCanonical' : true,
                'includeTags' : false,
                'includeRelated' : true,
                'limit' : 1
            },
            json: true
        };

       return rp(options).then(function (response){
            function definition() {
                let meaning = "";
                response.forEach(function(obj){
                    meaning += obj.text + "\n";
                });
                return meaning;
            }
           return Promise.resolve(definition());
        }).catch(function(err){
            console.log("Error Occured");
        })

    };

    module.exports = api;
})();