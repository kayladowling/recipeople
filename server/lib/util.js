module.exports = {
  sendResponse: function(req, res) {
    res.status(200).send(res.body);
  }
};