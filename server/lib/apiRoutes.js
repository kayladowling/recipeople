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
    util.sendResponse(req, res);
  });
  /*console.log('type: ', req.params.type);
  console.log('prop: ', req.params.prop);
  console.log('query: ', req.params.query);
  util.sendResponse(req, res);*/
};

var somethingElseWithDB = function (req, res) {
  console.log(req.body);
};

module.exports = function (app) {

  app.get('/:type/:prop/:query', somethingWithDB);

  app.post('/:action', somethingElseWithDB);

};