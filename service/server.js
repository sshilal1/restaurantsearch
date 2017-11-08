const mongoose = require('mongoose');
const dburi = require('./dburi');
mongoose.connect(dburi);

var Restaurants = require('./restaurantModel.js');

var getDbObjects = function(searchtext) {
	return new Promise((resolve,reject) => {
		var searchstring = ".*" + searchtext + ".*";
		Restaurants.find({searchText: {$regex : searchstring}}, function(err, restaurant) {
		  if (err) reject(err);
		  else {
		  	resolve(restaurant)
			}
		}).limit(5);
	})
}

var express = require('express');
var app = express();

app.use(express.static('public'));

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function(req,res) {
	res.sendFile('index.html', { root: __dirname})
});

app.post('/reservation', function (req,res) {
	var myobj = req.body;
	getDbObjects(myobj)
	.then(function(result) {
		res.send(result);
	})
})

app.listen(4000, function() {
	console.log("listening on port 4000");
})