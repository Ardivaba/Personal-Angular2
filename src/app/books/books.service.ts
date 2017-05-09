import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

export interface Book {
  userId: number;
  bookId: number;
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
    //this.addBook("Think And Grow Rich", "Napoleon Hill", "Great book from Napolen Hill", "https://books.google.ee/books/content?id=0s-RlyINlKwC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73F9mmWzgBzLMUZPaQbx-jbt0hEsaJLU4tUENJIrM25NzcSHA6U8W_B1XrXO1mR31UpbtzZAF-pQIP2UKOMZhWiHXDNyLk9n3ZoOfLxWvGcLjDKf5eX7bdOaQgWRejL155b3NiP");
    //this.addBook("How To Win Friends And Influence People", "Andrew Carnegie", "Amazing book from Andrew Carnegie", "https://books.google.ee/books/content?id=0s-RlyINlKwC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73F9mmWzgBzLMUZPaQbx-jbt0hEsaJLU4tUENJIrM25NzcSHA6U8W_B1XrXO1mR31UpbtzZAF-pQIP2UKOMZhWiHXDNyLk9n3ZoOfLxWvGcLjDKf5eX7bdOaQgWRejL155b3NiP");
    this.preloadBooks();
  }

  preloadBooks() {
    this.http.get("http://localhost:4300/api/books/").map(res => {
      let json = res.json();
      let books = new Array<Book>();
      for (let i = 0; i < json.length; i++) {
        this.books.push(<Book>JSON.parse(json[i]));
      }
    });
  }

  addBook(title, author, description, coverUrl = null) {
    let book: Book = {
      userId: 0,
      bookId: this.books.length,
      title: title,
      description: description,
      author: author,
      coverUrl: coverUrl,
      notes: new Array<string>()
    };

    this.http.get("http://localhost:4300/api/books/add/" + title + "/" + author + "/" + description + "/" + coverUrl + "").map(res => { }).subscribe();
    console.log("Making that http request?");

    this.books.push(book);
  }

  getBook(id: number) {
    return this.books[id];
  }

  getBooksWeb() {
    return this.http.get("http://localhost:4300/api/books/").map(res => {
      let json = res.json();
      console.log(json);
      let books = new Array<Book>();
      for (let i = 0; i < json.length; i++) {
        books.push(<Book>JSON.parse(json[i]));
      }

      return books;
    });
  }

  getBookWeb(id: number) {
    return this.http.get("http://localhost:4300/api/books/").map(res => {
      let json = res.json();
      console.log(json);
      return <Book>(JSON.parse(json[id]));
    });
  }

  getBooks() {
    return this.books;
  }

  updateBook(book: Book) {
    this.books[book.bookId] = book;
  }

}
