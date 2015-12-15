(function () {
    angular.module('myApp')
        .factory('culture', Culture);

    function Culture() {
        var content = [];

        var titles = ['Inspiration', 'Superpowers', 'Motivation', 'Support'];

        var subtitles = ['Who inspires me and why?', 'What am I great at?', 'What gets me out of bed?', 'How do I rely on others to improve?'];
        var answers = ['Google and the Dalai Llama! Finding true happiness and not being evil seem like to pretty good aspirations to me. I admire the Dalai Llama in his ability to find joy and compassion almost everything he does. I try to do the same, especially when it comes to finding humor in difficult situations. A lot of times the most embarrassing mistakes become the most entertaining stories. \n Google inspires me in the way that they open the table to any and all ideas. A car that drives itself, why not? A neural network that dreams, of course! My best work comes from environments where ideas are fluid and there isn’t a box to think outside of in the first place.', 'Everybody is great at something. Everyone has a superpower or two. Mine are public speaking and problem solving. I’ve always loved the rush of getting in front of a group of people and holding their attention for a time. I love the connection that’s created between myself and the audience, and the power of that connection to create positive change in myself and others. \n Debugging, business strategy, data structure, interpersonal relationships, sudoku, fizz-buzz, you name the problem, and I’ll enjoy finding the solution. It’s just the way I’m wired. As a developer, I love the ability to take a really large challenge and break it into a bunch of really small pieces. Then it becomes a game of solving the next little step until the overarching problem is solved.', 'Curiosity and a desire to do good! Whether curiosity means learning a new framework, language, or library or seeing how much a team can get accomplished given its resources, it is a major driving force behind a lot of what I do. \n Another huge driver for me is the ability to make a positive and lasting change on the world around me. I often tell people that my greatest accomplishment while owning my own business was not the $5 million in revenue we earned, but the carbon equivalent of planting 400,000+ new trees every year.', 'None of the things I have accomplished in my life have been done alone. I rely heavily on others to challenge me and help me focus on the job at hand. The downside to curiosity is that it can sometimes lead down a rabbit hole. I’ve come to understand that I work much better when someone else can help bring me back to the main problem every now and again.\n I’m very much a self-motivator, but nothing is as motivating to me as contributing to the work of a larger group. There’s something about knowing that my work is an important part of an overall project that helps push my performance and growth further than without.']


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