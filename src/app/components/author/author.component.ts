import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { ModalService} from '../../services/modal.service';
import {Author} from '../../shared/author'
import { AuthorService} from '../../services/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  title:string;
  message=false;
  columns: string[];
  allAuthor:Observable< Author[]>;
  authForm:FormGroup;
  authorUpdateid=null;
  updateMsg=false;
  rowData: any;
  constructor(private AtService:AuthorService,private form:FormBuilder ,private MdService:ModalService) 
  {
 
  }
  columnDefs = [
    {headerName: 'Name', field: 'name', sortable: true, filter: true, checkboxSelection: true },
    {headerName: 'Email', field: 'email', sortable: true, filter: true },
    {headerName: 'Mobile', field: 'mobile', sortable: true, filter: true },
    {headerName: 'Address', field: 'address', sortable: true, filter: true },
    {headerName: 'BirthDate', field: 'birthDate', sortable: true, filter: "agDateColumnFilter" },
    {headerName: 'Country', field: 'country', sortable: true, filter: true },
    {headerName: 'Biography', field: 'biography', sortable: true, filter: true },
    {headerName: 'Background', field: 'background', sortable: true, filter: true },
    {headerName: 'Nickname', field: 'nickname', sortable: true, filter: true },

    {headerName: 'Action', field: 'action',  
       
    },
];


  ngOnInit() {
    
        this.columns = this.AtService.getColumns(); 
    //["Name", "Email", "Mobile", "Adress","Birth Date","Country","Biography","Background",Nickname]
        this.title = 'Add Author';

       //input form data
        this.authForm=this.form.group({
          name:['',[Validators.required]],
          email:['',[Validators.required]],
          mobile:['',[Validators.required]],
          address:['',[Validators.required]],
          birthDate:['',[Validators.required]],
          country:['',[Validators.required]],
          biography:['',[Validators.required]],
          background:['',[Validators.required]],
          nickname:['',[Validators.required]],
        })
      
        this.rowData=this.getAuth();
        

  }
  //all author data in get
   getAuth(){

     this.allAuthor=this.AtService.getAuthor();
   }
   //store of create form data value and value pass in creatAuth() 
  addAuthor(){
   this.message=false;
   this.updateMsg=false;
   let formValue=this.authForm.value;
   this.createAuth(formValue);
   this.authForm.reset();
  }
  //update author get id and set value in input field
  auhtorEdit(authorId:string){
    this.AtService.getAuthorId(authorId).subscribe(
      author=>{
        this.authorUpdateid=authorId;

        this.authForm.controls['name'].setValue(author.name);
        this.authForm.controls['email'].setValue(author.email);
        this.authForm.controls['mobile'].setValue(author.mobile);
        this.authForm.controls['address'].setValue(author.address);
        this.authForm.controls['birthDate'].setValue(author.birthDate);
        this.authForm.controls['country'].setValue(author.country);
        this.authForm.controls['biography'].setValue(author.biography);
        this.authForm.controls['background'].setValue(author.background);
        this.authForm.controls['nickname'].setValue(author.nickname);
  

        
      }
    )
  }
  //create new author 
  createAuth(author:Author){
    if(this.authorUpdateid==null){
     this.AtService.createAuthor(author).subscribe(
       author=>{
         this.message=true;
         this.getAuth();
         this.authorUpdateid=null;
        }
     )
      }
      //else id not null then edit author info  
      else{
        author.id=this.authorUpdateid;
        this.AtService.updateAuthor(author).subscribe(
          author=>{
            this.updateMsg=true;
            this.getAuth();
            this.closeModal('addAuthorModel')
          }
        )
      }
  }
  //open pop up modal
  openModal(id: string) {
    this.MdService.open(id);
  }
//close pop up modal
 closeModal(id: string) {
    this.MdService.close(id);
    this.authForm.reset();
 }

}

