import { Injectable } from '@angular/core';
import {Author} from '../shared/author'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable,pipe } from 'rxjs';
import { retry} from 'rxjs/operators';
import { stringify } from '@angular/core/src/util';

@Injectable()
export class AuthorListService {
constructor(private http:HttpClient) {
 }
 httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}  
getColumns(): string[]{
  return ["Name", "Email", "Mobile", "Adress","Birth Date","Country","Biography","Background","Nickname"]};
 
  getAuthor():Observable<Author>{
    return this.http.get<Author>('http://localhost:10230/author/').pipe(
        retry(1),
    );
  }
  createEmployee(param:Author): Observable<Author> {
    return this.http.post<Author>( 'http://localhost:10230/author/',param).map(res => <Author> res).pipe(
      retry(1),
    )
  } 
  getAuthorById() {
    return this.http.get('http://localhost:10230/author/{id}' );
  }

}

