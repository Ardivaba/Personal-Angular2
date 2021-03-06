"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var BookComponent = (function () {
    function BookComponent(books, route) {
        this.books = books;
        this.route = route;
        this.loaded = false;
    }
    BookComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        this.books.getBookWeb(+this.route.snapshot.params["id"]).subscribe(function (book) {
            _this.book = book;
            _this.loaded = true;
        });
    };
    BookComponent.prototype.addNote = function (note) {
        this.book.notes.push(note);
        this.books.updateBook(this.book);
    };
    return BookComponent;
}());
BookComponent = __decorate([
    core_1.Component({
        selector: 'app-book',
        templateUrl: './book.component.html',
        styleUrls: ['./book.component.css']
    })
], BookComponent);
exports.BookComponent = BookComponent;
//# sourceMappingURL=book.component.js.map