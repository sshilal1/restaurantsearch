const mongoose = require('mongoose');
const cors = require('cors')
const dburi = require('./dburi');
mongoose.connect(dburi);

var Restaurants = require('./restaurantModel.js');

var getDbObjects = function(searchtext) {
	return new Promise((resolve,reject) => {
		
		var searchstring = ".*" + searchtext + ".*";
		
		Restaurants
			.find({searchText: {$regex : searchstring}})
			.limit(50)
			.exec(function(err, results) {
				if (err) reject(err);
				
				else {
					resolve(results)
				}
			});
	})
}

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());

app.post('/search', function (req,res) {
	var myobj = req.body;
	console.log("got a request for", myobj.text);
	getDbObjects(myobj.text)
	.then(function(result) {
		res.send(result);
	})
})

app.listen(4000, function() {
	console.log("listening on port 4000");
})