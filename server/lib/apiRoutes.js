var util = require('./util.js');
var somethingWithDB = function(req, res) {

  // mock data, real data would come from db
  var data = [{
    id: req.params.id,
    title: 'A Test Recipe',
    ingredients: ['1/2 apple', '1/2 orange', '2 cups spinach'],
    author: { id: 1, username: 'Matt'}
  }];
  res.body = data;
  console.log('type: ', req.params.type);
  console.log('prop: ', req.params.prop);
  console.log('query: ', req.params.query);
  util.sendResponse(req, res);
};

module.exports = function (app) {

  app.get('/:type/:prop/:query', somethingWithDB);

};