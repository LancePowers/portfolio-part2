(function () {
    'use strict'

    angular.module('app.components.experience')
        .directive('experience', questionDirective);

    function questionDirective() {
        return {
            restrict: 'E',
            templateUrl: 'components/experience/experience.html',
            scope: {},
            controller: ExperienceController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    ExperienceController.$inject = [];

    function ExperienceController() {
        var vm = this;
        vm.experiences = [{
                organization: 'hobbyDB',
                image: 'https://pbs.twimg.com/profile_images/486158745940934657/lESw9UD2.jpeg',
                title: 'Marketing Director',
                description: 'A mustang collectors Facebook contest campaign garnered over 4,500 video views, 1,838 call to action clicks, and a 17% increase in page followers',
                bullets: ['Generated email campaigns with an average open rate of 19% and click through rate of 2.5%',
'Implemented automated mailing, social media synchronization, CMS, & CRM systems',
'Designed logos, badges, landing pages, and other image assets as needed',
'Learned more than 15 new acronyms using combinations of the letters c, p, t, m, or a']
        }, //WorkZone






                          //WorkZone
            {
                organization: 'EESI Lighting',
                image: '',
                title: 'Founder/CEO',
                description: '',
                bullets: ['']
        }, {
                organization: 'University of Colorado',
                image: '',
                title: 'BS - Finance',
                description: '',
                bullets: ['']
        }];
    }

})();