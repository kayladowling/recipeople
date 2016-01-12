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
          newUser.username = username;
          newUser.password = password;
          User.create(newUser, function(createdUser) {
              var token = util.encodeToken(user);
              res.json({token: token});
            });
        }
    });
  },
  findUser: function (req, res, next) {
    var query = {};
    var field = req.params.prop;
    var value = req.params.query;
    if (field && value) query[field] = value;
    if (!field || !value) query._id = util.decodeToken(req)._id;

    User.findOne(query).exec()
      .then(function(user) {
        res.body = user;
        util.sendResponse(req, res, 200);
      });
  }
}