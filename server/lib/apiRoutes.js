var util = require('./util.js');
var Recipe = require('../db/models/recipe.js');
var recipeController = require('./controllers/recipeController.js');
var userController = require('./controllers/userController.js');

// determines the type of get request and routes to the correct controller
var getRoutes = function(req, res) {
  var type = req.params.type;
  apiTypes.get[type](req, res);
};

var postRoutes = function (req, res) {
  var type = req.params.type;
  apiTypes.post[type](req, res);
};

var apiTypes = {
  'get': {
    'recipes': recipeController.findRecipe,
    // api call for /users checks for a token and then sends back data for that user
    'users': userController.checkToken
  },
  'post': {
    'recipes': recipeController.createRecipe
  }
};

module.exports = function (app) {

  // everything in here is from the /api endpoint

  // generic /type requests (e.g., /recipes) default to finding all
  app.get('/:type', getRoutes);
  // get requests come in the /type/prop/query format
  // e.g., /recipes/title/Fried Pickles
  app.get('/:type/:prop/:query', getRoutes);


  // handles the sign up / sign in form authorization and token sending
  app.post('/users/signin', userController.signIn);
  app.post('/users/signup', userController.signUp);


  // post requests come in the /type format with the additions in the body in json
  // e.g., /recipe will add a new recipe, /group a new group, /user a new user
  app.post('/:type', postRoutes);

};
