(function () {
    "use strict";

    angular.module('common')
        .factory('usersService', usersService);

    function usersService(webSqlDatabaseService) {
        var users = {
            getAllUsers: getAllUsers,
            //getUserById: getUserById
        }

        return users;

        // Imp

        function getAllUsers() {
            var db = webSqlDatabaseService.db();
            return db.selectAll('users')
                .then(successFunction)
                .catch(errorFunction)
        }

        //function getUserById(userId) {
        //    init();
        //    return db.select('users', {
        //        "id": userId
        //    })
        //        .then(successFunction)
        //        .catch(errorFunction)
        //}

        // promise callback
        function successFunction(results) {
            var users = [];
            angular.forEach(results.rows, function (user) {
                users.push(user);
            })
            return users;
        }

        function errorFunction() {
            console.log('Error Fail to get data');
        }
    }


}());