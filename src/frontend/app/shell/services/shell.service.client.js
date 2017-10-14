(function () {
    'use strict';

    angular
        .module('app.shell')
        .factory('shellService', shellService);

    shellService.$inject = ['$http', '$location', 'config', 'logger'];
    /* @ngInject */
    function shellService($http, $location, config, logger, $localStorage) {


        var service = {
            signOut: signOut
        };

        return service;

        function signOut() {
            var result = {};
            result.status = 0;

            return $http({
                method: 'GET',
                url: config.apiBaseURL + '/auth/signout',
            }).then(function (response) {
                if (response.data) {
                    if (response.status == 200) {
                        result.status = 1;
                    } else {
                        logger.error(response.data.message, 'Error');
                    }
                }
                return result;
            })
                .catch(function (error) {
                    $state.go('login');
                });
        }
    }
})();
