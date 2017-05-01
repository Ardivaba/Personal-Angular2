import { Injectable } from '@angular/core';

export interface Book {
  id: number;
  title: string;
  description: string;
  author: string;
  coverUrl: string;
}

@Injectable()
export class BooksService {
  private books: Array<Book> = new Array<Book>();

  constructor() {
    this.addBook("Think And Grow Rich", "Napoleon Hill", "Great book from Napolen Hill", "https://books.google.ee/books/content?id=0s-RlyINlKwC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73F9mmWzgBzLMUZPaQbx-jbt0hEsaJLU4tUENJIrM25NzcSHA6U8W_B1XrXO1mR31UpbtzZAF-pQIP2UKOMZhWiHXDNyLk9n3ZoOfLxWvGcLjDKf5eX7bdOaQgWRejL155b3NiP");
    this.addBook("How To Win Friends And Influence People", "Andrew Carnegie", "Amazing book from Andrew Carnegie", "https://books.google.ee/books/content?id=0s-RlyINlKwC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73F9mmWzgBzLMUZPaQbx-jbt0hEsaJLU4tUENJIrM25NzcSHA6U8W_B1XrXO1mR31UpbtzZAF-pQIP2UKOMZhWiHXDNyLk9n3ZoOfLxWvGcLjDKf5eX7bdOaQgWRejL155b3NiP");
  }

  addBook(title, author, description, coverUrl = null) {
    let book: Book = {
      id: this.books.length,
      title: title,
      description: description,
      author: author,
      coverUrl: coverUrl
    };

    this.books.push(book);
  }

  getBook(id: number) {
    return this.books[id];
  }

  getBooks() {
    return this.books;
  }

}
