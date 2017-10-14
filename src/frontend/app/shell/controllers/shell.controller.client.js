(function () {
    'use strict';

    angular
        .module('app.shell')
        .controller('shellController', shellController)

    shellController.$inject = ['$scope','$state'];
    /* @ngInject */
    function shellController($scope, $state) {
        //Fields
        var vm = this;
        $state.go('dashboard');
    }
})();