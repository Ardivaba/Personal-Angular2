"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var BooksService = (function () {
    function BooksService(http) {
        this.http = http;
        this.books = new Array();
        //this.addBook("Think And Grow Rich", "Napoleon Hill", "Great book from Napolen Hill", "https://books.google.ee/books/content?id=0s-RlyINlKwC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73F9mmWzgBzLMUZPaQbx-jbt0hEsaJLU4tUENJIrM25NzcSHA6U8W_B1XrXO1mR31UpbtzZAF-pQIP2UKOMZhWiHXDNyLk9n3ZoOfLxWvGcLjDKf5eX7bdOaQgWRejL155b3NiP");
        //this.addBook("How To Win Friends And Influence People", "Andrew Carnegie", "Amazing book from Andrew Carnegie", "https://books.google.ee/books/content?id=0s-RlyINlKwC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73F9mmWzgBzLMUZPaQbx-jbt0hEsaJLU4tUENJIrM25NzcSHA6U8W_B1XrXO1mR31UpbtzZAF-pQIP2UKOMZhWiHXDNyLk9n3ZoOfLxWvGcLjDKf5eX7bdOaQgWRejL155b3NiP");
        this.preloadBooks();
    }
    BooksService.prototype.preloadBooks = function () {
        var _this = this;
        this.http.get("http://localhost:4300/api/books/").map(function (res) {
            var json = res.json();
            var books = new Array();
            for (var i = 0; i < json.length; i++) {
                _this.books.push(JSON.parse(json[i]));
            }
        });
    };
    BooksService.prototype.addBook = function (title, author, description, coverUrl) {
        if (coverUrl === void 0) { coverUrl = null; }
        var book = {
            id: this.books.length,
            title: title,
            description: description,
            author: author,
            coverUrl: coverUrl,
            notes: new Array()
        };
        this.http.get("http://localhost:4300/api/books/add/" + title + "/" + author + "/" + description + "/" + coverUrl + "").map(function (res) { }).subscribe();
        console.log("Making that http request?");
        this.books.push(book);
    };
    BooksService.prototype.getBook = function (id) {
        return this.books[id];
    };
    BooksService.prototype.getBooksWeb = function () {
        return this.http.get("http://localhost:4300/api/books/").map(function (res) {
            var json = res.json();
            var books = new Array();
            for (var i = 0; i < json.length; i++) {
                books.push(JSON.parse(json[i]));
            }
            return books;
        });
    };
    BooksService.prototype.getBookWeb = function (id) {
        return this.http.get("http://localhost:4300/api/books/").map(function (res) {
            var json = res.json();
            console.log(json);
            return (JSON.parse(json[id]));
        });
    };
    BooksService.prototype.getBooks = function () {
        return this.books;
    };
    BooksService.prototype.updateBook = function (book) {
        this.books[book.id] = book;
    };
    return BooksService;
}());
BooksService = __decorate([
    core_1.Injectable()
], BooksService);
exports.BooksService = BooksService;
//# sourceMappingURL=books.service.js.map