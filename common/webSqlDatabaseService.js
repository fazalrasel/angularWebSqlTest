(function () {
    "use strict";

    angular.module('common')
        .factory('webSqlDatabaseService', webSqlDatabaseService);

    function webSqlDatabaseService($webSql) {
        var webSqlDatabase = {
            createDatabase: createDatabase,
            db: returnDB
        }

        return webSqlDatabase;

        // Imp
        var db;

        function createDatabase() {
            db = $webSql.openDatabase('wegenius', '1.0', 'Test DB', 2 * 1024 * 1024);
        }

        function returnDB() {
            return db;
        }
    }

}());