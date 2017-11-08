const mongoose = require('mongoose');
const dburi = require('./dburi');
mongoose.connect(dburi);

var Restaurants = require('./restaurantModel.js');

/*
Restaurants.findById(123, function(err, restaurant) {
	if (err) throw err;
	console.log(restaurant);
});*/

var count=0;

Restaurants.find({searchText: {$regex : ".*mexican.*"}}, function(err, restaurant) {
  if (err) throw err;

  else {
  	count++;
	  console.log("here", restaurant);
	  console.log(count);	
	}

}).limit(5);