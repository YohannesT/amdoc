'use strict';

/**
 * @ngdoc overview
 * @name githubioApp
 * @description
 * # githubioApp
 *
 * Main module of the application.
 */
angular
  .module('githubioApp', [
    'ngAnimate',
    'ngCookies',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
     .when('/sms', {
        templateUrl: 'views/sms.html',
        controller: 'SmsCtrl',
        controllerAs: 'main'
      })
      .when('/cloudmessaging', {
        templateUrl: 'views/cloud_messaging.html',
        controller: 'CloudMessagingCtrl',
        controllerAs: 'main'
      })
       .when('/contactdirectory', {
        templateUrl: 'views/contact_directory.html',
        controller: 'ContactDirectoryCtrl',
        controllerAs: 'main'
      })
      .when('/howitworks', {
        templateUrl: 'views/how_it_works.html',
        controller: 'HowItWorksCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
