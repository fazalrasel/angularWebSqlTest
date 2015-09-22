(function () {
    "use strict";

    angular.module('common')
        .factory('createTablesService', createTablesService);

    function createTablesService(webSqlDatabaseService) {
        var createTables = {
            createTables: createTables
        }

        return createTables;

        // Imp
        function createTables() {
            var db = webSqlDatabaseService.db();

            // delete users table
            db.dropTable('users');
            // creating users table
            db.createTable('users', {
                "id": {
                    'type': 'INTEGER',
                    'null': 'NOT NULL',
                    "primary": true,
                    'auto_increment': false
                },
                "userName" : {
                    'type' : 'TEXT',
                    'null' : "NOT NULL"
                },
                "password" : {
                    'type' : 'TEXT',
                    'null' : "NOT NULL"
                }
            });

            // deleting subjects table
            db.dropTable('subjects');
            // creating subjects table
            db.createTable('subjects', {
                "id": {
                    'type': 'INTEGER',
                    'null': 'NOT NULL',
                    "primary": true,
                    'auto_increment': false
                },
                "subjectName" : {
                    'type' : 'TEXT',
                    'null' : "NOT NULL"
                }
            });

            // droping chapters table
            db.dropTable('chapters');
            // creating chapters table
            db.createTable('chapters', {
                "id": {
                    'type': 'INTEGER',
                    'null': 'NOT NULL',
                    "primary": true,
                    'auto_increment': false
                },
                "chapterName" : {
                    'type' : 'TEXT',
                    'null' : "NOT NULL"
                },
                "subjectId" : {
                    'type' : 'INTEGER',
                    'null' : "NOT NULL"
                }
            });

            // droping question table
            db.dropTable('questions');
            // creating question table
            db.createTable('questions', {
                "id": {
                    'type': 'INTEGER',
                    'null': 'NOT NULL',
                    "primary": true,
                    'auto_increment': false
                },
                "question" : {
                    'type' : 'TEXT',
                    'null' : "NOT NULL"
                },
                "questionType" : {
                    'type' : 'TEXT',
                    'null' : "NOT NULL"
                },
                "subjectId" : {
                    'type' : 'TEXT',
                    'null' : "NOT NULL"
                },
                "chapterId" : {
                    'type' : 'INTEGER',
                    'null' : "NOT NULL"
                },
                "ans" : {
                    'type' : 'INTEGER',
                    'null' : "NULL"
                },
                "optionAnswers" : {
                    'type' : 'TEXT',
                },
                "optionNonAnswers" : {
                    'type' : 'TEXT',
                }
            });
        }
    }

}());