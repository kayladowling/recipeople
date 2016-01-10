angular.module('Recipeoples.landing', [])

.controller('LandingController', function($scope, $rootScope, getFactory){
$scope.recipe = {};
 $rootScope.focusRecipe = $rootScope.focusRecipe || {
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

   $scope.recipes = [$rootScope.focusRecipe];
  // for (var i = 0; i < 5; i++) {
  //  $scope.recipes.push($rootScope.focusRecipe);
  // }


   // Returns a bunch of recipes.
  // getFactory.recipes();
});