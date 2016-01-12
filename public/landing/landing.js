angular.module('Recipeoples.landing', [])

.controller('LandingController', function($scope, $rootScope, getFactory, CreateGroupFactory) {

 // $scope.recipes = getFactory.recipes();
 console.log(getFactory.recipes());



 });



  // $rootScope.focusRecipe = $rootScope.focusRecipe || {
  //   title: 'Awesome Burger',
  //   image_url: 'http://dxz0iw137d3y6.cloudfront.net/wp-content/uploads/2014/05/BrantLakeWagyu.jpg',
  //   ingredients: ['One Bun', 'One Burger', 'Like a ton of Cheese'],
  //   directions: 'Put burger in bun. Spread cheese. Have a heartattack.',
  //   author: 1,
  //   likedBy: ['Bob', 'Bud', 'Boshika'],
  //   dislikedBy: [],
  //   groups: ['Burgers Anonymous', 'Moose Lodge', 'HiRs'],
  //   reviews: []
  // };

  // var recipe = $scope.recipe = $rootScope.focusRecipe;


 

//   // getFactory.userById(recipe.author).then(function(author) {
//   //   $scope.authorName = author.username;
//   // });

//   // Sets the root scope's focus user to be read by profile.js.
//   $scope.focusUser = function(id) {
//     getFactory.userById(id).then(function(user){
//       $rootScope.focusUser = user;
//       console.log('Focus user:', $rootScope.focusUser);
//     });
//   };
// });







  
   // $scope.recipe = {};
 //   $scope.groups = {};
   
 // var dummyRecipe = {
 //    title: 'Awesome Burger',
 //    image_url: 'http://dxz0iw137d3y6.cloudfront.net/wp-content/uploads/2014/05/BrantLakeWagyu.jpg',
 //    ingredients: ['One Bun', 'One Burger', 'Like a ton of Cheese'],
 //    directions: 'Put burger in bun. Spread cheese. Have a heartattack.',
 //    author: 1,
 //    likedBy: ['Bob', 'Bud', 'Boshika'],
 //    dislikedBy: [],
 //    groups: ['Burgers Anonymous', 'Moose Lodge', 'HiRs'],
 //    reviews: []
 //  };

   
 //  $scope.groups = dummyRecipe.groups;
 //   $scope.recipes = [];
 //   for (var i = 0; i < 5; i++) {
 //    $scope.recipes.push(Object.create(dummyRecipe));
 //   }
 
   
 //   //TO DO : Get the REAL GROUP Data for dropdown
 //   $scope.testing = function(data) {
 //    console.log(data);
 //   }

 //   $scope.createGroup = function(data) {
 //    var newData = {name:data};
 //    console.log(data);
 //    CreateGroupFactory.createGroup(newData);
 //   };
 
 // })
 
 // .factory('CreateGroupFactory', function($http) {
 //   var createGroup = function(data) {
 //     return $http({
 //         method: 'POST',
 //         url: '/api/groups',
 //         data: data
 //       })
 //       .then(function(response) {
 //        console.log("From POST: " + response.data);
 //         return response.data;
 //       });
 //   };
 //   return {
 //     createGroup: createGroup
 //   };
 



   // Returns a bunch of recipes.
  // getFactory.recipes();