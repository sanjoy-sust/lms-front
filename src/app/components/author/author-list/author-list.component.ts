import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ModalService} from '../../../services/modal.service';
import { AuthorListService} from '../../../services/author-list.service';


@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  private bodyText: string;
  private title:string;
  characters: Observable<any[]>;
  columns: string[];
  constructor(private AtService:AuthorListService,private MdService:ModalService) {}
  ngOnInit() {
    this.columns = this.AtService.getColumns(); 
    //["name", "age", "species", "occupation"]
    this.characters = this.AtService.getCharacters();
    //all data in mock-data.ts
    this.bodyText = 'This text can be updated in modal 1';
    this.title = 'Add Author';

  }
  openModal(id: string) {
    this.MdService.open(id);
  }

 closeModal(id: string) {
    this.MdService.close(id);
}
}
