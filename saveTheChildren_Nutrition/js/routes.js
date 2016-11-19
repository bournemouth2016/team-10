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

  .state('selectExistingIndividual', {
    url: '/page9',
    templateUrl: 'templates/selectExistingIndividual.html',
    controller: 'selectExistingIndividualCtrl'
  })

  .state('newIndividual', {
    url: '/page10',
    templateUrl: 'templates/newIndividual.html',
    controller: 'newIndividualCtrl'
  })

  .state('currentFoodHabits', {
    url: '/page11',
    templateUrl: 'templates/currentFoodHabits.html',
    controller: 'currentFoodHabitsCtrl'
  })

  .state('reccomendedFoods', {
    url: '/page12',
    templateUrl: 'templates/reccomendedFoods.html',
    controller: 'reccomendedFoodsCtrl'
  })

  .state('report', {
    url: '/page13',
    templateUrl: 'templates/report.html',
    controller: 'reportCtrl'
  })

$urlRouterProvider.otherwise('/page6')

  

});