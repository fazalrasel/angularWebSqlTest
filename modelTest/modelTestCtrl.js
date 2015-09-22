(function () {
    "use strict";

    angular.module('modelTest')
        .controller('modelTestCtrl', modelTestCtrl);

    function modelTestCtrl(usersService, subjectsService) {
        var vm = this;

        vm.users = [];
        vm.subjects = [];
        //vm.questions = [];

        init();

        function init() {
            getUsers();
            getSubjects();
        }

        function getUsers() {
            return usersService.getAllUsers().then(function (users) {
                //console.log(users);
                vm.users = users
                //return vm.users;
            })
        }

        function getSubjects() {
            return subjectsService.getAllSubjects()
                .then(function (subjects) {
                    vm.subjects = subjects;
                })
        }

    }

}());