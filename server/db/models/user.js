var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var Promise = require('bluebird');
bcrypt = Promise.promisifyAll(bcrypt);


var UserSchema = new Schema({
  username: String,
  password: String,
  image_url: String,
  liked: Array,
  disliked: Array,
  groups: Array,
  authored: Array,
  testid: Number,
  friends: Array
});


UserSchema.methods.checkPassword = function (enteredPassword) {
  return bcrypt.compareAsync(enteredPassword, this.password);
};

UserSchema.pre('save', function (next) {

  var user = this;

  if (!user.isModified('password')) {
    return next();
  }

  bcrypt.saltAsync(10).then(function(salt) {
    bcrypt.hashAsync(user.password, salt, null).then(function(hash) {
      user.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model('User', UserSchema);