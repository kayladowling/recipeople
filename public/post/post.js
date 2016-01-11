angular.module('Recipeoples.post', [])

.controller('PostController', function($scope, $location, PostRecipeFactory) {
  $scope.recipe = {};

  $scope.postRecipe = function() {
    PostRecipeFactory.post($scope.recipe);
  };
})

.factory('PostRecipeFactory', function($http, $location) {
  var post = function(data) {
    return $http({
        method: 'POST',
        url: '/api/recipes',
        data: data
      })
      .then(function(response) {
      $location.path('/profile');
      });
  }
  return {
    post: post
  }
  
});