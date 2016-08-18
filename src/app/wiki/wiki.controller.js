(function() {
    'use strict';

    angular
        .module('app')
        .controller('wikiCtrl', wikiCtrl);

    wikiCtrl.$inject = ['dataFactory', '$stateParams'];

    /* @ngInject */
    function wikiCtrl(dataFactory, $stateParams) {
        var vm = this;
        vm.title = 'wikiCtrl';

        activate();

        ////////////////

        function activate() {
        }
    }
})();