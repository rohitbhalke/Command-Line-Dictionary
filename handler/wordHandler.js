(function () {
    var api = require('../api/wordAPI.js');
    var Promise = require("bluebird");

    var handler = {}, self = handler;

    handler['def'] = function (word) {
        var promise = api.get("definition",word);
        return promise.then(function (response) {
            function definition() {
                let meaning = "";
                response.forEach(function (obj) {
                    meaning += obj.text + "\n";
                });
                return "Definition: " +meaning;
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
                return "Synonyms: " +(response[0] ? response[0].words.join(",") : '');
            }
            return Promise.resolve(synonyms());
        });
    };

    handler['ant'] = function(word) {
        var promise = api.get("antonym",word);
        return promise.then(function (response) {
            function antonym() {
                return "Antonyms: " + (response[0] ? response[0].words.join(",") : '');
            }
            return Promise.resolve(antonym());
        });
    };

    handler['ex'] = function(word) {
        var promise = api.get("topExample",word);
        return promise.then(function (response) {
            return Promise.resolve("Example: "+(response && response.text ? response.text : ''));
        });
    };

    handler['dict'] = function(word) {
        var defPromise = self['def'](word),
            synonymPromise = self['syn'](word),
            antonymPromise = self['ant'](word),
            examplePromise = self['ex'](word),
            arrOfPromises = [defPromise, synonymPromise, antonymPromise, examplePromise];

        return Promise.all(arrOfPromises).then(function(result){
            return Promise.resolve(result.join("\n"));
        })
    };

    handler['wordOfTheDay'] = function() {
      var promise = api.get('wordOfTheDay'), word;
      return promise.then(function(response){
         word = response.word;
         return self['dict'](word);
      }).then(function(result){
          word = "Word of the day: " + word + "\n";
          return Promise.resolve(word+result);
      })
    };

    module.exports = handler;
})();