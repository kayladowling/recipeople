angular.module('Recipeoples.landing', [])

.controller('LandingController', function($scope, $location, LandingFactory){
  $scope.recipe = {};

  LandingFactory.getRecipe(1).then(function(recipe) {
    $scope.recipe = recipe;
  });
})

.factory('LandingFactory', function($http) {

  var getRecipe = function(userid) {
    return $http({
      method: 'GET',
      url:'/api/recipes/author/' + userid
    })
    .then(function(resp) {
      return resp.data[0];
    });
  }

  return {
  	getRecipe: getRecipe
  }

 }); 