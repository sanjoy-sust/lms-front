import { Component, OnInit } from '@angular/core';
import {ModalService} from '../../services/modal.service'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {AuthorService} from '../../services/author.service'
import { Observable } from 'rxjs';
import {Author} from '../../shared/author'


@Component({
  selector: 'app-cell-render',
  templateUrl: './cell-render.component.html',
  styleUrls: ['./cell-render.component.css']
})
export class CellRenderComponent implements OnInit {
  data: any;
constructor() { }
  agInit(params):void{
    this.data=params.value;
 }
  ngOnInit() {
  }
    
    
   

}
