(function () {
    'use strict'

    angular.module('app.components.projects')
        .directive('projects', projectDirective);

    function projectDirective() {
        return {
            restrict: 'E',
            templateUrl: 'components/projects/projects.html',
            scope: {},
            controller: ProjectController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    ProjectController.$inject = ['projectHolder', '$mdDialog'];

    function ProjectController(projectHolder, $mdDialog) {
        var vm = this;

        vm.projects = projectHolder;
        vm.showDetails = function (ev, index) {
            $mdDialog.show({
                controller: projectDialogController,
                controllerAs: 'vm',
                templateUrl: 'components/projects/projects.dialog.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                locals: {
                    project: vm.projects[index]
                }
            })
        }
        console.log(vm.projects)


        function projectDialogController($mdDialog, project) {
            var vm = this;
            vm.test = 'test'
            console.log(project.title)
            vm.project = project;
            vm.cancel = function () {
                $mdDialog.hide();
            }
        }
    }

})();