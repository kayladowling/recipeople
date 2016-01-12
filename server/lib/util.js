var jwt = require('jwt-simple');

module.exports = {
  sendResponse: function(req, res, status) {
    if (!Array.isArray(res.body)) {
      res.body = [res.body];
    }
    res.status(status).send(res.body);
  },

  decodeToken: function(req) {
    var token = req.headers['x-access-token'];
    return jwt.decode(token, 'nyannyannyan');
  },

  encodeToken: function(user) {
    return jwt.encode(user, 'nyannyannyan');
  }
};