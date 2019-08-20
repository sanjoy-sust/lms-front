import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CHARACTERS } from '../mock-data';
import {Book} from '../shared/book'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class BookService {

  constructor(private http:HttpClient,) { }
  bookUrl="http://localhost:10230/book/";
  httpOptions = {
   headers: new HttpHeaders({
     'Content-Type': 'application/json'
   })
 }  

   getBook():Observable<Book[] >{
     return this.http.get<Book[]>( this.bookUrl)
   }
   getAuthor(){
   return this.http.get('http://localhost:10230/author/')
   }
   getpublisher(){
    return this.http.get('http://localhost:10230/publisher/')
    }
    getTags(){
      return this.http.get('http://localhost:10230/tag/')
      }
   getBookId(BookId:string){
     return this.http.get<Book>( this.bookUrl+BookId);
   }
   createBook(Book:Book):Observable<Book>{
     return this.http.post<Book>(this.bookUrl,Book,this.httpOptions)
   }
 
   updateBook(Book:Book):Observable<number>{
     return this.http.put<number>(this.bookUrl+Book.id,Book,this.httpOptions)
   }
   deleteBook(id:number){
     return this.http.delete(this.bookUrl+id)
   }
}
