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
                    row: 1,
                    col: 1
                },
                description: "The first gSchool group project, Ling-Quiz-Tics was a great way to practice storying, collaboration, and the feature-branch work-flow. Users can choose from one of 3 entertaining quizzes to hone their language skills.",
                techDescriptions: [{
                    title: 'Bootstrap',
                    body: 'I paired with a friend to develop all of the front end design, positioning, and game logic. We ripped up a basic bootstrap template to give us a start, but the considerable additions and changes helped solidify my understanding.'
                }, {
                    title: 'Object-Oriented',
                    body: 'We identified initial classes (user, game, quiz, question) before writing a line of code. Defining the initial attributes, methods, and interactions of each helped us to divide and conquer later.'
                }, {
                    title: 'Agile',
                    body: 'I had the opportunity to replicate some of the practices I’d learned working with the dev team at hobbyDB. The team created an initial vision for the app and broke it all the way down to specific, pointed, user stories.'
                }],
                technologies: ['Bootstrap', 'nodeJS', 'express']
    },
            {
                title: 'Gatherly',
                background: 'img/gatherly.png',
                span: {
                    row: 1,
                    col: 1
                },
                description: "Gatherly is an app to help people make friends. Users make a gather by creating or selecting 3 unique, local experiences and 4 themed fictional characters. Gatherly will intelligently group users together to participate in the real world experiences.",
                techDescriptions: [{
                    title: 'Pair Programming',
                    body: 'I was really lucky to work with a great friend on this app. We alternated frequently between driving and navigating.  I learned the value of pair programming and the ability to combine strategic and tactical thinking.'
                }, {
                    title: 'Boulder Startup Weekend',
                    body: 'Gatherly was one of twelve ideas selected for Boulder’s Startup Weekend hackathon. Patrick and I had a blast pitching the app, but more importantly, we hooked up with the team at bowtie.io to create the JAM stack!'
                }, {
                    title: 'JAM Stack',
                    body: 'Jekyll, AngularJS, and MongoDB. We paired with bowtie.io to integrate Gatherly with their platform written largely in Jekyll. We were able to combine the two by reducing the angular app to a single custom directive element.'
                }],
                technologies: ['AngularJS', 'nodeJS', 'express', 'Javascript', 'HTML', 'CSS']
            }, {
                title: 'gCasino: BlackJack',
                background: 'img/blackjack.png',
                span: {
                    row: 1,
                    col: 1
                },
                description: "gCasino was my first large project as a student at gSchool. It's a strong demonstration of my understanding of Object-Oriented Design principles, and ability to deal with complex game logic. I'm particularly proud of the 'book' button that will make automatically choose an action based upon the best odds.",
                techDescriptions: [{
                    title: '',
                    body: ''
                }, {
                    title: '',
                    body: ''
                }, {
                    title: '',
                    body: ''
                }],
                technologies: ['jQuery', 'jQueryUI', 'HTML', 'CSS']
    }, {
                title: 'Pick \'Em',
                background: 'img/pickem.png',
                span: {
                    row: 1,
                    col: 1
                },
                description: 'Pick \'Em scrapes schedule information and statistics on all 32 NFL teams, compares the relative strength of one team against another, and chooses a winner and weight. It defaults the Broncos to win for the highest weight, then automatically submits the results on poolhost.com. ',
                techDescriptions: [{
                    title: 'DOM Navigation',
                    body: 'This project gave me the opportunity to scrape and navigate using selenium web-driver. Submitting the picks alone required interacting with login inputs, several page links, and a form of 16 selection inputs.'
                }, {
                    title: 'First Place Baby!',
                    body: '~text-editor drop~'
                }, {
                    title: 'Broncos Bias',
                    body: 'To avoid conflicts of interest, I created a Broncos bias. It identifies Denver Broncos games, switches the winner if necessary, assigns the highest points possible, and reorders the rest for the week.'
                }],
                technologies: ''
            },
            {
                title: 'Seventy-Three',
                background: 'img/73logo.png',
                span: {
                    row: 1,
                    col: 1
                },
                description: "BiPo is designed to help individuals diagnosed with a bipolar disorder gain a better understanding of the changes in their mood and other metrics that will help manage and treat the disease.",
                techDescriptions: [{
                    title: '',
                    body: ''
                }, {
                    title: '',
                    body: ''
                }, {
                    title: '',
                    body: ''
                }],
                technologies: ['nodeJS', 'express', 'AngularJS', 'JavaScript', 'HTML', 'CSS']
            },
            {
                title: 'Twilio Tale',
                background: 'img/twilio.png',
                span: {
                    row: 1,
                    col: 1
                },
                description: '',
                techDescriptions: [{
                    title: '',
                    body: ''
                }, {
                    title: '',
                    body: ''
                }, {
                    title: '',
                    body: ''
                }],
                technologies: ''
            },
            {
                title: 'Half-Assed Vegan',
                background: 'img/vegan.png',
                span: {
                    row: 1,
                    col: 1
                },
                description: "Designed for those who agree with the principles of veganism, but aren't ready to give up the bacon, Half-Assed Vegan matches two users to have the impact of one vegan. This was a great chance to learn more about relational databases and a focus on simple, intuitive UI.",
                techDescriptions: [{
                    title: '',
                    body: ''
                }, {
                    title: '',
                    body: ''
                }, {
                    title: '',
                    body: ''
                }],
                technologies: ['nodeJS', 'express', 'HTML', 'CSS', 'AngularJS', 'JavaScript', 'PostgreSQL']
            },

            {
                title: 'Marketing',
                background: 'img/lplogo.png',
                span: {
                    row: 1,
                    col: 1
                },
                description: '',
                techDescriptions: [{
                    title: '',
                    body: ''
                }, {
                    title: '',
                    body: ''
                }, {
                    title: '',
                    body: ''
                }],
                technologies: ''
                },
            {
                title: 'Spout-About',
                background: 'img/spout-about.png',
                span: {
                    row: 1,
                    col: 1
                },
                description: "A visualization of sentiment analysis from the 2015 democratic national debate.",
                techDescriptions: [{
                    title: '',
                    body: ''
                }, {
                    title: '',
                    body: ''
                }, {
                    title: '',
                    body: ''
                }],
                technologies: ['AlchemyAPI', 'p5', 'AngularJS']
    },

];
        var demos = ['', '', '', '', '', '', '', '', ''];
        var repositories = ['', '', '', '', '', '', '', '', ''];
        var list = [];
        projects.forEach(function (project, index) {
            project.color = false;
            project.demo = demos[index];
            project.git = repositories[index];
        })
        console.log(list)

        return projects;
    }
})();