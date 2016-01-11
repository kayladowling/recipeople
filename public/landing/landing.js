angular.module('Recipeoples.landing', [])

.controller('LandingController', function($scope, $rootScope, getFactory) {
  $scope.recipe = {};
  $scope.groups = {};
  var dummyRecipe = {
    title: 'Awesome Burger',
    image_url: 'http://dxz0iw137d3y6.cloudfront.net/wp-content/uploads/2014/05/BrantLakeWagyu.jpg',
    ingredients: ['One Bun', 'One Burger', 'Like a ton of Cheese'],
    directions: 'Put burger in bun. Spread cheese. Have a heartattack.',
    author: 1,
    likedBy: ['Bob', 'Bud', 'Boshika'],
    dislikedBy: [],
    groups: ['Burgers Anonymous', 'Moose Lodge', 'HiRs'],
    reviews: []
  };

   $scope.groups = dummyRecipe.groups;
  $scope.recipes = [];
  for (var i = 0; i < 5; i++) {
   $scope.recipes.push(Object.create(dummyRecipe));
  }

  
  //TO DO : Get the REAL GROUP Data for dropdown


  $scope.createGroup = function() {
    PostRecipeFactory.createGroup($scope.recipe);
  };

})

.factory('CreateGroupFactory', function($http) {
  var createGroup = function(data) {
    return $http({
        method: 'POST',
        url: '/api/landing',
        data: data
      })
      .then(function(response) {
        return response.data;
      });
  };
  return {
    createGroup: createGroup
  };

});





   // Returns a bunch of recipes.
  // getFactory.recipes();
