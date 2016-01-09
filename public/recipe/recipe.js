angular.module('Recipeoples.recipe', [])


.controller('RecipeController', function($scope, $rootScope, RecipeFactory, getFactory){
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

  // Sets the root scope's focus user.
  $scope.focusUser = function(id) {
    getFactory.userById(id).then(function(user){
      $rootScope.focusUser = user;
      console.log('Focus user:', $rootScope.focusUser);
    });
  };

  // TODO: Remove once done testing.
  getFactory.recipesByLiked(1).then(function(recipe) {
    $scope.TEST = recipe[0];
  });

})


.factory('RecipeFactory', function($http){

  var getAuthorName = function (userid) {
    return 'Awesome Dude';

    // TODO: Uncomment once users db query is in place.
    // return $http({
    //  method: 'GET',
    //  url: '/api/users/id/' + userid
    // })
    //  .then(function(res){
    //    console.log('Got recipe author', res.data);

    //    return res.data[0].username;
    //  });
  };


  return {
    getAuthorName: getAuthorName
  };
});