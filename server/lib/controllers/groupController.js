var Group = require('../../db/models/group.js');
var User = require('../../db/models/user.js');
var util = require('../util.js');

module.exports = {
  findGroup: function (req, res, next) {
    var query = {};
    var field = req.params.prop;
    var value = req.params.query;
    if (field && value) query[field] = value;

    Group.find(query).exec()
      .then(function(group) {
        if (!group) {
          res.body = 'Group not found';
          util.sendResponse(req, res, 404);
        } else {
          res.body = group;
          util.sendResponse(req, res, 200);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  createGroup: function (req, res, next) {
    var params = {
      name: req.body.name,
      members: req.body.members || [],
      recipes: req.body.recipes || []
    };

    Group.find(params).exec()
      .then(function(group) {
        if (group.length !== 0) {
          console.log('Group already exists');
          // fix response type
          util.sendResponse(req, res, 404);
        } else {
          Group.create(params)
            .then(function(createdGroup) {
              res.body = createdGroup;
              util.sendResponse(req, res, 201);
            });
        }
      });
  },
  updateGroup: function (req, res, next) {
    if (req.body.currentUser) {
      var user = util.decodeToken(req);
    }
    var groupId = req.body.groupId;
    Group.findOne({_id: groupId}).exec()
      .then(function(group) {
        group.members.push(user._id);
        group.save()
          .then(function(saved) {
            User.findOne({_id: user._id}).exec()
              .then(function(foundUser) {
                foundUser.groups.push(groupId);
                foundUser.save()
                  .then(function(saved) {
                    util.sendResponse(req, res, 200);
                  });
              });
          });
      });
  }
};