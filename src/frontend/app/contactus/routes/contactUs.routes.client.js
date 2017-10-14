(function() {
    'use strict';

    angular
        .module('app.contactus')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/');
    }

    function getStates() {
        return [
            {
                state: 'contactus',
                config: {
                    url: '/contactus',
                    templateUrl: 'app/contactus/views/contactUs.view.client.html',
                    controller: 'contactUsController as vm',                    
                    title: 'Contact Us'  
                }
            }
        ];
    }
})();