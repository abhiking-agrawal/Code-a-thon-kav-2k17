(function() {
    'use strict';

    angular
        .module('app.aboutus')
        .controller('aboutusController', Aboutus);

    Aboutus.$inject = ['$scope','$state','logger','$location'];
    function Aboutus($scope,$state, logger,$location) {
       var ds = this;
       ds.title = 'About Us'; 

       $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        var slides = $scope.slides = [];
        var currIndex = 0;
        ds.imagesArray = ['banner.jpg','banner.jpg','banner.jpg','banner.jpg','banner.jpg']
        $scope.addSlide = function(index) {
            slides.push({
            image: 'images/' +  ds.imagesArray[index] ,
            // text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
            id: currIndex++
            });
        };
        for (var i = 0; i < 4; i++) {
            $scope.addSlide(i);
        }

  // Randomize logic below

       $scope.searchForResult = function(term){
       	 console.log(term);
       	 $location.path('/result').search('searchTerm',term);
       };
    }
})();
