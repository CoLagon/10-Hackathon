(function() {
    'use strict';

    angular
        .module('app')
        .controller('SearchController', SearchController);

    // Inject the factory we are using and $sce to allow video playback on our site
    SearchController.$inject = ['dataFactory', '$sce'];

    /* @ngInject */
    function SearchController(dataFactory, $sce) {
    //Declare all the variables and functions we will be using in the SearchController    
        var vm = this;
        vm.title = 'SearchController';
        vm.guardianSearch = guardianSearch;
        vm.giphySearch = giphySearch;
        vm.urbanSearch = urbanSearch;
        vm.getYoutubeUrls = getYoutubeUrls;               
        vm.YoutubeUrl1; 
        vm.YoutubeUrl2; 
        vm.YoutubeUrl3; 
        vm.isHidden = true;
        vm.isVisible = false
        vm.showHide = showHide;

        function showHide(){
            vm.isHidden = vm.isHidden ? false : true;
            vm.isVisible = vm.isVisible ? true : false;
            vm.isHidden = false;
            vm.isVisible = true;
        }
        
/***********************************************************************************************/
        //Here the gurdianSearch functions calls on the gurdianResults function in the factory and passes the search to it. 
        //Then after recieving a response, it will either assign the data to newsList or perform the error function.
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
/***********************************************************************************************/
        //Here the giphySearch functions calls on the giphyResults function in the factory and passes the search to it. 
        //Then after recieving a response, it will either assign the data to photoList or perform the error function.
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
/***********************************************************************************************/
        //Here the urbanSearch functions calls on the urbanResults function in the factory and passes the search to it. 
        //Then after recieving a response, it will either assign the data to urbanList or perform the error function.
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
/***********************************************************************************************/           
        //Here the getYoutubeUrls function will assign url searches to three variables.
        //vm.news = the users search item they inputted in the search bar.
        //'$sce.trustAsResourceUrl' function gives us the ability to play the videos in our application
        function getYoutubeUrls() { 
            vm.YoutubeUrl1 = $sce.trustAsResourceUrl('https://www.youtube.com/embed?listType=search&list=' + vm.news);
            vm.YoutubeUrl2 = $sce.trustAsResourceUrl('https://www.youtube.com/embed?listType=search&list=' + vm.news+'1');
            vm.YoutubeUrl3 = $sce.trustAsResourceUrl('https://www.youtube.com/embed?listType=search&list=' + vm.news+'2');
              
      }
   } 
})();