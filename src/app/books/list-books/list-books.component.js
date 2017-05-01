"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ListBooksComponent = (function () {
    function ListBooksComponent(books) {
        this.books = books;
    }
    ListBooksComponent.prototype.ngOnInit = function () {
    };
    return ListBooksComponent;
}());
ListBooksComponent = __decorate([
    core_1.Component({
        selector: 'app-list-books',
        templateUrl: './list-books.component.html',
        styleUrls: ['./list-books.component.css']
    })
], ListBooksComponent);
exports.ListBooksComponent = ListBooksComponent;
//# sourceMappingURL=list-books.component.js.map