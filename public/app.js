angular.module('Recipeoples', [
	'ngRoute', 
  'Recipeoples.services',
	'Recipeoples.landing', 
  'Recipeoples.auth',
	'Recipeoples.profile',
  'Recipeoples.post',
  'Recipeoples.recipe', 
  'Recipeoples.group',
  'Recipeoples.settings'
])

.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'landing/landing.html',
      controller: 'LandingController',
      requireAuth: true
    })
    .when('/signin', {
      templateUrl: 'auth/signin.html',
      controller: 'AuthController'
    })
    .when('/profile', {
      templateUrl: 'profile/profile.html',
      controller: 'ProfileController',
      requireAuth: true
    })
    .when('/post', {
      templateUrl: 'post/post.html',
      controller: 'PostController',
      requireAuth: true
    })
    .when('/recipe', {
      templateUrl: 'recipe/recipe.html',
      controller: 'RecipeController',
      requireAuth: true
    })
    .when('/group', {
      templateUrl: 'group/group.html',
      controller: 'GroupController',
      requireAuth: true
    })
    .when('/settings', {
      templateUrl: 'settings/settings.html',
      controller: 'SettingsController',
      requireAuth: true
    }) 
    .otherwise('/');

  // TODO: Uncomment once server-side authentication is done.
  // Add interceptor to attach tokens to ajax calls.
  // $httpProvider.interceptors.push('AttachTokens');
})

.factory('AttachTokens', function ($window) {
  var attach = {
    request: function (object) {
      var jwt = $window.localStorage.getItem('com.recipeople');
      if (jwt) {
        object.headers['x-access-token'] = jwt;
      }
      object.headers['Allow-Control-Allow-Origin'] = '*';
      return object;
    }
  };
  return attach;
})

.run(function ($rootScope, $location, AuthFactory) {
  
  // Checks the authentication token on all routes marked 'requireAuth'.
  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
    if (next.$$route && next.$$route.requireAuth && !AuthFactory.isAuth()) {
      $location.path('/signin');
    }
  });
});