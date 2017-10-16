(function() {
    'use strict';

    angular
        .module('app.learningPath')
        .controller('learningPathController', learningPath);

    learningPath.$inject = ['$scope','$anchorScroll','$location','anchorSmoothScroll'];
    function learningPath($scope,$anchorScroll,$location,anchorSmoothScroll) {
       var vm = this;
       vm.title = 'learningPath'; 
        vm.goToSpecificDiv =goToSpecificDiv;
        function goToSpecificDiv(id){
            anchorSmoothScroll.scrollTo(id);
        }
    }
})();
