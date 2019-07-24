import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ModalService} from '../../services/modal.service';
import { BookService} from '../../services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private MdService:ModalService,private BkService:BookService) {}
  private bodyText: string;
  private title:string;
  characters: Observable<any[]>;
  columns: string[];
  ngOnInit() {
    this.columns = this.BkService.getColumns(); 
    //["Name", "Email", "Mobile", "Adress","Birth Date","Country","Biography","Background",Nickname]
    this.characters = this.BkService.getCharacters();
    //all data in mock-data.ts
    this.title = 'Add Book';
  }
  openModal(id: string) {
    this.MdService.open(id);
  }

 closeModal(id: string) {
    this.MdService.close(id);
}
}
