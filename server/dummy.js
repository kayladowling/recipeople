var User = require('./db/models/user.js');
var Recipe = require('./db/models/recipe.js');

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

module.exports.addDummyUser = function() {
  var newUser = new User(user);
  newUser.save();
};