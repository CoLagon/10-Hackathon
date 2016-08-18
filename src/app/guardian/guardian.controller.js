(function() {
    'use strict';

    angular
        .module('app')
        .controller('guardianCtrl', guardianCtrl);

    guardianCtrl.$inject = ['dataFactory', '$stateParams'];

    /* @ngInject */
    function guardianCtrl(dataFactory, $stateParams) {
        var vm = this;
        vm.title = 'guardianCtrl';

        activate();

        ////////////////

        function activate() {
        }
    }
})();