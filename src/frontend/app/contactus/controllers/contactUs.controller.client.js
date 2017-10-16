(function () {
    'use strict';

    angular
        .module('app.contactus')
        .controller('contactUsController', ContactUs);

    ContactUs.$inject = ['$scope', '$state'];
    function ContactUs($scope, $state) {
        var vm = this;
        vm.title = 'ContactUs';
        vm.submitForm = submitForm;
        vm.userBack = angular.copy(vm.contact);
        function submitForm(){
            vm.successMsg = '';
            vm.contact = angular.copy(vm.userBack);
           vm.successMsg = "Form submitted successfully."
        }
    }
})();
