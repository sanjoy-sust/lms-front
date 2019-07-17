import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
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
