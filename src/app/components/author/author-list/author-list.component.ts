import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { ModalService} from '../../../services/modal.service';
import { Router } from '@angular/router';
import {Author} from '../../../shared/author'
import { AuthorListService} from '../../../services/author-list.service';
import { Time } from '@angular/common';
import { createTokenForExternalReference } from '@angular/compiler/src/identifiers';


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
  addForm = new FormGroup ({
    name: new FormControl(),
    email: new FormControl(),
    mobile: new FormControl(),
    address: new FormControl(),
    birthDate: new FormControl(),
    country: new FormControl(),
    biography: new FormControl(),
    background: new FormControl(),
    nickname: new FormControl(),
  });
  Author: {};

  constructor(private AtService:AuthorListService,private formBuilder: FormBuilder,private router: Router,private MdService:ModalService) 
  {
     this.createForm();

  }
  
  ngOnInit() {
    this.columns = this.AtService.getColumns(); 
    //["Name", "Email", "Mobile", "Adress","Birth Date","Country","Biography","Background",Nickname]
    this.bodyText = 'This text can be updated in modal 1';
    this.title = 'Add Author';
    this.AtService.getAuthor().subscribe((author:Author) => {
      this.Author = author
    })

  }
  addAuthor(){
    this.AtService.createEmployee(this.addForm).subscribe((author:Author) => {
      this.router.navigate(['/employees-list'])
    })
  }
  openModal(id: string) {
    this.MdService.open(id);
  }

 closeModal(id: string) {
    this.MdService.close(id);
 }
  createForm(){
    this.addForm = this.formBuilder.group({
      name: '',
      email: '',
      mobile: '',
      adress: '',
      birthdate: '',
      country:'',
      biography:'',
      background:'',
      nickname:''
    });
  }

}

