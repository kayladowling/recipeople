var util = require('./util.js');
var somethingWithDB = function(req, res) {
  console.log('type: ', req.params.type);
  console.log('prop: ', req.params.prop);
  console.log('query: ', req.params.query);
  util.sendResponse(req, res);
};

module.exports = function (app) {

  app.get('/:type/:prop/:query', somethingWithDB);

};