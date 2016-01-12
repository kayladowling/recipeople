angular.module('Recipeoples.group', [])

.controller('GroupController', function($scope, $rootScope){
  $rootScope.focusGroup = $rootScope.focusGroup || {
    name: "Carnivores",
    members: ['Bear', 'Tiger', 'Alligator'],
    recipes: ['Awesome Burger', 'Spicy Tuna Rolls', 'Sloe Gin Fizz']
  };
  $scope.group = $rootScope.focusGroup;
  $scope.hello = "group template";

  $scope.setFocusRecipe = function(recipe){
    $rootScope.focusRecipe = recipe;

  }
});

