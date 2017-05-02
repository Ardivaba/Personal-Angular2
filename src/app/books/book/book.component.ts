import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService, Book } from '../books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  private book: Book;

  constructor(private books: BooksService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.book = this.books.getBook(+this.route.snapshot.params["id"]);
  }

  addNote(note: string) {
    this.book.notes.push(note);
    this.books.updateBook(this.book);
  }

}
