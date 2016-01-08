angular.module('Recipeoples.post', [])

.controller('PostController', function($scope, $location, PostRecipeFactory){
 $scope.recipe = {};

 $scope.postRecipe = function() {
  PostRecipeFactory.post($scope.recipe);
 };
})

.factory('PostRecipeFactory', function($http) {
  var post = function(data) {
    return $http({
      method: 'POST',
      url: '/api/post',
      data: data
    })
    .then(function(response) {
      return response.data;
    });
  }
  return {
    post: post
  }

});