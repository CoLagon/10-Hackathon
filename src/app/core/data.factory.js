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
            photoBucketResults: photoBucketResults,
            wikiResults: wikiResults
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
                    deferred.refect(err);
                    console.log(err);
                });
            return deferred.promise;
        }

        function guardianResults(search) {
            var deferred = $q.defer();
            $http.get('http://content.guardianapis.com/search?q=' + search + '&api-key=4c7cb4ab-5061-4c36-87b1-d939ce704072').
            then(function(response) {
                    deferred.resolve(response.data);
                    console.log("guardian works");
                },
                function(err) {
                    deferred.refect(err);
                    console.log(err);
                });
            return deferred.promise;
        }

        function photoBucketResults() {
            var deferred = $q.defer();
            $http.get().then(function(response) {
                    deferred.resolve(response.data);
                    console.log("photobucket works");
                },
                function(err) {
                    deferred.refect(err);
                    console.log(err);
                });
            return deferred.promise;
        }

        function wikiResults() {
            var deferred = $q.defer();
            $http.get().then(function(response) {
                    deferred.resolve(response.data);
                    console.log("wiki works");
                },
                function(err) {
                    deferred.refect(err);
                    console.log(err);
                });
            return deferred.promise;
        }
    }
})();
