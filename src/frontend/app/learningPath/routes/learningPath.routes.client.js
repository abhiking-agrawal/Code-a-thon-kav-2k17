(function() {
    'use strict';

    angular
        .module('app.learningPath')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/');
    }

    function getStates() {
        return [
            {
                state: 'learningPath',
                config: {
                    url: '/learning-paths',
                    templateUrl: 'app/learningPath/views/learningPath.view.client.html',
                    controller: 'learningPathController as vm',                    
                    title: 'Contact Us'  
                }
            }
        ];
    }
})();