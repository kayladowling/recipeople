angular.module('Recipeoples.group', [])

.controller('GroupController', function($scope){
  $scope.group = {
    name: "Carnivores",
    members: ['Bear', 'Tiger', 'Alligator'],
    recipes: ['Awesome Burger', 'Spicy Tuna Rolls', 'Sloe Gin Fizz']
  };

  $scope.hello = "group template";
});