angular.module('Recipeoples.services', [])


.factory('getFactory', function($http){

  // TODO: Delete this dummy object once all DB routes are functioning.
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


  /******** USERS ********/

  // TODO: Fix this once database paths are ready.
  // Returns a single user by their id.
  var userById = function (userId) {
    return $http({
      method: 'GET',
      url: '/' // '/api/users/_id/' + userId  // <-- uncomment when ready
    })
    .then(function(res){
      console.log('Got user with id', userId, 'from db:', res.data);
      return dummyUser;  // <-- delete once path is ready
      return res.data[0];
    });
  };

  // TODO: Fix this once database paths are ready.
  // Returns an array of users which match the name.
  var usersByName = function (username) {
    return $http({
      method: 'GET',
      url: '/' // '/api/users/username/' + username  // <-- uncomment when ready
    })
    .then(function(res){
      console.log('Got users with username', username, 'from db:', res.data);
      return [dummyUser];  // <-- delete once path is ready
      return res.data;
    });
  };

  var userByToken = function(){
     return $http({
      method: 'GET',
      url: '/api/users'
    })
    .then(function(res){
      console.log('Got user from db:', res.data);
      return res.data;
    });
  };

  /******** GROUPS ********/

  // Returns a single group by their id.
  var groupById = function (groupId) {
    return $http({
      method: 'GET',
      url: '/api/groups/_id/' + groupId
    })
    .then(function(res){
      console.log('Got group with id', groupId, 'from db:', res.data);
      return res.data[0];
    });
  };

  // Returns a an array of groups which match the name.
  var groupsByName = function (name) {
    return $http({
      method: 'GET',
      url: '/api/groups/name/' + name
    })
    .then(function(res){
      console.log('Got groups with name', name, 'from db:', res.data);
      return res.data[0];
    });
  };
  
  var groupsByMember = function (member) {
    return $http({
      method: 'GET',
      url: '/api/groups/member/' + member
    })
    .then(function(res){
      console.log('Got groups with member', member, 'from db:', res.data);
      return res.data[0];
    });
  };

  /******** RECIPES ********/

  // Returns a bunch of recipes.
  var recipes = function () {
    return $http({
      method: 'GET',
      url: '/api/recipes/'
    })
    .then(function(res){
      console.log('Got recipes from db:', res.data);
      return res.data;
    });
  };

  // Returns all recipes posted since a certain time.
  var recipesSince = function (time) {
    return $http({
      method: 'GET',
      url: '/api/recipes/',
      data: {
        since: time
      }
    })
    .then(function(res){
      console.log('Got recipes since', time, 'from db:', res.data);
      return res.data;
    });
  };

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

  // Returns a bunch of recipes, ranked by the server.
  var recipesRanked = function () {
    return $http({
      method: 'GET',
      url: '/api/recipes/'
    })
    .then(function(res){
      console.log('Got recipes from db:', res.data);
      return res.data;
    });
  };

  // Returns all recipes posted since a certain time.
  var recipesSince = function (time) {
    return $http({
      method: 'GET',
      url: '/api/recipes/',
      data: {
        since: time
      }
    })
    .then(function(res){
      console.log('Got recipes since', time, 'from db:', res.data);
      return res.data;
    });
  };


  return {
    userById: userById,
    usersByName: usersByName,
    userByToken:userByToken,
    groupById: groupById,
    groupsByName: groupsByName,
    groupsByMember:groupsByMember,
    recipeById: recipeById,
    recipesByTitle: recipesByTitle,
    recipesByAuthor: recipesByAuthor,
    recipesRanked: recipesRanked,
    recipesSince: recipesSince,
  };
})


.factory('PostFactory', function($http, getFactory) {

  // Temporary storage for groups that will be associated with a recipe later.
  var reservedGroups;

  // Helper function which makes group associations after recipe creation.
  var associateGroups = function(recipeId) {
    if (reservedGroups) {

      // Hacky way to check if group names or id's were in the array, and swap in id's
      if (reservedGroups[0].length !== 24 && reservedGroups[0].indexOf(' ') === -1) {
        reservedGroups.forEach(function(name) {
          name = getFactory.groupsByName(name)[0];
        });
      }

      reservedGroups.forEach(function(groupId) {
        recipeToGroup(recipeId, groupId);
      });
    }

    reservedGroups = null;
  };

  // Create a new recipe in the database.
  var newRecipe = function (recipe) {
    if (recipe.groups && recipe.groups.length > 0) {
      reservedGroups = recipe.groups;
      recipe.groups = [];
    }
    return $http({
      method: 'POST',
      url: '/api/recipes/',
      data: recipe
    })
    .then(function(res){
      console.log('Posted new recipe', recipe.title, 'to db.');
      associateGroups(res.data._id);
      return res.data;
    });
  };

  // Create a new group in the database.
  var newGroup = function (group) {
    return $http({
      method: 'POST',
      url: '/api/groups/',
      data: recipe
    })
    .then(function(res){
      console.log('Posted new group', group.name, 'to db.');
      return res.data;
    });
  };

  // Allow the current user to join a group in the database.
  var joinGroup = function (groupId) {
    return $http({
      method: 'POST',
      url: '/api/groups/',
      data: {
        currentUser: true,
        groupId: groupId
      }
    })
    .then(function(res){
      console.log('Posted new group', group.name, 'to db.');
      return res.data;
    });
  };

  // Add a recipe to a group.
  var recipeToGroup = function (recipeId, groupId) {
    return $http({
      method: 'POST',
      url: '/api/recipes/',
      data: {
        recipeId: recipeId,
        groupId: groupId
      }
    })
    .then(function(res){
      console.log('Posted new group', group.name, 'to db.');
      return res.data;
    });
  };

  return {
    newRecipe: newRecipe,
    newGroup: newGroup,
    joinGroup: joinGroup,
    recipeToGroup: recipeToGroup
  };
});