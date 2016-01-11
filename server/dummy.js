var User = require('./db/models/user.js');
var Recipe = require('./db/models/recipe.js');
var Group = require('./db/models.group.js');

var recipes = [
{ title: 'Test1', author: 1, ingredients: ['Test', 'Test', 'Test'], directions: 'Test'},
{ title: 'Test2', author: 1, ingredients: ['Test', 'Test', 'Test'], directions: 'Test'},
{ title: 'Test3', author: 1, ingredients: ['Test', 'Test', 'Test'], directions: 'Test'},
{ title: 'Test4', author: 1, ingredients: ['Test', 'Test', 'Test'], directions: 'Test'},
{ title: 'Test5', author: 1, ingredients: ['Test', 'Test', 'Test'], directions: 'Test'},
];

module.exports.addDummyRecipes = function() {
    recipes.forEach(function(recipe) {
      var newRecipe = new Recipe(recipe);
      newRecipe.save();
    });
};

var user = {
  username: 'Test',
  testid: 1
};

var cloud = {
  username: 'Cloud Strife',
  password: 'eye<3Aeris',
  image_url: 'http://static.giantbomb.com/uploads/square_small/0/9133/1910287-cloudinmagicwaterreaches.jpg',
  groups: ['Midgar', 'Sector 7 Slums', 'Golden Saucer'],
  authored: ['Fried Cactuar', 'Pashal Greens'],
  testid: 12,
  friends: ['Tifa Lockheart', 'Vincent Valentine']
};

var tifa = {
  username: 'Tifa Lockheart',
  password: 'chocobuckle',
  image_url: 'http://static.comicvine.com/uploads/original/2/24772/435137-7ac_tifa_1.jpg',
  groups: ['Sector 7 Slums', 'Golden Saucer'],
  authored: ['Sloe Gin Fizz', 'Knuckle Sandwich'],
  testid: 13,
  friends: ['Cloud Strife']
}

var vincent = {
  username: 'Vincent Valentine',
  password: 'ViniVidiVivi',
  image_url: 'http://cdn.myanimelist.net/images/characters/16/46857.jpg',
  groups: ['Midgar', 'Golden Saucer'],
  authored: ['Spicy Tuna Rolls'],
  frinds: ['Cloud Strife']
}


var midgar = {
  name: 'Midgar',
  members: ['Cloud Strife', 'Vincent Valentine'],
  recipes: ['Spicy Tuna Rolls', 'Pahal Greens']
}

var sector7 = {
  name: 'Sector 7 Slums',
  members: ['Tifa Lockheart', 'Cloud Strife'],
  recipes: ['Sloe Gin Fizz']
}

var goldenSaucer = {
  name: 'Golden Saucer',
  members: ['Vincent Valentine', 'Tifa Lockheart', 'Cloud Strife'],
  recipes: ['Spicy Tuna Rolls', 'Knuckle Sandwich', 'Fried Cactuar']
}

module.exports.addDummyGroups = function(){
  var groups = [midgar, sector7, goldenSaucer];
  groups.forEach(function(group){
    var newGroup = new Group(group);
    newGroup.save();
  });
}

module.exports.addUsers = function(){
  var users = [cloud, tifa, vincent];
  users.forEach(function(user){
    var newUser = new User(user);
    newUser.save();
  });
}

module.exports.addDummyUser = function() {
  var newUser = new User(user);
  newUser.save();
};