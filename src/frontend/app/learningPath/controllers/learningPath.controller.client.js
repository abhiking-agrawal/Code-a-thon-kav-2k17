(function() {
    'use strict';

    angular
        .module('app.learningPath')
        .controller('learningPathController', learningPath);

    learningPath.$inject = ['$scope','$anchorScroll','$location'];
    function learningPath($scope,$anchorScroll,$location) {
       var vm = this;
       vm.title = 'learningPath'; 
        vm.goToSpecificDiv =goToSpecificDiv;
        function goToSpecificDiv(id){
            $location.hash(id);
            
                  // call $anchorScroll()
                  $anchorScroll();
        }
    }
})();
