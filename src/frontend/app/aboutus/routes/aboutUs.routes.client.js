(function() {
    'use strict';

    angular
        .module('app.aboutus')
        .run(appRun);

    appRun.$inject = ['routerHelper', 'dataService'];
    /* @ngInject */
    function appRun(routerHelper, dataService) {
        routerHelper.configureStates(getStates(dataService), '/');
    }

    function getStates(dataService) {
        return [
            {
                state: 'aboutus',
                config: {
                    url: '/aboutus',
                    templateUrl: 'app/aboutUs/views/aboutUs.view.client.html',
                    controller: 'aboutusController as vm',                    
                    title: 'About Us',
                      resolve : {
                        checkLoggedIn : dataService.isLoggedIn
                    }           
                }
            }
        ];
    }
})();