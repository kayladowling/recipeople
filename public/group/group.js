angular.module('Recipeoples.group', [])

.controller('GroupController', function($scope){
  $scope.group = {
    name: "Carnivores",
    members: ['Bear', 'Tiger', 'Alligator'],
    recipes: ['Baby Rabbit Rissotto', 'Fresh BackPacker', 'Zebra']
  };

  $scope.hello = "group template";
});