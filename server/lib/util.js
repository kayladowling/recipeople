module.exports = {
  sendResponse: function(req, res) {
    console.log('here');
    res.status(200).send(res.data);
  }
};