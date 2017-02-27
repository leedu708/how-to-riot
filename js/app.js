var howTo = angular.module('howTo', ['ui.router', 'ngAnimate', 'ngSanitize']);

howTo.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('about', {
      url: '/',
      templateUrl: 'views/about.html'
    })

    .state('api', {
      url: '/api',
      templateUrl: 'views/api.html',
      controller: 'ApiCtrl'
    })

    .state('library', {
      url: '/library',
      templateUrl: 'views/library.html'
    })
});

howTo.run(function($rootScope) {
  $rootScope.$on('$stateChangeError', console.log.bind(console));
});
