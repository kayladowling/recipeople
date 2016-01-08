var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: String,
  image_url: String,
  liked: Array,
  disliked: Array,
  groups: Array,
  authored: Array,
  friends: Array
});

module.exports = mongoose.model('User', UserSchema);