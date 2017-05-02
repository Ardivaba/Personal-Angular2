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
  private loaded: boolean = false;

  constructor(private books: BooksService, private route: ActivatedRoute) { }

  ngOnInit() {
    var self = this;
    this.books.getBookWeb(+this.route.snapshot.params["id"]).subscribe(book => {
      this.book = book;
      this.loaded = true;
    });
  }

  addNote(note: string) {
    this.book.notes.push(note);
    this.books.updateBook(this.book);
  }

}
