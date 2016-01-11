var User = require('../../db/models/user.js');
var jwt = require('jwt-simple');
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
              var token = jwt.encode(user, 'nyannyannyan');
              res.json(
                {
                  token: token,
                  user: {
                    username: user.username,
                    image_url: user.image_url,
                    liked: user.liked,
                    disliked: user.disliked,
                    groups: user.groups,
                    authored: user.authored,
                    friends: user.friends
                  }
                }
              );
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
  },
  checkToken: function (req, res, next) {
    var token = req.headers['x-access-token'];
    if (!token) {
      next(new Error('No access token!'));
    } else {
      var user = jwt.decode(token, 'nyannyannyan');
      User.findOne({username: user.username}, 'username image_url liked disliked groups authored friends').exec()
        .then(function(user) {
          if (!user) {
            next(new Error('Invalid token'));
          } else {
            res.body = user;
            util.sendResponse(req, res, 200);
          }
        });
    }
  }
}