import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authorForm = new FormGroup ({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),
    type: new FormControl(),
  });
  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }
  addAuthor() {
    console.log('Here at submit');
    console.log(this.authorForm.getRawValue());
  }
  createForm() {
    this.authorForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      type: ''
    });
  }
}
