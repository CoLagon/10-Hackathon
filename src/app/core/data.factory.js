(function() {
    'use strict';

    angular
        .module('app')
        .factory('dataFactory', dataFactory);

    dataFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function dataFactory($http, $q) {
        var service = {
            youtubeResults: youtubeResults,
            guardianResults: guardianResults,
            giphyResults: giphyResults,
            urbanResults: urbanResults
        };
        return service;

        ////////////////

        function youtubeResults(search) {
            var deferred = $q.defer();
            $http.get('http://').then(function(response) {
                    deferred.resolve(response.data);
                    console.log("youtube works");
                },
                function(err) {
                    deferred.reject(err);
                    console.log(err);
                });
            return deferred.promise;
        }

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
