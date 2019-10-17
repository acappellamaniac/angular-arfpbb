import { Component, OnInit } from '@angular/core';
import { BookStore } from './book-store.service';

import { Book } from './models/book';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: ['h3 { margin-top: 32px; }']
})
export class AppComponent implements OnInit {
  books: any[];
  
  constructor(private bookStore: BookStore) {}
  
  ngOnInit() {
    this.bookStore
      .loadAll()
      .subscribe(books => this.books = books);
  }
}