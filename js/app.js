var howTo = angular.module('howTo', ['ui.router', 'ngAnimate', 'ngSanitize']);

howTo.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'views/home.html'
    })
});

howTo.run(function($rootScope) {
  $rootScope.$on('$stateChangeError', console.log.bind(console));
});
