// sample angular code

var app = angular.module('myApp', ['ngMaterial', 'duParallax', 'app.components']);

app.controller('myController', function ($scope, parallaxHelper, culture) {
    $scope.greeting = "Hello World!";
    $scope.culture = culture;
    $scope.background = parallaxHelper.createAnimator(-0.3, 150, -150);
});