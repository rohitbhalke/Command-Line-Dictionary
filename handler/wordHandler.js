(function () {
    var api = require('../api/wordAPI.js');
    var Promise = require("bluebird");
    var handler = {};

    handler['def'] = function (word) {
        var promise = api.get("definition",word);
        return promise.then(function (response) {
            function definition() {
                let meaning = "";
                response.forEach(function (obj) {
                    meaning += obj.text + "\n";
                });
                return meaning;
            }
            if(response && Array.isArray(response) && response.length === 0)
                return Promise.resolve("The word doesn't exist");
            return Promise.resolve(definition());
        });
    };

    handler['syn'] = function(word) {
        var promise = api.get("synonym",word);
        return promise.then(function (response) {
            function synonyms() {
                return response[0].words.join(",");
            }
            return Promise.resolve(synonyms());
        });
    };

    module.exports = handler;
})();