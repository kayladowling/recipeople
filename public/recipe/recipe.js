angular.module('Recipeoples.recipe', [])


.controller('RecipeController', function($scope, $rootScope, RecipeFactory){
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

  // TODO: Refactor below to work with promise.
  var authorName = $scope.authorName = RecipeFactory.getAuthorName(recipe.author);

})


.factory('RecipeFactory', function($http){

  var getAuthorName = function (userid){
    return 'Awesome Dude';

  //  TODO: Comment in once users db query is in place.
  //  return $http({
  //   method: 'GET',
  //   url: "/api/users/id/" + userid
  //  })
  //   .then(function(res){
  //     console.log('Got recipe author', res.data);

  //     return res.data[0].username;
  //   });
  };


  return {
    getAuthorName: getAuthorName
  };
});