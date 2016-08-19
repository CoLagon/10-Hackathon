(function() {
    'use strict';

    angular
        .module('app')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['dataFactory'];

    /* @ngInject */
    function SearchController(dataFactory) {
        var vm = this;
        vm.title = 'SearchController';
        vm.youtubeSearch = youtubeSearch;
        vm.guardianSearch = guardianSearch;
        vm.photoBucketSearch = photoBucketSearch;
        vm.wikiSearch = wikiSearch;


        function youtubeSearch(search){
        	dataFactory.youtubeResults(search).then(
        		function(data){
        			vm.youtubeList = data;
        		},
        		function(error){

        		}
        	);
        }
        

        function guardianSearch(search){
        	dataFactory.guardianResults(search).then(
        		function(data){
        			vm.newsList = data;
        			console.log(data);
        		},
        		function(error){

        		}
    		);
        }

        function photoBucketSearch(search){
        	dataFactory.photoBucketResults(search).then(
        		function(data){
        			vm.photoList = data;
        			console.log(data);
        		},
        		function(error){

        		}
        	);
        }

        function wikiSearch(search){
        	dataFactory.wikiResults(search).then(
        		function(data){
        			vm.wikiList = data;
                    console.log(data);
        		},
        		function(error){

        		}
        	);
        }
    }
})();