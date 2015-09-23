(function () {
    "use strict";

    angular.module('common')
        .factory('seedTablesService', seedTablesService);

    function seedTablesService(webSqlDatabaseService, $http) {
        var seedTables = {
            seedTables: seedTables
        }

        return seedTables;

        // Imp
        function seedTables() {
            $http.get('data/test_data.json')
                .success(function (data) {
                    var db = webSqlDatabaseService.db();

                    // seeding users table
                    angular.forEach(data.users, function (user) {
                        db.insert('users', {
                            "id": user.id,
                            "userName": user.userName,
                            "password": user.password
                        });
                    });
                    // seeding subjects table
                    angular.forEach(data.subjects, function (subject) {
                        db.insert('subjects', {
                            "id": subject.id,
                            "subjectName": subject.subjectName
                        })
                    });
                    // seeding chapters table
                    angular.forEach(data.chapters, function (chapter) {
                        db.insert('chapters', {
                            "id": chapter.id,
                            "chapterName": chapter.chapterName,
                            "subjectId" : chapter.subjectId
                        });
                    });


                     //seeding questions table
                    angular.forEach(data.questions, function (question) {
                        db.insert('questions', {
                            "id": question.id,
                            "questionType": question.questionType,
                            "question": question.question,
                            "subjectId": question.subjectId,
                            "chapterId": question.chapterId,
                            "ans": question.ans,
                            "optionNonAnswers": JSON.stringify(question.optionNonAnswers),
                            "optionAnswers": JSON.stringify(question.optionAnswers)
                        });
                    });

                })


        }
    }

}());