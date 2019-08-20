import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { ModalService} from '../../services/modal.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {Author} from '../../shared/author'
import { AuthorService} from '../../services/author.service';
import { GridOptions } from 'ag-grid-community';


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  title:string;
  btnTitle:string;
  message=false;
  authForm:FormGroup;
  authorUpdateid=null;
  updateMsg=false;
  gridOptions:GridOptions;
  private gridApi;
  private gridColumnApi;
  rowData: Observable< Author[]>;
  private rowSelection;
  constructor(private AtService:AuthorService,private form:FormBuilder ,private MdService:ModalService) 
  {
  
  }
  columnDefs = [
    {headerName: 'Name', field: 'name',editable:true, sortable: true, headerCheckboxSelection: true,checkboxSelection: true },
    {headerName: 'Email', field: 'email',editable:true, sortable: true },
    {headerName: 'Mobile', field: 'mobile',editable:true, sortable: true },
    {headerName: 'Address', field: 'address', sortable: true },
    {headerName: 'Birthdate', field: 'birthDate',editable:true, sortable: true, filter: "agDateColumnFilter",
    cellRenderer: (data) => data.value ? (new Date(data.value)).toLocaleDateString() : ''
    },
    {headerName: 'Country', field: 'country',editable:true, sortable: true },
    {headerName: 'Biography', field: 'biography', editable:true,sortable: true },
    {headerName: 'Background', field: 'background',editable:true, sortable: true },
    {headerName: 'Nickname', field: 'nickname', editable:true,sortable: true },

];


  ngOnInit() {
    
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
        
        this.getAuth()
        this.rowSelection= "multiple"

  }
 
  //all author data in get
   getAuth(){

    this.rowData=this.AtService.getAuthor();
   }
   onGridReady(params){
     this.gridApi=params.api
     this.gridColumnApi=params.columnApi
   }
   //store of create form data value and value pass in creatAuth() 
  addTitle(){;
    this.title="Add Author"
    this.btnTitle="Add"
  }
  addAuthor(){
   this.message=false;
   this.updateMsg=false;
   let formValue=this.authForm.value;
   this.createAuth(formValue);
   this.authForm.reset();
  }
  //update author get id and set value in input field
  auhtorEdit(){
    this.title="Edit Author";
    this.btnTitle="Update"
    var selectedData = this.gridApi.getSelectedRows();
    var res = this.gridApi.updateRowData({ update: selectedData });
    if(res.update.length>0){
    var authorId = res.update[0].data.id;
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
            this.MdService.close('myModal');
            
          }
        )
      }
  }
      //delete row select single,multiple,all
  onRemoveSelected() {
    var selectedData = this.gridApi.getSelectedRows();
    var res = this.gridApi.updateRowData({ remove: selectedData });
    var resarr=res.remove;
    if(resarr !==null ){
    for( let i=0;i<=resarr.length-1;i++){
    var id = res.remove[i].data.id;
    this.AtService.deleteAuth(id).subscribe(
        res => {
          console.log(res);
      },
    
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occurred.");
        } else {
          console.log("Server-side error occurred.");
        }
      });
    }
   }
  }
  //open pop up modal
openModal(id:string) {
    this.MdService.open(id);

  }
//close pop up modal
 closeModal() {
    this.authForm.reset();
 }

}

