(function() {
    'use strict';

    angular
        .module('app')
        .factory('dataFactory', dataFactory);

    // Here we inject $http and $q to interact with the various API's we use and to return a promise.
    dataFactory.$inject = ['$http', '$q'];

    function dataFactory($http, $q) {
        var service = {
            guardianResults: guardianResults,
            giphyResults: giphyResults,
            urbanResults: urbanResults
        };
        return service;

/***********************************************************************************************/
        // Here the guardianResults function sends out the request for our search query. It will either return the data or an error
        function guardianResults(search) {
            var deferred = $q.defer();
            $http.get('http://content.guardianapis.com/search?q=' + search + '&api-key=820bdf0c-4659-4e85-9fb8-8f16b165a70e')
                .then(function(response) {
                    deferred.resolve(response.data);
                    console.log("guardian works");
                },
                function(err) {
                    deferred.reject(err);
                    console.log(err);
                });
            return deferred.promise;
        }
/***********************************************************************************************/
        // Here the giphyResults function sends out the request for our search query. It will either return the data or an error
        function giphyResults(search) {
            var deferred = $q.defer();
            $http.get('http://api.giphy.com/v1/gifs/search?q='+ search +'&api_key=dc6zaTOxFJmzC')
                .then(function(response) {
                    deferred.resolve(response.data);
                    console.log("giphy works");
                },
                function(err) {
                    deferred.reject(err);
                    console.log(err);
                });
            return deferred.promise;
        }
/***********************************************************************************************/
        // Here the urbanResults function sends out the request for our search query. It will either return the data or an error
        function urbanResults(search) {
            var deferred = $q.defer();
            $http({
                type: 'GET',
                url: 'https://mashape-community-urban-dictionary.p.mashape.com/define?term='+ search +'',
                headers: {
                    'X-Mashape-Key': 'NfMIVi7AxgmshrLi7lXJu6gnXMstp18zjhJjsngkuS8EniKZiP'
                }
            }).then(function(response) {
                    deferred.resolve(response.data);
                    console.log("wiki works");
                },
                function(err) {
                    deferred.reject(err);
                    console.log(err);
                });
            return deferred.promise;
        }
    }
})();
