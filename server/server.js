var app = require("express")();
var responseTime = require("response-time");
var axios = require("axios");
var redis = require("redis");
var db = redis.createClient();
var session = require('express-session')

app.use(responseTime());
var path = require("path");

app.use(session({
	secret: 'personal',
	resave: false,
	saveUninitialized: true,
	cookie: { maxAge: 60000 }
}));

db.on("error", function(error) {
	console.log(error);
});

require(path.resolve(__dirname, "./books.js"))(app, db);
require(path.resolve(__dirname, "./users.js"))(app, db);

app.listen(4300, function() {
	console.log("Listening on: 4300");
});