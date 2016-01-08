angular.module('Recipeople.post', [])

.controller('PostController', function($scope, $location){
 $scope.recipe = {};

 $scope.post = function() {
  Recipeople.post($scope.recipe)
    .then() {
      $
    }
 }
})