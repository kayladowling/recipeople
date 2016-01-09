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
      controller: 'LandingController'
    })
    .when('/signin', {
      templateUrl: 'auth/signin.html',
      controller: 'AuthController'
    })
    .when('/signup', {
      templateUrl: 'auth/signup.html',
      controller: 'AuthController'
    })
    .when('/profile', {
      templateUrl: 'profile/profile.html',
      controller: 'ProfileController'
    })
    .when('/post', {
      templateUrl: 'post/post.html',
      controller: 'PostController'
    })
    .when('/recipe', {
      templateUrl: 'recipe/recipe.html',
      controller: 'RecipeController'
    })
    .when('/group', {
      templateUrl: 'group/group.html',
      controller: 'GroupController'
    })
    .when('/settings', {
      templateUrl: 'settings/settings.html',
      controller: 'SettingsController'
    }) 
    .otherwise('/');
});