(function () {
    "use strict";

    angular.module('common')
        .factory('appStartService', appStartService);

    function appStartService(webSqlDatabaseService, localStorageService, createTablesService, seedTablesService, usersService) {
        var appStart = {
            appStart: startApp
        }

        return appStart;


        // Imp
        function startApp() {
            // Create database
            webSqlDatabaseService.createDatabase();

            // check localStorage for appReady
            // if appReady is present or true
            // then no need to create and seed database
            var appReady = localStorageService.get('appReady');

            if (!appReady) {

                // creating table
                createTablesService.createTables();

                // seeding tables
                seedTablesService.seedTables();

                // set the appReady to true
                localStorageService.set('appReady', true);
            }
        }

    }
}());