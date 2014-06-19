'use strict';

angular.module('famousAngularStarter',
  ['ngAnimate', 'ngCookies',
    'ngTouch', 'ngSanitize',
    'ngResource', 'ui.router',
    'famous.angular' ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'markups/main.html',
        controller: 'MainCtrl'
      })
      .state('haml', {
        url: '/haml',
        templateUrl: 'markups/haml.html',
        controller: 'MainCtrl'
      })
      .state('jade', {
        url: '/jade',
        templateUrl: 'markups/jade.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
