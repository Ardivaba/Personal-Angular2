import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private books: BooksService, private router: Router) { }

  addBook(title, author, description, coverUrl) {
    console.log(title + description);

    this.books.addBook(title, author, description, coverUrl);
    this.router.navigate(["/books"]);
  }

  ngOnInit() {
  }

}
