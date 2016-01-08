var express = require('express');
var mongoose = require('mongoose');
var Recipe = require('./db/models/recipe');
var User = require('./db/models/user');
var bodyParser = require('body-parser');
var app = express();
var bodyParser = require('body-parser');


mongoose.connect(process.env.MONGOLAB_URI);
app.use('/', express.static(__dirname + '/../public'));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.render('index');
});

var testipe = new Recipe();

testipe.title = "Fried Pickles";
testipe.image_url = 'http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2012/5/4/0/FNM_060112-Almost-Famous-Fried-Pickles-Recipe_s4x3.jpg.rend.sni12col.landscape.jpeg';
testipe.ingredients = ['pickles', 'flour', 'salt', 'pepper'];
testipe.direction = "Mix flour, salt, pepper. Dredge pickles in flour mix. Deep fry until golden";
testipe.author = "theBackOfTheHouse";


// grab all api requests and send them to the
// api router
var apiRoutes = express.Router();
app.use('/api', apiRoutes);
require('./lib/apiRoutes.js')(apiRoutes);

module.exports = app;