(function() {
    'use strict';

    angular
        .module('app.vision')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/');
    }

    function getStates() {
        return [
            {
                state: 'vision',
                config: {
                    url: '/our-vision',
                    templateUrl: 'app/vision/views/vision.view.client.html',
                    controller: 'visionController as vm',                    
                    title: 'vision'          
                }
            }
        ];
    }
})();