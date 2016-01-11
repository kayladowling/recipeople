var Recipe = require('../../db/models/recipe.js');
var util = require('../util.js');
var url = require('url');

module.exports = {
  findRecipe: function (req, res) {
    var query = {};
    var field = req.params.prop;
    var value = req.params.query;
    var filter = url.parse(req.url, true).query;
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
    var user = util.decodeToken(req);
    var params = {
      title: req.body.title,
      image_url: req.body.image_url || '',
      ingredients: req.body.ingredients || [],
      directions: req.body.directions || '',
      author: user._id,
      likedBy: req.body.likedBy || [],
      dislikedBy: req.body.dislikedBy || [],
      groups: req.body.groups || [],
      reviews: req.body.reviews || []
    };

    Recipe.create(params)
      .then(function(createdRecipe) {
        res.body = createdRecipe;
        util.sendResponse(req, res, 201);
      })
    .catch(function(err) {
      console.log(err);
      util.sendResponse(req, res, 404);
    })
  },
  updateRecipe: function (req, res) {
    var recipeId = req.body.recipeId;
    var groupId = req.body.groupId;
    Recipe.findOne({_id: recipeId}).exec()
      .then(function(recipe) {
        recipe.groups.push(groupId);
        recipe.save()
          .then(function(saved) {
            util.sendResponse(req, res, 200);
          });
      });
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