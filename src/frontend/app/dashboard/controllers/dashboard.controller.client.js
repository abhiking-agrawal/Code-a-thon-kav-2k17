(function () {
    'use strict';

    angular
        .module('app.dashboards')
        .controller('dashboardController', Dashboard);

    Dashboard.$inject = ['$scope'];

    function Dashboard($scope) {
        var vm = this;
        vm.title = 'Dashboard';
      

    }
})();