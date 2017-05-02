import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

export interface Book {
  id: number;
  title: string;
  description: string;
  author: string;
  coverUrl: string;
  notes: Array<string>;
}

@Injectable()
export class BooksService {
  private books: Array<Book> = new Array<Book>();

  constructor(private http: Http) {
    this.addBook("Think And Grow Rich", "Napoleon Hill", "Great book from Napolen Hill", "https://books.google.ee/books/content?id=0s-RlyINlKwC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73F9mmWzgBzLMUZPaQbx-jbt0hEsaJLU4tUENJIrM25NzcSHA6U8W_B1XrXO1mR31UpbtzZAF-pQIP2UKOMZhWiHXDNyLk9n3ZoOfLxWvGcLjDKf5eX7bdOaQgWRejL155b3NiP");
    this.addBook("How To Win Friends And Influence People", "Andrew Carnegie", "Amazing book from Andrew Carnegie", "https://books.google.ee/books/content?id=0s-RlyINlKwC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73F9mmWzgBzLMUZPaQbx-jbt0hEsaJLU4tUENJIrM25NzcSHA6U8W_B1XrXO1mR31UpbtzZAF-pQIP2UKOMZhWiHXDNyLk9n3ZoOfLxWvGcLjDKf5eX7bdOaQgWRejL155b3NiP");
  }

  addBook(title, author, description, coverUrl = null) {
    let book: Book = {
      id: this.books.length,
      title: title,
      description: description,
      author: author,
      coverUrl: coverUrl,
      notes: new Array<string>()
    };

    this.books.push(book);
  }

  getBook(id: number) {
    console.log("Yay!");
    console.log(this.getBooksWeb());
    return this.books[id];
  }

  getBooksWeb() {
    return this.http.get("http://localhost:4300/api/books/").map(res => {
      let json = res.json();
      let books = new Array<Book>();
      for (let i = 0; i < json.length; i++) {
        books.push(<Book>JSON.parse(json[i]));
      }

      return books;
    });
  }

  getBooks() {
    return this.books;
  }

  updateBook(book: Book) {
    this.books[book.id] = book;
  }

}
