(function () {
    'use strict';

    var core = angular.module('app.core');

    core.value('config', config);
    
    var config = {
        imageBasePath: 'http://localhost:5000/images/',
        apiBaseURL: 'http://localhost:5000/api'
    };  
})();