angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('login', {
    url: '/page6',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page7',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('home', {
    url: '/page8',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('selectExistingFamily', {
    url: '/page9',
    templateUrl: 'templates/selectExistingFamily.html',
    controller: 'selectExistingFamilyCtrl'
  })

  .state('newFamily', {
    url: '/page10',
    templateUrl: 'templates/newFamily.html',
    controller: 'newFamilyCtrl'
  })

$urlRouterProvider.otherwise('/page6')

  

});