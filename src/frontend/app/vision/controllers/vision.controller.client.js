(function () {
    'use strict';

    angular
        .module('app.vision')
        .controller('visionController', vision);

    vision.$inject = ['$scope'];

    function vision($scope) {
        var vm = this;
        vm.title = 'vision';
      

    }
})();