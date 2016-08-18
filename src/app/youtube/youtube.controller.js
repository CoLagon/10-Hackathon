(function() {
    'use strict';

    angular
        .module('app')
        .controller('youtubeCtrl', youtubeCtrl);

    youtubeCtrl.$inject = ['dataFactory', '$stateParams'];

    /* @ngInject */
    function youtubeCtrl(dataFactory, $stateParams) {
        var vm = this;
        vm.title = 'youtubeCtrl';

        activate();

        ////////////////

        function activate() {
        }
    }
})();