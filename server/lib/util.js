module.exports = {
  sendResponse: function(req, res, status) {
    res.status(status).send(res.body);
  }
};