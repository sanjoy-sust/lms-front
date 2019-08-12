import { Injectable } from '@angular/core';
import { Observable,pipe, } from 'rxjs';;
import {Publisher} from '../shared/publisher'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable()
export class PublisherService {
  constructor(private http:HttpClient) {
  }
 pubUrl="http://localhost:10230/publisher/";
  httpOptions = {
   headers: new HttpHeaders({
     'Content-Type': 'application/json'
   })
 }  

   getPublisher():Observable<Publisher[] >{
     return this.http.get<Publisher[]>( this.pubUrl)
   }
   getPublisherId(PublisherId:string){
     return this.http.get<Publisher>( this.pubUrl+PublisherId);
   }
   createPublisher(publisher:Publisher):Observable<Publisher>{
     return this.http.post<Publisher>(this.pubUrl,publisher,this.httpOptions);
   }
 
   updatePublisher(publisher:Publisher):Observable<number>{
     return this.http.put<number>(this.pubUrl,publisher,this.httpOptions);
   }
   deletePub(id:number){
     return this.http.delete(this.pubUrl+id)
   }


}
