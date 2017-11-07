const mongoose = require('mongoose');
const dburi = require('./dburi');

mongoose.connect(dburi);

var Restaurant = require('./restaurantModel.js');

Restaurant.findById(1, function(err, restaurant) {
	if (err) throw err;

	console.log(restaurant);
});