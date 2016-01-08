angular.module('Recipeoples.recipe', [])

.controller('RecipeController', function($scope, $rootScope){
  //TODO: Delete this preseeded focus recipe when being properly set elsewhere
  $rootScope.focusRecipe = {
    title: 'Awesome Burger',
    image_url: 'http://dxz0iw137d3y6.cloudfront.net/wp-content/uploads/2014/05/BrantLakeWagyu.jpg',
    ingredients: ['One Bun', 'One Burger', 'Like a ton of Cheese'],
    directions: 'Put burger in bun. Spread cheese. Heartattack.',
    author: 'hjgfskjhfglsj',
    likedBy: [],
    dislikedBy: [],
    groups: [],
    reviews: []
  };

  var recipe = $scope.recipe = $rootScope.focusRecipe;
  
});