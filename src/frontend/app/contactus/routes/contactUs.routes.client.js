(function() {
    'use strict';

    angular
        .module('app.contactus')
        .run(appRun);

    appRun.$inject = ['routerHelper', 'dataService'];
    /* @ngInject */
    function appRun(routerHelper, dataService) {
        routerHelper.configureStates(getStates(dataService), '/');
    }

    function getStates(dataService) {
        return [
            {
                state: 'contactus',
                config: {
                    url: '/contactus',
                    templateUrl: 'app/contactus/views/contactUs.view.client.html',
                    controller: 'contactUsController as vm',                    
                    title: 'Contact Us',
                      resolve : {
                        checkLoggedIn : dataService.isLoggedIn
                    }           
                }
            }
        ];
    }
})();