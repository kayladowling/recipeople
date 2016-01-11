angular.module('Recipeoples.group', [])

.controller('GroupController', function($scope, $rootScope, getFactory){
  $rootScope.focusGroup = $rootScope.focusGroup || getFactory.groupsByName('Golden Saucer');
  $scope.group = $rootScope.focusGroup;
  $scope.hello = "group template";

  $scope.setFocusRecipe = function(recipe){
    $rootScope.focusRecipe = recipe;

  }
});

