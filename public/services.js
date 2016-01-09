angular.module('Recipeoples.services', [])

.factory('getFactory', function($http){

  // TODO: Delete these dummy objects once all DB routes are functioning.
  var dummyUser = {
    username: 'Bob',
    image_url: 'https://pbs.twimg.com/profile_images/1044973752/390dfbe9-eccf-41f9-822e-17c8d4c251b4.jpg',
    liked: [],
    disliked: [],
    groups: [],
    authored: [],
    testid: 1,
    friends: []
  };
  var dummyRecipe = {
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
  var dummyGroup = {
    name: 'Comicon',
    members: [],
    recipes: []
  };


  /******** USERS ********/

  // TODO: Fix this once database paths are ready.
  // Returns a single user by their id.
  var userById = function (id) {
    return $http({
      method: 'GET',
      url: '/' // '/api/users/_id/' + id  // <-- uncomment when path is ready
    })
    .then(function(res){
      console.log('Got user with id', id, 'from db:', res.data);
      return dummyUser;  // <-- delete once path is ready
      return res.data[0];
    });
  };

  // TODO: Fix this once database paths are ready.
  // Returns an array of users which match the name.
  var usersByName = function (username) {
    return $http({
      method: 'GET',
      url: '/' // '/api/users/_id/' + id  // <-- uncomment when path is ready
    })
    .then(function(res){
      console.log('Got users with username', username, 'from db:', res.data);
      return [dummyUser];  // <-- delete once path is ready
      return res.data;
    });
  };


  /******** RECIPES ********/

  // Returns a single recipe by their id.
  var recipeById = function (id) {
    return $http({
      method: 'GET',
      url: '/api/recipes/_id/' + id
    })
    .then(function(res){
      console.log('Got recipe with id', id, 'from db:', res.data);
      return res.data[0];
    });
  };

  // Returns an array of recipes which match the title.
  var recipesByTitle = function (title) {
    return $http({
      method: 'GET',
      url: '/api/recipes/title/' + title
    })
    .then(function(res){
      console.log('Got recipes with title', title, 'from db:', res.data);
      return res.data;
    });
  };

  // Returns an array of recipes which match the author.
  var recipesByAuthor = function (authorId) {
    return $http({
      method: 'GET',
      url: '/api/recipes/author/' + authorId
    })
    .then(function(res){
      console.log('Got recipes with authorId', authorId, 'from db:', res.data);
      return res.data;
    });
  };

  // TODO: Get dummy data with groups, and make sure query is correct.
  // Returns an array of recipes which match the group.
  var recipesByGroup = function (groupId) {
    return $http({
      method: 'GET',
      url: '/api/recipes/group/' + groupId
    })
    .then(function(res){
      console.log('Got recipes with groupId', groupId, 'from db:', res.data);
      return [dummyRecipe];  // <-- delete once resolved
      return res.data;
    });
  };

  // TODO: Get dummy data with likedBy array, and make sure query is correct.
  // Returns an array of recipes which match the group.
  var recipesByLiked = function (likedById) {
    return $http({
      method: 'GET',
      url: '/api/recipes/likedBy/' + likedById
    })
    .then(function(res){
      console.log('Got recipes with likedById', likedById, 'from db:', res.data);
      return [dummyRecipe];  // <-- delete once resolved
      return res.data;
    });
  };


  /******** GROUPS ********/

  // TODO: Fix this once database paths are ready.
  // Returns a single user from the database by their id.
  var groupById = function (id) {
    return $http({
      method: 'GET',
      url: '/' //'/api/groups/_id/' + id  // <-- uncomment when path is ready
    })
    .then(function(res){
      console.log('Got group with id', id, 'from db:', res.data);
      return dummyGroup;  // <-- delete once path is ready
      return res.data[0];
    });
  };

  var groupsByName = function () {

  };

  var groupsByMember = function () {

  };

  var groupsByRecipe = function () {

  };


  return {
    userById: userById,
    usersByName: usersByName,
    recipeById: recipeById,
    recipesByTitle: recipesByTitle,
    recipesByAuthor: recipesByAuthor,
    recipesByGroup: recipesByGroup,
    recipesByLiked: recipesByLiked,
    groupById: groupById,
    groupsByName: groupsByName,
    groupsByMember: groupsByMember,
    groupsByRecipe: groupsByRecipe
  };
});