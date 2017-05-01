"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var BooksService = (function () {
    function BooksService() {
        this.books = new Array();
        this.addBook("Think And Grow Rich", "Napoleon Hill", "Great book from Napolen Hill", "https://books.google.ee/books/content?id=0s-RlyINlKwC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73F9mmWzgBzLMUZPaQbx-jbt0hEsaJLU4tUENJIrM25NzcSHA6U8W_B1XrXO1mR31UpbtzZAF-pQIP2UKOMZhWiHXDNyLk9n3ZoOfLxWvGcLjDKf5eX7bdOaQgWRejL155b3NiP");
        this.addBook("How To Win Friends And Influence People", "Andrew Carnegie", "Amazing book from Andrew Carnegie", "https://books.google.ee/books/content?id=0s-RlyINlKwC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73F9mmWzgBzLMUZPaQbx-jbt0hEsaJLU4tUENJIrM25NzcSHA6U8W_B1XrXO1mR31UpbtzZAF-pQIP2UKOMZhWiHXDNyLk9n3ZoOfLxWvGcLjDKf5eX7bdOaQgWRejL155b3NiP");
    }
    BooksService.prototype.addBook = function (title, author, description, coverUrl) {
        if (coverUrl === void 0) { coverUrl = null; }
        var book = {
            id: this.books.length,
            title: title,
            description: description,
            author: author,
            coverUrl: coverUrl
        };
        this.books.push(book);
    };
    BooksService.prototype.getBook = function (id) {
        return this.books[id];
    };
    BooksService.prototype.getBooks = function () {
        return this.books;
    };
    return BooksService;
}());
BooksService = __decorate([
    core_1.Injectable()
], BooksService);
exports.BooksService = BooksService;
//# sourceMappingURL=books.service.js.map