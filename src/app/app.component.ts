import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Libary Management System';
  isEdit: boolean=false;
  now:number;
  toggleEdit(){
    this.isEdit= !this.isEdit;
  }
  constructor() {
      setInterval(() => {
        this.now = Date.now();
      }, 1);
  }
}
