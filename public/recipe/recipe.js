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

  $scope.focusUserById = function(userid) {
    // TODO: Refactor below to work with promise.
    $rootScope.focusUser = RecipeFactory.getUserById(userid);
    console.log('Focus user:', $rootScope.focusUser);
  };

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

  var getUserById = function (userid) {
    return {
      username: 'Bob',
      image_url: 'https://pbs.twimg.com/profile_images/1044973752/390dfbe9-eccf-41f9-822e-17c8d4c251b4.jpg',
      liked: [],
      disliked: [],
      groups: [],
      authored: [],
      testid: 1,
      friends: []
    };

    // TODO: Uncomment once users db query is in place.
    // return $http({
    //   method: 'GET',
    //   url: '/api/users/id/' + userid
    // })
    // .then(function(res){
    //   console.log('Got recipe author', res.data);

    //   return res.data[0];
    // });
  };


  return {
    getAuthorName: getAuthorName,
    getUserById: getUserById
  };
});