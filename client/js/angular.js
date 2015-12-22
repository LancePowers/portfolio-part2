// sample angular code

var app = angular.module('myApp', ['ngMaterial', 'duParallax', 'app.components']);

app.controller('myController', function ($scope, parallaxHelper, $sce, $mdBottomSheet) {
    console.log($mdBottomSheet)
    $scope.background = parallaxHelper.createAnimator(-0.3, 150, -150);
    $scope.isOpen = false;
    $scope.menu = {
        isOpen: false,
        count: 0,
        selectedDirection: 'left'
    };
    $scope.frame = {
        isOpen: false,
        url: $sce.trustAsResourceUrl('http://thelpstory.com')
    }
    $scope.isColored = {
        mountain: false
    };
    $scope.mountainBackground = function () {
        if ($scope.isColored.mountain) {
            return 'img/mountainColor.jpg'
        } else {
            return 'img/mountainBkg.jpg'
        }
    }

    $scope.showFooter = function ($event) {
        console.log($event);
        $mdBottomSheet.show({
            templateUrl: 'components/footer/footer.grid.html',
            controller: 'footer',
            controllerAs: 'vm',
            clickOutsideToClose: true,
            targetEvent: $event
        })
    }

    $scope.designIcons = [{
        icon: 'img/infographic-icon.svg',
        title: 'Infographic',
        url: '//thelpstory.com/project/entertaining-infographics/'
    }, {
        icon: 'img/landing-page-icon.svg',
        title: 'Landing Page',
        url: '//thelpstory.com/project/collection-management-landing-page/'
    }, {
        icon: 'img/photo-icon.svg',
        title: 'Photography',
        url: '//thelpstory.com/project/speak-softly/'
    }, {
        icon: 'img/video-icon.svg',
        title: 'Video',
        url: '//thelpstory.com/project/facebook-contest-video-promotion/'
    }]

});