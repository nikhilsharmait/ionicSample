'use strict';

angular.module('AppD', [
    'PhoneGap',
    'LocalStorageModule',
    'ionic', 
    'starter.services', 
    'starter.controllers'
]).config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // the pet tab has its own child nav-view and history
    .state('tab.pet-index', {
      url: '/pets',
      views: {
        'pets-tab': {
          templateUrl: 'templates/pet-index.html',
          controller: 'PetIndexCtrl'
        }
      }
    })
    $routeProvider
            .when('/', {
                templateUrl: 'partials/applicationPage.html',
                controller: 'ApplicationController'})
            .when('/profile', {
                templateUrl: 'partials/profileScreen.html',
                controller: 'ProfileController'})
            .when('/details', {
                templateUrl: 'partials/detailsScreen.html',
                controller: 'DetailsController'})
            .when('/login', {
                templateUrl: 'partials/loginScreen.html',
                controller: 'LoginController'})
            .otherwise({
                redirectTo: '/'
            });
});
