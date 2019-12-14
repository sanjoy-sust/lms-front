import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Libary Management System';
  isEdit: boolean=false;
  isYoutube:boolean=false;
  now:number;
  constructor() {
      setInterval(() => {
        this.now = Date.now();
      }, 1);
  }
  toggleEdit(){
    this.isEdit= !this.isEdit;
  }
  toggleYoutube(){
    this.isYoutube=!this.isYoutube
  }
}
