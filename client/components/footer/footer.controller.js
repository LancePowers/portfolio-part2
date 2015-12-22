(function () {
    'use strict'

    angular.module('myApp')
        .controller('footer', function FooterGridController($window) {
            var vm = this;

            vm.contacts = [{
                name: 'Mail',
                svg: 'img/contact-email.svg',
                link: 'mailto:lance@thelpstory.com'
            }, {
                name: 'LinkedIn',
                svg: 'img/contact-linkedin.svg',
                link: '//www.linkedin.com/in/powerslance'
            }, {
                name: 'GitHub',
                svg: 'img/contact-github.svg',
                link: '//github.com/LancePowers'
            }, {
                name: 'Twitter',
                svg: 'img/contact-twitter.svg',
                link: '//twitter.com/thelpstory'
            }]

            vm.goToLink = function (url) {
                $window.open(url);
            }

        });


})();