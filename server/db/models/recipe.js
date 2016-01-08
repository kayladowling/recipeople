var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var RecipeSchema = new Schema({
  title: String,
  image_url: String,
  ingredients: Array,
  directions: String,
  author: String,
  likedBy: Array,
  dislikedBy: Array,
  groups: Array,
  reviews: Array,
});

module.exports = mongoose.model('Recipe', RecipeSchema);





