'use strict';
angular.module('AppD').controller('ApplicationController', function($scope, $location,LoginService) {
    LoginService.isLogin(loginRequired, alreadyLogin);
    $scope.$parent.headerName = "Applications";
    function loginRequired() {
        console.log("ApplicationController LoginRequired");
        $location.path("\login");
    }
    function alreadyLogin() {
        console.log("ApplicationController alreadyLogin");
    }

});

