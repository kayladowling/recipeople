var Recipe = require('../../db/models/recipe.js');
var util = require('../util.js');


module.exports = {
  findRecipe: function (req, res) {
    var query = {};
    var field = req.params.prop;
    if (field === '_id') field = 'id';
    var value = req.params.query;
    if (field && value) query[field] = value;


    Recipe.find(query).exec()
      .then(function(recipe) {
        res.body = recipe;
        util.sendResponse(req, res, 200);
      })
      .catch(function(err) {
        console.log(err);
        util.sendResponse(req, res, 404);
      });
  },
  createRecipe: function (req, res) {
    var params = {
      title: req.body.title,
      image_url: req.body.image_url || '',
      ingredients: req.body.ingredients || [],
      directions: req.body.directions || '',
      author: req.body.author || ''
    };

    Recipe.find(params).exec()
      .then(function(recipe) {
        if (recipe.length === 0) {
          var newRecipe = new Recipe(params);
          newRecipe.save()
            .then(function(createdRecipe) {
              res.body = 'Successfully created recipe';
              util.sendResponse(req, res, 201);
            });
        } else {
          res.body = 'Recipe already exists';
          util.sendResponse(req, res, 404);
        }
      })
      .catch(function(err) {
        console.log(err);
        util.sendResponse(req, res, 404);
      })
  }
};


// var somethingWithDB = function(req, res) {

//   // mock data, real data would come from db
//   // var data = [{
//   //   id: req.params.id,
//   //   title: 'A Test Recipe',
//   //   ingredients: ['1/2 apple', '1/2 orange', '2 cups spinach'],
//   //   author: { id: 1, username: 'Matt'}
//   // }];
//   // res.body = data;
//   Recipe.find({ 'title': 'Fried Pickles'}, function (err, recipe) {
//     console.log(recipe);
//     res.body = [recipe];
//     util.sendResponse(req, res, 200);
//   });
//   /*console.log('type: ', req.params.type);
//   console.log('prop: ', req.params.prop);
//   console.log('query: ', req.params.query);
//   util.sendResponse(req, res);*/
// };

// var somethingElseWithDB = function (req, res) {
//   console.log(req.params.action); // createRecipe
//   console.log(req.body); // {}
//   util.sendResponse(req, res, 201);
// };