angular.module('Recipeoples.profile', [])

.controller('ProfileController', function($scope, ProfileFactory){
  //angular.extend($scope, ProfileFactory); WE DONT NEED THIS, I THINK.
  //$scope.user = ProfileFactory.getUserInfo(tokenOrSomething);
  $scope.hello = "Hello User!"
  

  //$scope.userecipes = ProfileFactory.getRecipes(userid)
  //$scope.usergroups = ProfileFactory.getGroups(userid)
  $scope.userrecipes = ["this is a recipe", 'also, this', 'this, too, is a recipe']
  $scope.usergroups = ["Dunder-Mifflin Pot-Luck", "Bowling Team", "Hudak Family"];
  //DUMMY^

  
  // $scope.goToRecipe = ProfileFactory.goToRecipe
  // $scope.goToGroup = ProfileFactory.goToRecipe
  
})

.factory('ProfileFactory', function($http){
  //var data = {}  MIGHT BE HELPFUL
  
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
    url: "/api/recipes/author/" + userid
   })
    .then(function(res){
      //data.recipes = res.data;
      console.log('getRecipes response data: ', res.data);
    });
  };

  var getGroups = function (userid){
   return $http({
    method: 'GET',
    url: "/api/group/members/" + userid
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
   	 getUserInfo:getUserInfo,
  	 getRecipes:getRecipes,
   	 getGroups:getGroups,
  	 goToRecipe:goToRecipe,
   	 goToGroup:goToGroup
  };
});