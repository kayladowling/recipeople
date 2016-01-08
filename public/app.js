angular.module('Recipeoples', [
	'ngRoute', 
	'Recipeoples.landing', 
	'Recipeoples.recipe', 
	'Recipeoples.profile'
])

.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'landing/landing.html',
      controller: 'LandingController'
    })
    .when('/recipe', {
      templateUrl: 'recipe/recipe.html',
      controller: 'RecipeController'
    })
    .when('/profile', {
      templateUrl: 'profile/profile.html',
      controller: 'ProfileController'
    })
     .otherwise({
      redirectTo: '/'
    })
})