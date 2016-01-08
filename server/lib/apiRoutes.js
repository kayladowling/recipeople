var util = require('./util.js');
var Recipe = require('../db/models/recipe.js');
var recipeController = require('./controllers/recipeController.js');

// determines the type of get request and routes to the correct controller
var getRoutes = function(req, res) {
  var type = req.params.type;
  apiTypes.get[type](req, res);
};

var postRoutes = function (req, res) {
  var action = req.params.action;
  console.log(action);
  apiTypes.post[action](req, res);
};

var apiTypes = {
  'get': {
    'recipes': recipeController.findRecipe
  },
  'post': {
    'createRecipe': recipeController.createRecipe
  }
};

module.exports = function (app) {

  // everything in here is from the /api endpoint

  // generic /type requests (e.g., /recipes) default to finding all
  app.get('/:type', getRoutes);
  // get requests come in the /type/prop/query format
  // e.g., /recipes/title/Fried Pickles
  app.get('/:type/:prop/:query', getRoutes);


  // post requests come in the /action format with the additions in the body in json
  // e.g., /createRecipe, /likeRecipe, etc.
  app.post('/:action', postRoutes);

};
