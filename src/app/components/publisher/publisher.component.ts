import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ModalService} from '../../services/modal.service';
import { PublisherService} from '../../services/publisher.service';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent implements OnInit {
  private title:string;
  characters: Observable<any[]>;
  columns: string[];
  constructor(private MdService:ModalService,private PbService:PublisherService) {}
  ngOnInit() {
    this.columns = this.PbService.getColumns(); 
    //["Name", "Email", "Mobile", "Adress","Birth Date","Country","Biography","Background",Nickname]
    this.characters = this.PbService.getCharacters();
    //all data in mock-data.ts
    this.title = 'Add Publisher';
  }
  openModal(id: string) {
    this.MdService.open(id);
  }

 closeModal(id: string) {
    this.MdService.close(id);
}

}
