(function(){
    var api = require('../api/wordAPI.js');
    var Promise = require("bluebird");
    var handler = {};

    handler['def'] = function (word) {
        var promise = api.get(word);
       return promise.then(function(definition){
            return Promise.resolve(definition);
        });
    };



    module.exports = handler;
})();