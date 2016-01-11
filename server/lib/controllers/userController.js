var User = require('../../db/models/user.js');
var util = require('../util.js');

module.exports = {
  signIn: function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    User.findOne({username: username}).exec()
      .then(function(user) {
        if (!user) {
          next(new Error('User does not exist'));
        } else {
          user.checkPassword(password, function(isMatch) {
            if (isMatch) {
              var token = util.encodeToken(user);
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
              var token = util.encode(user);
              res.json({token: token});
            });
        }
    });
  },
  currentUser: function (req, res, next) {
    var token = req.headers['x-access-token'];
    if (!token) {
      next(new Error('No access token!'));
    } else {
      var user = util.decodeToken(req);
      User.findOne({_id: user._id}).exec()
        .then(function(foundUser) {
          res.body = foundUser;
          util.sendResponse(req, res, 200);
        });
    }
  }
}