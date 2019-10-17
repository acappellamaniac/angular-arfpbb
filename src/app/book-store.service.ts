import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Book, BookRaw } from './models/book';

@Injectable()
export class BookStore {
  api = 'https://www.ebay-kleinanzeigen.de/m-merkliste.html';
  
  constructor(private http: HttpClient) {}
  
  loadAll(): Observable<Book[]> {
     return this.http
       .get<BookRaw[]>(`${this.api}`)
       .map(raws => this.provideBooksFrom(raws));
  }
  
  provideBooksFrom(raws: BookRaw[]): Book[] {
    return raws.map(raw => new Book(
      raw.title,
      raw.subtitle,
      raw.isbn,
      raw.description,
      raw.authorTeam = raw.authors.join(' & ')
    ));
  }
}