var User = require('../../db/models/user.js');
var jwt = require('jwt-simple');

module.exports = {
  signIn: function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    User.findOne({username: username}).exec()
      .then(function(user) {
        if (!user) {
          next(new Error('User does not exist'));
        } else {
          user.checkPassword(password).then(function(isMatch) {
            if (isMatch) {
              var token = jwt.encode(user, 'nyannyannyan');
              res.json({token: token});
            } else {
              return next(new Error('Password did not match'));
            }
          });
        }
      })
      .catch(function(error) {
        next(error);
      });
  },
  signUp: function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    console.log(username);
    console.log(password);
    var newUser = {};

    User.findOne({username: username}).exec()
      .then(function(user) {
        if (user) {
          next(new Error('User already exists, please log in'));
        } else {
          console.log('in here');
          newUser.username = username;
          newUser.password = password;
          User.create(newUser, function(createdUser) {
            console.log('created');
              var token = jwt.encode(user, 'nyannyannyan');
              res.json({token: token});
            });
        }
    });
  }
}