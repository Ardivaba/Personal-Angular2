var nextUserId = -1;

module.exports = function(app, db) {
	function headers(res) {
		res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
		res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
		res.header('access-Control-Allow-Origin', '*');
	}

	db.lrange("users", 0, -1, function(err, result) {
		nextUserId = result.length;
	});

	app.get("/api/users/", function(req, res) {
		headers(res);

		db.lrange("users", 0, -1, function(err, result) {
			res.send(result);
		});
	});

	app.get("/api/users/login/:username/:password/", function(req, res) {
		headers(res);

		var username = req.params.username;
		var password = req.params.password;

		db.lrange("users", 0, -1, function(err, result) {
			for(var i = 0; i < result.length; i++) {
				var user = JSON.parse(result[i]);

				if(user.username == username) {
					if(user.password == password) {
						req.session.userId = user.userId;
						res.send({success: "logged in"});
						return;
					}
				}
			}

			res.send({error: "Wrong username and/or password."});
		});
	});

	app.get("/api/users/register/:username/:password", function(req, res) {
		headers(res);
		
		var username = req.params.username;
		var password = req.params.password;

		var user = {
			userId: nextUserId,
			username: username,
			password: password
		}

		db.rpush("users", JSON.stringify(user));
		res.send({success: "registered user"});
		
		nextUserId++;
	});
}