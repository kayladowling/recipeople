angular.module('Recipeoples.profile', [])

.controller('ProfileController', function($scope, ProfileFactory){
  ProfileFactory.getUserInfo();
  $scope.hello = "Hello User!"
  $scope.recipes = ProfileFactory.getRecipes(userid)
  $scope.groups = ProfileFactory.getGroups(userid)
  $scope.goToRecipe = ProfileFactory.goToRecipe
  $scope.goToGroup = ProfileFactory.goToRecipe
  
})

.factory('ProfileFactory', function($http){
  //var data = {}
  
  var getUserInfo = function(tokenOrSomething){
    return $http({
    method: 'GET',
    url: "/api/users/"+ tokenOrSomething
   })
    .then(function(res){
      //data.user = res.data;
      console.log('getUserInfo response data: ', res.data);
    });
  };

  var getRecipes = function (userid){
   return $http({
    method: 'GET',
    url: "/api/recipes/" + userid
   })
    .then(function(res){
      //data.recipes = res.data;
      console.log('getRecipes response data: ', res.data);
    });
  };

  var getGroups = function (userid){
   return $http({
    method: 'GET',
    url: "/api/groups/" + userid
   })
    .then(function(res){
      //data.groups = res.data;
      console.log('getGroups response data: ', res.data);
    });
  };

  var goToRecipe = function (id){
   return $http({
    method: 'GET',
    url: "/api/recipe/" + id
   })
    .then(function(res){
      console.log('goToGroup response data: ', res.data);
    });
  };

  var goToGroup = function (id){
   return $http({
    method: 'GET',
    url: "/api/group/" + id
   })
    .then(function(res){
      console.log('goToGroup response data: ', res.data);
    });
  };
  
  return {
  	recipes:recipes,
  	groups:groups,
  	getUserInfo:getUserInfo,
  	getRecipes:getRecipes,
  	getGroups:getGroups,
  	goToRecipe:goToRecipe,
  	goToGroup:goToGroup
  };
});