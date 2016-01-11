var Recipe = require('../../db/models/recipe.js');
var Group = require('../../db/models/group.js');
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
      .then(function(foundRecipe) {
        foundRecipe.groups.push(groupId);
        foundRecipe.save()
          .then(function(saved) {
            Group.findOne({_id: groupId}).exec()
              .then(function(group) {
                group.recipes.push(recipeId);
                group.save()
                  .then(function(saved) {
                    util.sendResponse(req, res, 200);
                  });
              });
          });
      });
  }
};

