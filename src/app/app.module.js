(function() {
    'use strict';

    angular
        .module('app', ['ui.router'])
        .config(function($urlRouterProvider, $stateProvider){
        	$urlRouterProvider.otherwise("/search");

        	$stateProvider
        		.state('search', {
        			url: '/search',
        			templateUrl: 'app/core/search.html',
        			controller: "SearchController as search"
        		});
        });

})();