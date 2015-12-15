(function () {
    'use strict'
    angular.module('myApp')
        .factory('projectHolder', projectHolder)

    function projectHolder() {
        var projects = [
            {
                title: 'Ling-Quiz-Tics',
                background: 'img/translate.png',
                span: {
                    row: 2,
                    col: 2
                },
                description: "3 fun ways to practice and learn a new language!",
                technologies: ['Bootstrap', 'nodeJS', 'express']
    }, {
                title: 'Pick \'Em',
                background: 'img/pickem.png',
                span: {
                    row: 2,
                    col: 2
                },
                description: '',
                technologies: ''
            },
            {
                title: 'Coming in December: Gatherly',
                background: 'img/gatherly.png',
                span: {
                    row: 2,
                    col: 2
                },
                description: "Gatherly's very simple interface allows users to pair 3 unique local experiences with 4 popular characters representing Myers Briggs personality types to intelligently create new relationships. This was a great opportunity to practice pair programing. The idea was selected to participate in Boulder's startup weekend where we worked in tandem with Bowtie.io.",
                technologies: ['AngularJS', 'nodeJS', 'express', 'Javascript', 'HTML', 'CSS']
            },
            {
                title: 'Seventy-Three',
                background: 'img/73logo.png',
                span: {
                    row: 2,
                    col: 2
                },
                description: "BiPo is designed to help individuals diagnosed with a bipolar disorder gain a better understanding of the changes in their mood and other metrics that will help manage and treat the disease.",
                technologies: ['nodeJS', 'express', 'AngularJS', 'JavaScript', 'HTML', 'CSS']
            },
            {
                title: 'This Thanksgiving: Half-Assed Vegan',
                background: 'img/vegan.png',
                span: {
                    row: 2,
                    col: 2
                },
                description: "Designed for those who agree with the principles of veganism, but aren't ready to give up the bacon, Half-Assed Vegan matches two users to have the impact of one vegan. This was a great chance to learn more about relational databases and a focus on simple, intuitive UI.",
                technologies: ['nodeJS', 'express', 'HTML', 'CSS', 'AngularJS', 'JavaScript', 'PostgreSQL']
            },
            {
                title: 'Twilio Tale',
                background: 'img/twilio.png',
                span: {
                    row: 2,
                    col: 2
                },
                description: '',
                technologies: ''
            }, {
                title: 'gCasino: BlackJack',
                background: 'img/blackjack.png',
                span: {
                    row: 2,
                    col: 2
                },
                description: "gCasino was my first large project as a student at gSchool. It's a strong demonstration of my understanding of Object-Oriented Design principles, and ability to deal with complex game logic. I'm particularly proud of the 'book' button that will make automatically choose an action based upon the best odds.",
                technologies: ['jQuery', 'jQueryUI', 'HTML', 'CSS']
    },


            {
                title: 'Marketing',
                background: 'img/lplogo.png',
                span: {
                    row: 2,
                    col: 2
                },
                description: '',
                technologies: ''
                },
            {
                title: 'Spout-About',
                background: 'img/spout-about.png',
                span: {
                    row: 2,
                    col: 2
                },
                description: "A visualization of sentiment analysis from the 2015 democratic national debate.",
                technologies: ['AlchemyAPI', 'p5', 'AngularJS']
    },

            {
                title: 'Personal Project',
                background: 'img/lplogo.png',
                span: {
                    row: 2,
                    col: 2
                },
                description: 'Five months ago this project summed up my abilities with HTML, CSS, and JavaScript.',
                technologies: ['HTML', 'CSS', 'JavaScript', 'jQueryUI']
    }

];

        var list = [];
        projects.forEach(function (project) {
            project.color = false;
            for (var i = 0; i < project.technologies.length; i++) {
                if (list.indexOf(project.technologies[i]) === -1) {
                    list.push(project.technologies[i])
                }
            }
        })
        console.log(list)

        return projects;
    }
})();