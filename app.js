(function () {
    "use strict";

    angular.module('websqlTest', ["common", "modelTest"])
        .run(function (appStartService) {
            appStartService.appStart();
        });
}());
