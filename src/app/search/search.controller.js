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
        vm.giphySearch = giphySearch;
        vm.urbanSearch = urbanSearch;
        


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

        function giphySearch(search){
        	dataFactory.giphyResults(search).then(
        		function(data){
        			vm.photoList = data;
        			console.log(data);
        		},
        		function(error){

        		}
        	);
        }

        function urbanSearch(search){
        	dataFactory.urbanResults(search).then(
        		function(data){
        			vm.urbanList = data;
                    console.log(data);
        		},
        		function(error){

        		}
        	);
        }
    }
})();