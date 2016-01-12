angular.module('Recipeoples.profile', [])

.controller('ProfileController', function($scope, $rootScope, getFactory, ProfileFactory){
  angular.extend($scope, ProfileFactory); 
  
  //retrieves user details via token
  getFactory.userByToken().then(function(data){
    console.log("USERDATA", data);
    $scope.user = data;

    //once $scope has user data, get recipes and groups for user
    getFactory.recipesByAuthor($scope.user.username).then(function(recipes){
      console.log("getting recipes", recipes);
      $scope.userrecipes = recipes;
    })

    getFactory.groupsByMember($scope.user.username).then(function(groups){
      console.log("username", $scope.user.username);
      console.log("getting groups", groups);
      $scope.usergroups = groups;
    })
  })

  $scope.goToRecipe = ProfileFactory.goToRecipe 
  $scope.goToGroup = ProfileFactory.goToGroup  
  
})

.factory('ProfileFactory', function($http, $location, $rootScope){

  var goToRecipe = function (title){
   return $http({
    method: 'GET',
    url: "/api/recipes/title/" + title
   })
    .then(function(res){
      console.log('goToGroup response data: ', res.data);
      $rootScope.focusRecipe = res.data[0];
      $location.path('/recipe/')
    });
  };

  var goToGroup = function (name){
   return $http({
    method: 'GET',
    url: "/api/groups/name/" + name
   })
    .then(function(res){
      console.log('goToGroup response data: ', res.data);
      $rootScope.focusGroup = res.data[0];
      $location.path('/group/')
    });
  };
  
   return {
  	 goToRecipe:goToRecipe,
   	 goToGroup:goToGroup
  };
});