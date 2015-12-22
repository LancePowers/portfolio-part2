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
                description: "gCasino blackjack was my first project as a student at gSchool. It’s a fully functioning blackjack game including a book button that automatically performs an action based upon the “book” best odds.",
                techDescriptions: [{
                    title: 'jQuery UI',
                    body: 'I used jQuery UI to handle the drag and drop functionality of the chips. Chips are recognized both for betting and also for ‘coloring up’ or exchanging multiple smaller valued chips for a single higher value.'
                }, {
                    title: 'Object Oriented',
                    body: 'Object oriented programming was essential for this project. Attributes like the cards left in the deck and a player’s total chip account needed to persist between multiple hands.'
                }, {
                    title: 'Game Logic ',
                    body: 'The game logic involved was pretty complicated. It required the ability to process aces that could be counted as a 1 or 11, a computer AI to play correctly, and a ‘book’ feature that identified both hands and played the best odds.'
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
                description: "Seventy-Three was my capstone project for gSchool and the most impactful project I’ve created. It is a platform to organize and empower a support network for individuals being released from a 72 hour medical hold.",
                techDescriptions: [{
                    title: 'Modular',
                    body: 'Seventy-Three is designed to be a dashboard of tools, so I thought it was important to create a modular structure. I wrote reusable custom directives to house the components and make it Angular 2.0 friendly.'
                }, {
                    title: 'Angular Material',
                    body: 'I used Angular Material to design and layout the app. I was able to start from scratch and, in just a couple days, I was able to combine their design and UI components to create the app.'
                }, {
                    title: 'Orderly Integration',
                    body: 'Also in it’s own custom directive that can be reused to show a bar chart on any dataset, I used NVD3 to generate an interactive chart to display information on insurance coverage provided by Orderly Health.'
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
                description: 'Twilio Tale is a story-telling app. Users can create a group story via sms and mms texts. It receives a text, forwards it’s content as a prompt to the next user, updates the story, and sends a link to the previous user to view the whole accumulated story.',
                techDescriptions: [{
                    title: 'Twilio API',
                    body: 'Twilio Tale was designed as a way to thank Matt Makai, a Developer Evangelist at Twilio, for a presentation he gave to the cohort. As you can imagine it relied heavily on Twilio’s technology and API.'
                }, {
                    title: 'SMS Handling',
                    body: 'I had the chance to learn how to send, receive, and route text messages through the development of Twilio Tale. It conditionally handles texts from the user whose turn it is, as well as users who text out of turn.'
                }, {
                    title: 'Express Routes',
                    body: 'While not overly complicated, Twilio Tale is an example of my early experiences with express routing. I was able to parse incoming data to appropriately save, forward, or respond to each request.'
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
                description: "Half-Assed Vegan is for anyone who agrees with the moral tenants of veganism, but just can’t give up the bacon. It pairs two users based upon the days they can commit to being a vegan to create the impact of a whole vegan.",
                techDescriptions: [{
                    title: 'Relational Database',
                    body: 'This project was a great way to delve into Postgres, Psql, and relational databases. It both stores user information including email address and day selection and uses that information to create matches.'
                }, {
                    title: 'Yummly API',
                    body: ''
                }, {
                    title: '',
                    body: ''
                }],
                technologies: ['nodeJS', 'express', 'HTML', 'CSS', 'AngularJS', 'JavaScript', 'PostgreSQL']
            },

            {
                title: 'The LP Story',
                background: 'img/lplogo.png',
                span: {
                    row: 1,
                    col: 1
                },
                description: 'The LP Story provides additional information on my past in marketing, leadership, and me as an entrepreneur. You can see accomplishments, examples of my previous work, and peer recommendations.',
                techDescriptions: [{
                    title: 'Volunteerism',
                    body: 'I’ve done a considerable amount of work helping in the treatment and understanding of mental illness. The blog has links to some of the youth outreach and public education projects I’ve been involved with.'
                }, {
                    title: 'Content Marketing',
                    body: 'The LP Story hosts content I’ve generated for campaigns with both hobbyDB and EESI Lighting. The content spans in medium from articles to infographics to live events and video contests.'
                }, {
                    title: 'WordPress',
                    body: 'The LP Story was created by combining numerous components from a Wordpress template tool and tying them together with additional contact and other utility add-ons and widgets.'
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
                description: "Spout-About runs sentiment analysis on each response for the 2015 democratic presidential debate and visualizes the result using a color coded particle simulator flowing from each candidates mouth.",
                techDescriptions: [{
                    title: 'Alchemy API',
                    body: 'I used IBM Watson’s Alchemy api to run the sentiment analysis for each of the responses for the debate. I used the keywords, sentiment type, and sentiment score from the response to populate the spout characteristics.'
                }, {
                    title: 'Text Parsing',
                    body: 'One of the challenges of this app was dividing the debate into a series of responses. The app parses a debate to isolate and separate a single candidate response to send to Alchemy for processing.'
                }, {
                    title: 'p5.js Visualization',
                    body: 'The results of the sentiment analysis are used to create a flow of particles from each candidates mouth. Not only is the flow customized to the current keyword and sentiment, it also replicates the way particles flow in nature.'
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