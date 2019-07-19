import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Libary Management System';
  isEdit: boolean=false;
  now:number;
  constructor() {
      setInterval(() => {
        this.now = Date.now();
      }, 1);
  }
  ngOnInit() {
  }
  toggleEdit(){
    this.isEdit= !this.isEdit;
  }
}
