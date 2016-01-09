angular.module('Recipeoples.profile', [])

.controller('ProfileController', function($scope, $rootScope, ProfileFactory){
  angular.extend($scope, ProfileFactory); 
  
  //retrieves all recipes authored by user, populates profile.html
  ProfileFactory.getRecipes(1).then(function(recipes){
     $scope.userrecipes = recipes;
  })

  //$scope.user = ProfileFactory.getUserInfo(1);
  //$scope.usergroups = ProfileFactory.getGroups(userid)
  $scope.goToRecipe = ProfileFactory.goToRecipe //need parameter!
  $scope.goToGroup = ProfileFactory.goToGroup  //need parameter!

  $scope.user = {username: "need dummy username", testid: 1}
  //DUMMY^
  $scope.usergroups = ["need dummy data", "need moar dummy data"];
  //DUMMY^
  
})

.factory('ProfileFactory', function($http, $location, $rootScope){
  var getUserInfo = function(tokenOrSomething){
    return $http({
    method: 'GET',
    url: "/api/users/testid/"+ tokenOrSomething
   })
    .then(function(res){
      console.log('getUserInfo response data: ', res.data);
      return res.data;
    });
  };

  var getRecipes = function (userid){
   return $http({
    method: 'GET',
    url: "/api/recipes/author/" + userid
   })
    .then(function(res){
      console.log('getRecipes response data: ', res.data);
      return res.data;
    });
  };

  var getGroups = function (userid){
   return $http({
    method: 'GET',
    url: "/api/groups/members/" + userid
   })
    .then(function(res){
      console.log('getGroups response data: ', res.data);
    });
  };

  var goToRecipe = function (title){

   return $http({
    method: 'GET',
    url: "/api/recipes/title/" + title
   })
    .then(function(res){
      console.log('goToGroup response data: ', res.data);
      $rootScope.focusRecipe = res.data;
      $location.path('/recipe/')
    });
  };

  var goToGroup = function (groupid){
   return $http({
    method: 'GET',
    url: "/api/groups/" + groupid
   })
    .then(function(res){
      console.log('goToGroup response data: ', res.data);
      $location.path('/')
    });
  };
  
   return {
   	 getUserInfo:getUserInfo,
  	 getRecipes:getRecipes,
   	 getGroups:getGroups,
  	 goToRecipe:goToRecipe,
   	 goToGroup:goToGroup
  };
});