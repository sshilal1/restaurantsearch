const mongoose = require('mongoose');
const cors = require('cors')
const dburi = require('./dburi');
mongoose.connect(dburi);

var Restaurants = require('./restaurantModel.js');

var getCount = function(searchtext) {
	return new Promise((resolve,reject) => {		
		var searchstring = ".*" + searchtext.toLowerCase() + ".*";
		
		Restaurants
			.find({searchText: {$regex : searchstring}})
			.exec(function(err, results) {
				if (err) reject(err);
				else {
					var len = results.length.toString();
					resolve(len)
				}
			});
	})
}

var getDbObjects = function(searchtext,skip) {
	return new Promise((resolve,reject) => {		
		var searchstring = ".*" + searchtext.toLowerCase() + ".*";
		
		Restaurants
			.find({searchText: {$regex : searchstring}})
			.limit(12)
			.skip(skip)
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

	getDbObjects(myobj.text,0)
	.then(function(first) {
		res.send(first);
	})
	.catch(function (error) {
		console.log(error);
	});
})

app.post('/count', function (req,resp) {
	var myobj = req.body;
	getCount(myobj.text)
	.then(function(count) {
		resp.send(count);
	})
	.catch(function (error) {
		console.log(error);
	});
})

app.get('/page', function (req,res) {

	var text = req.query.search;
	var skip = ((parseInt(req.query.page,10) - 1) * 12) + 1;

	getDbObjects(text,skip)
	.then(function(result) {
		res.send(result);
	})
	.catch(function (error) {
		console.log(error);
	});
})

app.listen(4000, function() {
	console.log("listening on port 4000");
})