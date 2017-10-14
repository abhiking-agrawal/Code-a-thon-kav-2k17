(function () {
    'use strict';

    var core = angular.module('app.core');
    var readyPromise;
    var config = {
        appErrorPrefix: '[Error] ', //Configure the exceptionHandler decorator
        appTitle: 'Gulp Patterns Demo',
        imageBasePath: 'http://localhost:5000/images/photos/',
        apiBaseURL: 'http://localhost:5000/api'
    };

    core.value('config', config);

    core.config(configure);

    configure.$inject = ['routerHelperProvider' ];

    function configure(routerHelperProvider) {

        configureStateHelper();

        function configureStateHelper() {
            var resolveAlways = {
                ready: ready
            };

            ready.$inject = ['$q'];
            /* @ngInject */
            function ready($q) {
                if (!readyPromise) {
                    // Apps often pre-fetch session data ("prime the app")
                    // before showing the first view.
                    // This app doesn't need priming but we add a
                    // no-op implementation to show how it would work.
                    // logger.info('Primed the app data');
                 return true;
                }
            }

            routerHelperProvider.configure({
                docTitle: 'Gulp: ',
                resolveAlways: resolveAlways
            });
        }
    }
})();