import { Component, OnInit } from '@angular/core';
import { BooksService, Book } from '../books.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {
  books: Array<Book>;

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.booksService.getBooksWeb().subscribe(books => this.books = books);

    var self = this;
  }

}
