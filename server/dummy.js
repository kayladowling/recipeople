var User = require('./db/models/user.js');
var Recipe = require('./db/models/recipe.js');
var Group = require('./db/models.group.js');


var pashal =  {
  title: 'Pashal Greens',
  image_url: 'http://www.gloryfoods.com/media/images/Fresh%20Garlic%20Greens.jpg',
  ingredients: [
    '1lb Pashal Greens', 
    '2tsp Mustard seed', 
    '1/4 cup walnuts'
  ],
  directions: 'Add Pashal greens, Mustard Seeds and walnuts to frying pan. Stir fry for 20 minutes" + 
  " and serve! Ths recipe goes very well as a side dish to pork and cactuar. My family Loves this" + 
  " recipe and I know you will too!",
  author: 'Cloud Strife',
  likedBy: ['Vincent Valentine'],
  groups: ['Midgar'],
  reviews: ['ZOMG these greens are amazing! - Vincent']
};

var cactuar = {
  title: 'Fried Cactuar',
  image_url: 'http://media-cdn.tripadvisor.com/media/photo-s/07/3d/a6/2e/fried-cactus-appetizer.jpg',
  ingredients: [
    '1 cup Flour', 
    '1lb cactuar de-needled', 
    '1/4 cup milk',
    'Oil for Frying', 
    'salt', 
    'pepper', 
    '2tsp Oregano'
    ],
  directions: 'Cut cactuar into thin strips, taking care to make sure all needles are removed.' + 
  ' Place cactuar strips into milk and let saok for 20 minutes. While the cactuar is saoking' + 
  ' mix the flour, salt, pepper, and oregano and spread out evenly on the surface of a plate' +
  ' Dredge cactuar through the mixture and deep fry until golden brown. Enjoy!' ,
  author: 'Cloud Strife',
  likedBy: ['Vicent Valentine', 'Tifa Lockheart'],
  groups: ['Golden Saucer', 'Midgar'],
  reviews: ['This recipe doesn\'t have any reviews yet!'],
};

var sloe = {
  title: 'Sloe Gin Fizz',
  image_url: 'http://www.inspiredtaste.net/wp-content/uploads/2012/12/Sloe-Gin-Fizz-Cocktail-Recipe-1.jpg',
  ingredients: ['1 ounce Sloe Gin', '1 ounce Gin', '1 ounce lemon juice', '1 teaspoon simple syrup'
  '2 ounces club soda', 'lemon wedge', 'ice'],
  directions: 'Add sloe gin, regular gin, 1/2 ounce of lemon juice and simple syrup' +
  ' (or sugar) to a cocktail shaker filled half way with ice. Shake vigorously until' +
  ' chilled. Taste then adjust with additional lemon or simple syrup/sugar. Shake.' +
  'Strain cocktail into a glass filled with ice then top with club soda and garnish' +
  ' with lemon wedge.',
  author: 'Tifa Lockheart',
  likedBy: ['Cloud Strife'],
  groups: ['Sector 7 Slums'],
  reviews: ['This is a great recipe! - Cloud'],
};

var sandwich = {
  title: 'Knuckle Sandwich',
  image_url: 'http://cdn-image.myrecipes.com/sites/default/files/styles/300x300/public/hot-pastrami-sandwiches-su.jpg?itok=-ou5K_up',
  ingredients: [
    '2 pounds thinly sliced pastrami',
    '2 pounds thinly sliced corned beef',
    '2 cups reduced sodium beef broth',
    '16 slices rye bread',
    '8 slices Swiss Cheese',
    '1/2 cup Dijon Mustard',
    '3 cups coleslaw'
  ],
  directions: '1. Place pastrami, corned beef, and broth in a slow-cooker.* Heat, covered, on lowest setting until hot, stirring periodically, at least 1 hour and up to 3 hours.' +
    ' 2. Set out bread slices and cheese on a platter, and mustard and coleslaw in small bowls. Cover with plastic wrap until served (up to 1 hour).' +
    ' 3. When pastrami mixture is hot, invite guests to make their own sandwiches, or assemble for them: Spread 2 slices of bread with mustard. Pile a generous helping of the meats' +
    ' onto 1 slice, then top with a slice of cheese, about 1/3 cup coleslaw, and the second piece of bread. Cut sandwiches in half, they\'re large, so consider sharing.' +
    ' *If you don\'t have a slow-cooker, put the pastrami and corned beef with a little broth in a microwave-safe bowl, cover, and warm in a microwave oven.',
  author: 'Tifa Lockheart',
  likedBy: ['Cloud Strife', 'Vincent Valentine'],
  groups: ['Golden Saucer']
};

var tuna = {
  title: 'Spicy Tuna Rolls',
  image_url: 'http://www.justonecookbook.com/wp-content/uploads/2013/05/Spicy-Tuna-Roll.jpg',
  ingredients: [
    '1 1/2 cups prepared sushi rice',
    '4 oz sashimi grade tuna',
    '3 tsp sriracha',
    '2 tsp chopped green onion',
    '1 sheet nori cut in half',
    '2tsp wite roasted sesame seeds',
    '1/4 cup spicy mayo'
  ],
  directions: 'Cut the tuna into ¼" (0.5 cm) cubes (or you can mince the tuna).' +
  'In a medium bowl, combine the tuna, Sriracha sauce, 1 tsp. green onion and sesame oil.' +
  'Lay a sheet of nori, shiny side down, on the bamboo mat. Wet your fingers in tezu and spread ¾' +
  'cup of the rice evenly onto nori sheet. Sprinkle the rice with sesame seeds.' +
  'Turn the sheet of nori over so that the rice side is facing down. Line the edge of nori '+
  'sheet at the bottom end of the bamboo mat. Place half of the tuna mixture at the bottom '+
  'end of the nori sheet.' +
  'Grab teh bottom edge of the bamboo mat while keeping the fillings sin place with your '+
  'fingers, roll into a tight cylinder. Lift the edge of the bamboo mat and continue to roll it forward while keeping gentle pressure on the mat.' +
  'With a very sharp knife, cut the roll in half and then cut each half into 3 pieces. Clean the knife with a damp cloth every few cuts. (When you wrap' +
  'the roll with a plastic wrap, rice won\'t stick to your hands.)' +
  'Put a dollop of spicy mayo on top of each sushi and garnish with the remaining green onion.',
  author: 'Vincent Valentine',
  likedBy: ['Cloud Strife'],
  dislikedBy: ['Tifa Lockheart'],
  groups: ['Golden Saucer'],
};


var recipes = [pashal, cactuar, tuna, sandwich, sloe];

module.exports.addDummyRecipes = function() {
    recipes.forEach(function(recipe) {
      var newRecipe = new Recipe(recipe);
      newRecipe.save();
    });
};

var user = {
  username: 'Test',
  testid: 1
};

var cloud = {
  username: 'Cloud Strife',
  password: 'eye<3Aeris',
  image_url: 'http://static.giantbomb.com/uploads/square_small/0/9133/1910287-cloudinmagicwaterreaches.jpg',
  groups: ['Midgar', 'Sector 7 Slums', 'Golden Saucer'],
  authored: ['Fried Cactuar', 'Pashal Greens'],
  testid: 12,
  friends: ['Tifa Lockheart', 'Vincent Valentine']
};

var tifa = {
  username: 'Tifa Lockheart',
  password: 'chocobuckle',
  image_url: 'http://static.comicvine.com/uploads/original/2/24772/435137-7ac_tifa_1.jpg',
  groups: ['Sector 7 Slums', 'Golden Saucer'],
  authored: ['Sloe Gin Fizz', 'Knuckle Sandwich'],
  testid: 13,
  friends: ['Cloud Strife']
}

var vincent = {
  username: 'Vincent Valentine',
  password: 'ViniVidiVivi',
  image_url: 'http://cdn.myanimelist.net/images/characters/16/46857.jpg',
  groups: ['Midgar', 'Golden Saucer'],
  authored: ['Spicy Tuna Rolls'],
  frinds: ['Cloud Strife']
}


var midgar = {
  name: 'Midgar',
  members: ['Cloud Strife', 'Vincent Valentine'],
  recipes: ['Spicy Tuna Rolls', 'Pahal Greens', 'Fried Cactuar']
}

var sector7 = {
  name: 'Sector 7 Slums',
  members: ['Tifa Lockheart', 'Cloud Strife'],
  recipes: ['Sloe Gin Fizz']
}

var goldenSaucer = {
  name: 'Golden Saucer',
  members: ['Vincent Valentine', 'Tifa Lockheart', 'Cloud Strife'],
  recipes: ['Spicy Tuna Rolls', 'Knuckle Sandwich', 'Fried Cactuar']
}

module.exports.addDummyGroups = function(){
  var groups = [midgar, sector7, goldenSaucer];
  groups.forEach(function(group){
    var newGroup = new Group(group);
    newGroup.save();
  });
}

module.exports.addUsers = function(){
  var users = [cloud, tifa, vincent];
  users.forEach(function(user){
    var newUser = new User(user);
    newUser.save();
  });
}

module.exports.addDummyUser = function() {
  var newUser = new User(user);
  newUser.save();
};