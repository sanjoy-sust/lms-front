import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthorListService } from '../../services/author-list.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  characters: Observable<any[]>;
  columns: string[];
  constructor(private atService:AuthorListService) {}
  ngOnInit() {
    this.columns = this.atService.getColumns(); 
    //["name", "age", "species", "occupation"]
    this.characters = this.atService.getCharacters();
    //all data in mock-data.ts
  }
}
