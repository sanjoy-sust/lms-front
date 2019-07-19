import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { CHARACTERS } from '../mock-data';
@Injectable()
export class AuthorListService {
constructor() { }
getCharacters(): Observable<any[]>{
  return Observable.of(CHARACTERS).delay(100);
}
getColumns(): string[]{
  return ["SlNo", "Class", "Weight", "Strength","Action"]};
}

