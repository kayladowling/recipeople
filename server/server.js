var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use('/', express.static(__dirname + '/../public'));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.render('index');
});


// grab all api requests and send them to the
// api router
var apiRoutes = express.Router();
app.get('/api', apiRoutes);
require('./lib/apiRoutes.js')(apiRoutes);

module.exports = app;