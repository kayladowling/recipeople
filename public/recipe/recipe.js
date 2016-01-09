angular.module('Recipeoples.recipe', [])


.controller('RecipeController', function($scope, $rootScope, getFactory){
  // TODO: Delete this preseeded focus recipe once being set elsewhere
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

  var recipe = $scope.recipe = $rootScope.focusRecipe;

  // Create authorname variable from recipe in order to display.
  getFactory.userById(recipe.author).then(function(author) {
    $scope.authorName = author.username;
  });

  // Sets the root scope's focus user to be read by profile.js.
  $scope.focusUser = function(id) {
    getFactory.userById(id).then(function(user){
      $rootScope.focusUser = user;
      console.log('Focus user:', $rootScope.focusUser);
    });
  };
});