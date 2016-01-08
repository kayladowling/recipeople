var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var GroupSchema = new Schema({
  name: String,
  members: Array,
  recipes: Array[obj]
});

module.exports = mongoose.model('Group', GroupSchema);
//This is the group