(function() {
    'use strict';

    angular
        .module('app.dashboards')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/');
    }

    function getStates() {
        return [
            {
                state: 'dashboard',
                config: {
                    url: '/',
                    templateUrl: 'app/dashboard/views/dashboard.view.client.html',
                    controller: 'dashboardController as vm',                    
                    title: 'Dashboard'          
                }
            }
        ];
    }
})();