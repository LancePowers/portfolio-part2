(function () {
    angular.module('myApp')
        .factory('culture', Culture);

    function Culture() {
        var content = [];

        var titles = ['Inspiration', 'Superpowers', 'Motivation', 'Support'];

        var subtitles = ['Who inspires me?', 'What am I great at?', 'What gets me out of bed?', 'How do I rely on others to improve?'];
        var answers = [
            ['Google and the Dalai Llama! Finding true happiness and not being evil seem like to pretty good aspirations to me. I admire the Dalai Llama in his ability to find joy and compassion in almost everything he does. I try to do the same, especially when it comes to finding humor in difficult situations.', 'Google inspires me in the way they open the table to any and all ideas. A car that drives itself, why not? A neural network that dreams, of course!'],

            ['Problem solving! Debugging, strategy, data structure, interpersonal relationships, sudoku, fizz-buzz, you name the problem, and I’ll enjoy finding the solution. It’s just the way I’m wired.', 'As a developer, I love the ability to take a really large challenge and break it into a bunch of really small pieces. Then it becomes a game of solving the next little step until the overarching problem is solved.'],

            ['Curiosity and a desire to do good! Whether curiosity means learning a new framework, language, or library or seeing how much a team can get accomplished given its resources, it is a major driving force behind what I do.', 'So is the ability to make a positive and lasting change on the world around me. My prior business greatest accomplishment was not the $5 million in revenue, but the carbon equivalent of planting 400,000+ new trees every year.'],

            ['I rely on others to challenge me and help me focus on the job at hand. I’ve come to understand that I work much better when someone else can help bring me back to the main problem every now and again.', 'Although I’m very much a self-motivator, nothing is as motivating to me as contributing to the work of a larger group. Knowing that my work is an important part of an overall project helps push my performance and growth further than without.']]


        titles.forEach(function (title, index) {
            content.push({
                title: title,
                subtitle: subtitles[index],
                answer: answers[index],
                icon: 'img/' + title + '.svg'
            })
        })

        return {
            content: content
        }
    }


})()