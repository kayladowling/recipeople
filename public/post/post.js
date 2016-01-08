angular.module('Recipeoples.post', [])

.controller('PostController', function($scope, $location, PostRecipeFactory){
 $scope.recipe = {};

 $scope.postRecipe = function() {
  PostRecipeFactory.post($scope.recipe);
 };
})

.factory('PostRecipeFactory', function($http) {
  var postRecipe = function() {
    return $http({
      method: 'POST'
      url: '/post'
      data: {
        recipes : title,
        recipe : image_url,
        recipe: ingredients, 
        recipe: directions,
        recipe: author,
        recipe: likedBy,
        recipe: dislikedBy,
        recipe: groups,
        recipe: reviews,
      }
    })
    .then(function(response) {
      return response.data;
    });
  }

});