(function () {
    "use strict";

    angular.module('common')
        .factory('subjectsService', subjectsService);

    function subjectsService(webSqlDatabaseService) {
        var subjects = {
            getAllSubjects: getAllSubjects,
            //getSubjectById: getSubjectById
        }

        return subjects;

        // Imp

        function getAllSubjects() {
            var db = webSqlDatabaseService.db();
            return db.selectAll('subjects')
                .then(successSubjects)
                .catch(errorSubjects)
        }

        //function getSubjectById(subjectId) {
        //    return db.select('subjects')
        //}

        // promise callback
        function successSubjects(results) {
            var subjects = [];
            angular.forEach(results.rows, function (subject) {
                subjects.push(subject);
            });
            return subjects;
        }

        function errorSubjects(error) {
            console.log('Error No Subject found');
        }
    }

}());