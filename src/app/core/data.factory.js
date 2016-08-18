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

        function youtubeResults() {
        }
        function guardianResults() {

        }
        function photoBucketResults (){

        }
        function wikeResults (){
        	
        }
    }
})();