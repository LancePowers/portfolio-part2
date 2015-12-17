(function () {
    'use strict'

    angular.module('app.components.questions')
        .directive('questions', questionDirective);

    function questionDirective() {
        return {
            restrict: 'E',
            templateUrl: 'components/questions/questions.html',
            scope: {},
            controller: QuestionController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    QuestionController.$inject = ['culture'];

    function QuestionController(culture) {
        var vm = this;
        console.log(culture)
        vm.culture = culture;
    }

})();