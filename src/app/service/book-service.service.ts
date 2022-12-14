import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "../model/book";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  url: string = "http://localhost:8080/api/books"
  books: Book[];

  constructor(private http : HttpClient) { }

  getData(): Observable<Book[]>{
    return this.http.get<Book []>(this.url);
  }

  getDataById(id: number): Observable<Book> {
    const newUrl = `${this.url}/${id}`;
    
    return this.http.get<Book>(newUrl);
  }

  updateBookRecord(book: Book): Observable<Book>{
    return this.http.put<Book>(this.url, book);
  }
  deleteBookById(id: number){
    const newUrl = `${this.url}/${id}`
    console.log("url: ", newUrl );
    return this.http.delete<Book>(newUrl);
  }

  addBookRecord(book: Book): Observable<Book> {
    return this.http.post<Book>(this.url, book);
  }
  
}
