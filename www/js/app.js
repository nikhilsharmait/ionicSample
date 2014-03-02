'use strict';
var myApp = angular.module('starter', [
    'PhoneGap',
    'LocalStorageModule',
    'ionic'
]);
myApp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'partials/home.html',
                controller: 'HomeController'});
    $urlRouterProvider.otherwise("/");
});

