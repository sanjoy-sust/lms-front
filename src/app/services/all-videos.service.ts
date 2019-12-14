import { Injectable } from '@angular/core';
import {AllVideos} from '../shared/all-videos'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable,pipe, } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllVideosService {
  constructor(private http:HttpClient) { }
  AllVideosUrl="http://localhost:10260/youtube/";
  httpOptions = {
   headers: new HttpHeaders({
     'Content-Type': 'application/json'
   })
 }
  getVideo():Observable<AllVideos[] >{
    return this.http.get<AllVideos[]>( this.AllVideosUrl);
  }
}
