var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');


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


UserSchema.methods.checkPassword = function (enteredPassword, cb) {
  bcrypt.compare(enteredPassword, this.password, function(err, isMatch) {
    cb(isMatch);
  });
};

UserSchema.pre('save', function (next) {

  var user = this;

  if (!user.isModified('password')) {
    return next();
  }

  bcrypt.hash(user.password, 10, function(err, hash) {
    console.log('hashing');
    console.log(hash);
    user.password = hash;
    next();
  });
});

module.exports = mongoose.model('User', UserSchema);