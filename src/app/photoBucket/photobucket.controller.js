(function() {
    'use strict';

    angular
        .module('app')
        .controller('photoBucketCtrl', photoBucketCtrl);

    photoBucketCtrl.$inject = ['dataFactory', '$stateParams'];

    /* @ngInject */
    function photoBucketCtrl(dataFactory, $stateParams) {
        var vm = this;
        vm.title = 'photoBucketCtrl';

        activate();

        ////////////////

        function activate() {
        }
    }
})();