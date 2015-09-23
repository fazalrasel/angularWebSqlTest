(function () {
    "use strict";
    //document.addEventListener()

    angular.module('websqlTest', ["common", "modelTest"])


    document.addEventListener('deviceready', onDeviceReady, false);

    function onDeviceReady() {
        console.log('device ready');
        angular.module('websqlTest')
            .run(function (appStartService) {
                appStartService.appStart();
            });
    }


}());
