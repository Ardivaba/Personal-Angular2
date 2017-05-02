var app = require("express")();
var responseTime = require("response-time");
var axios = require("axios");
var redis = require("redis");

var client = redis.createClient();

client.on("error", function(error) {
	console.log(error);
});

app.use(responseTime());

// api/books/
// api/books/add

// api/habits/Create
// api/habits

app.get("/api/books/", function(req, res) {
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.header('access-Control-Allow-Origin', '*');

	client.lrange("books", 0, -1, function(err, result) {
		res.send(result);
	});
});

app.get("/api/books/add/:title/:description/:author/:coverUrl/", function(req, res) {
	var title = req.params.title;
	var description = req.params.description;
	var author = req.params.author;
	var coverUrl = req.params.coverUrl;

	client.lrange("books", 0, -1, function(err, result) {
		var id = result.length;

		client.rpush("books", JSON.stringify({
			id: id,
			title: title,
			description: description,
			author: author,
			coverUrl: coverUrl,
			notes: []
		}));
	});

	res.send("success");

	console.log(description);
});

app.listen(4300, function() {
	console.log("Listening on: 4300");
});