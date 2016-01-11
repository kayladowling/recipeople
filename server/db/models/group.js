var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var GroupSchema = new Schema({
  name: String,
  members: Array,
  recipes: Array
});

module.exports = mongoose.model('Group', GroupSchema);
//This is the group