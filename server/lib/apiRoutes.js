var util = require('./util.js');
var Recipe = require('../db/models/recipe.js');
var somethingWithDB = function(req, res) {

  // mock data, real data would come from db
  // var data = [{
  //   id: req.params.id,
  //   title: 'A Test Recipe',
  //   ingredients: ['1/2 apple', '1/2 orange', '2 cups spinach'],
  //   author: { id: 1, username: 'Matt'}
  // }];
  // res.body = data;
  Recipe.find({ 'title': 'Fried Pickles'}, function (err, recipe) {
    console.log(recipe);
    res.body = [recipe];
    util.sendResponse(req, res, 200);
  });
  /*console.log('type: ', req.params.type);
  console.log('prop: ', req.params.prop);
  console.log('query: ', req.params.query);
  util.sendResponse(req, res);*/
};

var somethingElseWithDB = function (req, res) {
  console.log(req.params.action); // createRecipe
  console.log(req.body); // {}
  util.sendResponse(req, res, 201);
};

module.exports = function (app) {

  // everything in here is from the /api endpoint

  // get requests come in the /type/prop/query format
  // e.g., /recipes/title/Fried Pickles
  app.get('/:type/:prop/:query', somethingWithDB);


  // post requests come in the /action format with the additions in the body in json
  // e.g., /createRecipe, /likeRecipe, etc.
  app.post('/:action', somethingElseWithDB);

};