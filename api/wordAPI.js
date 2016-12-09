(function(){
    var api = {};
    var rp = require('request-promise');
    var Promise = require("bluebird");
    var config = require('../config/agent/config.json');
    var properties = require('../config/properties.json');

    api['get'] = function (endPoint, word){
        /*var url = 'http://api.wordnik.com:80/v4/word.json/arrive/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';

        var options = {
            uri: 'http://api.wordnik.com:80/v4/word.json/<def>/definitions',
            headers: {
                'api_key': 'a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5',
                'useCanonical' : false,
                'includeTags' : false,
                'includeRelated' : true,
                'limit' : 1
            },
            json: true
        };*/
        var options = buildOptions(endPoint, word);

       return rp(options).then(function (response){
           return Promise.resolve(response);
        }).catch(function(err){
            console.log("Error occured while fetching the api");
        })

    };



    var buildOptions = function(endPoint, word) {
        var ep = config['endPoints'][endPoint];
        var url = ep.url, headers, options;
        url = replaceTokens(url, word);
        headers = config['endPoints'][endPoint]['headers'];
        headers['api_key'] = properties['api_key'];
        options = {
            'uri' : url,
            'headers' : headers,
            'json' : true
        };
        return options;
    };

    function replaceTokens(url, word) {
        var urlParams = url.split("/");
        urlParams.forEach(function(param, index) {

            if(param.startsWith('{') && param.endsWith('}')){
                let actualParam = param.substr(1,param.length-2);
                if(properties[actualParam])
                    urlParams[index] = properties[actualParam]
                if(actualParam === 'word')
                    urlParams[index] = word
            }
        });
        return urlParams.join("/");
    };

    module.exports = api;
})();