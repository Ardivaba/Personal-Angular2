var app = require("express")();
var bodyParser = require("body-parser");
var responseTime = require("response-time");
var axios = require("axios");
var redis = require("redis");
var db = redis.createClient();
var session = require("express-session");
var path = require("path");

app.use(responseTime());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
	secret: 'personal',
	resave: false,
	saveUninitialized: true,
	cookie: { maxAge: 60000 }
}));

db.on("error", function(error) {
	console.log(error);
});

var users = [];

require(path.resolve(__dirname, "./books.js"))(app, db, users);
require(path.resolve(__dirname, "./users.js"))(app, db, users);

app.listen(4300, function() {
	console.log("Listening on: 4300");
});