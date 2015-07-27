// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', [ 'ionic', 
                            'starter.controllers',
                            'starter.services',
                            'ngCordova',
                            'ngResource'
                          ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
  })

  .state('app.cedulamanual', {
    url: '/cedulamanual',
    views: {
      'menuContent': {
        templateUrl: 'templates/cedulamanual.html',
        controller: 'CedulaManualCtrl'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.cedula', {
      url: '/cedula',
      views: {
        'menuContent': {
          templateUrl: 'templates/cedula.html',
          controller: 'CedulaCtrl'
        }
      }
    })

  .state('app.ceduladetalle', {
    url: '/ceduladetalle',
    views: {
      'menuContent': {
        templateUrl: 'templates/ceduladetalle.html',
        controller: 'CedulaDetalleCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/cedula');
});
