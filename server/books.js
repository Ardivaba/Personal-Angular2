var nextBookId = -1;

module.exports = function(app, db, users) {
	function headers(res) {
		res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
		res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
		res.header('access-Control-Allow-Origin', '*');
	}

	function loggedIn(req, res) {
		if(users[req.body.token] == null) {
			res.send({error: "Login first!"});
			return false;
		}

		return true;
	}

	db.lrange("books", 0, -1, function(err, result) {
		nextBookId = result.length;
	});

	app.post("/api/books/", function(req, res) {
		headers(res);
		if(!loggedIn(req, res)) return;

		var bookId = parseInt(req.params.bookId);
		db.lrange("books", 0, -1, function(err, result) {
			var userBooks = [];
			for(var i = 0; i < result.length; i++) {
				var book = JSON.parse(result[i]);
				if(book.userId == users[req.body.token]	) {
					userBooks.push(book);
				}
			}

			res.send(JSON.stringify(userBooks));
		});
	});

	app.post("/api/books/get/:bookId", function(req, res) {
		if(!loggedIn(req, res)) return;

		var bookId = parseInt(req.params.bookId);
		db.lrange("books", 0, -1, function(err, result) {
			var userBook = null;
			for(var i = 0; i < result.length; i++) {
				var book = JSON.parse(result[i]);
				if(book.userId == users[req.body.token] && book.bookId == bookId) {
					userBook = book;
				}
			}

			res.send(JSON.stringify(userBook));
		});
	});

	app.post("/api/books/add/", function(req, res) {
		if(!loggedIn(req, res)) return;

		var title = req.body.title;
		var description = req.body.description;
		var author = req.body.author;
		var coverUrl = req.body.coverUrl;

		var book = {
			userId: users[req.body.token],
			bookId: nextBookId,
			title: title,
			description: description,
			author: author,
			coverUrl: coverUrl,
			notes: []
		}

		db.rpush("books", JSON.stringify(book));

		res.send(`
			${JSON.stringify(book)}
		`);

		nextBookId++;
	});

	app.post("/api/books/remove/:bookId", function(req, res) {
		console.log("Removing book...");
		if(!loggedIn(req, res)) return;

		var removeBookId = parseInt(req.params.bookId);

		var removed = false;
		db.lrange("books", 0, -1, function(err, result) {
			for(var i = 0; i < result.length; i++) {
				var book = JSON.parse(result[i]);
				var bookId = book.bookId;

				if(bookId == removeBookId && book.userId == users[req.body.token]) {
					removed = true;
					db.lset("books", i, "REMOVED");
					db.lrem("books", 1, "REMOVED");
				}
			}

			if(removed) {
				res.send("removed");
			} else {
				res.send("couldn't find book with this id");
			}
		});
	});

	app.get("/api/books/modify/:bookId/:title/:description/:author/:coverUrl/", function(req, res) {
		if(!loggedIn(req, res)) return;

		var bookId = req.params.bookId;
		var title = req.params.title;
		var description = req.params.description;
		var author = req.params.author;
		var coverUrl = req.params.coverUrl;

		db.lrange("books", 0, -1, function(err, result) {
			for(var i = 0; i < result.length; i++) {
				var book = JSON.parse(result[i]);
				if(book.userId == req.session.userId && book.bookId == bookId) {
					if(title != null && title.length > 0) {
						book.title = title;
					}

					if(description != "null && description.length > 1") {
						book.description = description;
					}

					if(author != null && author.length > 1) {
						book.author = author;
					}

					if(coverUrl != null && coverUrl.length > 1) {
						book.coverUrl = coverUrl;
					}

					db.lset("books", i, JSON.stringify(book));
				}
			}

			res.send(JSON.stringify(book));
		});
	});
}