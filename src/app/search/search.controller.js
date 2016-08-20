(function() {
    'use strict';

    angular
        .module('app')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['dataFactory', '$sce'];

    /* @ngInject */
    function SearchController(dataFactory, $sce) {
        var vm = this;
        vm.title = 'SearchController';
        vm.youtubeSearch = youtubeSearch;
        vm.guardianSearch = guardianSearch;
        vm.giphySearch = giphySearch;
        vm.urbanSearch = urbanSearch;
        vm.getYoutubeUrls = getYoutubeUrls;               
        vm.YoutubeUrl1; 
        vm.YoutubeUrl2; 
        vm.YoutubeUrl3; 
        

        


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
            
            function getYoutubeUrls() { 
                vm.YoutubeUrl1 = $sce.trustAsResourceUrl('https://www.youtube.com/embed?listType=search&list=' + vm.news+'1');
                vm.YoutubeUrl2 = $sce.trustAsResourceUrl('https://www.youtube.com/embed?listType=search&list=' + vm.news+'2');
                vm.YoutubeUrl3 = $sce.trustAsResourceUrl('https://www.youtube.com/embed?listType=search&list=' + vm.news+'3');
              
      }
   } 
})();