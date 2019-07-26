import { Injectable } from '@angular/core';
import {Author} from '../shared/author'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable,pipe, } from 'rxjs';


@Injectable()
export class AuthorListService {
constructor(private http:HttpClient) {
 }
 authUrl="http://localhost:10230/author/";
 httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}  
getColumns(): string[]{
  return ["Name", "Email", "Mobile", "Adress","Birth Date","Country","Biography","Background","Nickname"]};
 
  getAuthor():Observable<Author[] >{
    return this.http.get<Author[]>( this.authUrl)
  }
  getAuthorId(authorId:string){
    return this.http.get<Author>( this.authUrl+authorId);
  }
  createAuthor(author:Author):Observable<Author>{
    return this.http.post<Author>(this.authUrl,author,this.httpOptions)
  }

  updateAuthor(author:Author):Observable<number>{
    return this.http.put<number>(this.authUrl+author.id,author,this.httpOptions)
  }

}

