import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {

  private modals: any[] = [];

  constructor() { }
    
    add(tmodal: any) {
        // add modal to array of active modals
        this.modals.push(tmodal);
    }
  
    remove(id: string) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(x => x.id !== id);
    }
  
    open(id: string) {
        // open modal specified by id
        let tmodal: any = this.modals.filter(x => x.id === id)[0];
        tmodal.open();
    }
  
    close(id: string) {
        // close modal specified by id
        let tmodal: any = this.modals.filter(x => x.id === id)[0];
        tmodal.close();
    }

}
