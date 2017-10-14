(function() {
    'use strict';

    angular
        .module('app.contactus')
        .controller('contactUsController', ContactUs);

    ContactUs.$inject = ['$scope','$state'];
    function ContactUs($scope,$state) {
       var ds = this;
       ds.title = 'ContactUs'; 

    }
})();
