import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Book} from '../../shared/book';
import { ModalService} from '../../services/modal.service';
import { BookService} from '../../services/book.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { GridOptions, CellComp } from 'ag-grid-community';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  title:string;
  btnTitle:string;
  message=false;
  bookForm:FormGroup;
  bookUpdateid=null;
  updateMsg=false;
  gridOptions:GridOptions;
  private gridApi;
  private gridColumnApi;
  rowData: Observable< Book[]>;
  private rowSelection;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  pubSettings={};
  tagSettings={}
  pubList=[];
  tagList=[];
  constructor(private MdService:ModalService,private form:FormBuilder,private BkService:BookService) {

  }

  columnDefs = [
    {headerName: 'Name', field: 'name',editable:true, sortable: true, autoHeight: true,headerCheckboxSelection: true,checkboxSelection: true },
    {headerName: 'isbn', field: 'isbn',editable:true, sortable: true,autoHeight: true, },
    {headerName: 'overview', field: 'overview',editable:true, sortable: true },
    {headerName: 'dateOfPublish', field: 'dateOfPublish', sortable: true, filter: "agDateColumnFilter",
    cellRenderer: (data) => data.value ? (new Date(data.value)).toLocaleDateString() : ''
    },
    {headerName: 'dateOfReprint', field: 'dateOfReprint' , sortable: true, filter: "agDateColumnFilter",
    cellRenderer: (data) => data.value ? (new Date(data.value)).toLocaleDateString() : ''
    },
    {headerName: 'acknowledgement', field: 'acknowledgement',editable:true, sortable: true },
    {headerName: 'copyright', field: 'copyright', editable:true,sortable: true },
    {headerName: 'printedBy', field: 'fact',editable:true, sortable: true },
    {headerName: 'ccoverDesigner', field: 'coverDesigner', editable:true,sortable: true },
    {headerName: 'coverPhotoUrl', field: 'coverPhotoUrl', editable:true,sortable: true },
    {headerName: 'price', field: 'price', editable:true,sortable:true },
    {headerName: 'authors', field: 'authors', editable:true,sortable: true,autoHeight: true,
     cellRenderer:params=>
     {
       let len=params.data.authors.length;
       var ress='';       
       for(var i=0;i<=len-1;i++)
       {
          var res =params.data.authors[i];
          if( res !== null && ( res.name !==null|| res.name !=='undefined'))
          {
            ress +=res.name+"<br>";
          }
       }
       return ress;       
     }
    },
    {headerName: 'publishers', field: 'publishers',autoHeight: true, editable:true,sortable: true,
    cellRenderer:params=>
    {
      let len=params.data.publishers.length;
      var ress='';       
      for(var i=0;i<=len-1;i++)
      {
         var res =params.data.publishers[i];
         if( res !== null && ( res.name !==null|| res.name !=='undefined'))
         {
           ress +=res.name+"<br> ";
         }
      }
      return ress;       
    }
    },
    {headerName: 'tags', field: 'tags', editable:true,autoHeight: true,sortable: true,
    cellRenderer:params=>
    {
      let len=params.data.tags.length;
      var ress='';       
      for(var i=0;i<=len-1;i++)
      {
         var res =params.data.tags[i];
         if( res !== null && ( res.name !==null|| res.name !=='undefined'))
         {
           ress +=res.name+"<br>";
         }
      }
      return ress;       
    }
    }
];
  ngOnInit() {
    
    this.title = 'Add Book';
    this.bookForm=this.form.group({
      name:['',[Validators.required]],
      isbn:['',[Validators.required]],
      overview:['',[Validators.required]],
      dateOfPublish:['',[Validators.required]],
      dateOfReprint:['',[Validators.required]],
      acknowledgement:['',[Validators.required]],
      copyright:['',[Validators.required]],
      fact:['',[Validators.required]],
      printedBy:['',[Validators.required]],
      coverDesigner:['',[Validators.required]],
      coverPhotoUrl:['',[Validators.required]],
      price:['',[Validators.required]],
      authors:[,[Validators.required]],
      publishers:[,[Validators.required]],
      tags:[,[Validators.required]],


  }); 
   
  this.rowSelection="multiple";
    
   this.getBook();
 
   this.dropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'name',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };
  this.pubSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'name',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };  
  this.tagSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'name',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };
  this.getData();
  this.getPub();
  this.getTag();

    
  }
  onGridReady(params){
    this.gridApi=params.api
    this.gridColumnApi=params.columnApi
  }
  getData(): void {
    let tmp = [];
    this.BkService.getAuthor().subscribe((data:any) => {
      for(let i=0; i<data.length; i++) {
        tmp.push({ id:data[i].id, name: data[i].name });
      }
      this.dropdownList = tmp;
    });
  }
  getPub(): void {
    let tmp = [];
    this.BkService.getpublisher().subscribe((data:any) => {
      for(let i=0; i<data.length; i++) {
        tmp.push({ id:data[i].id, name: data[i].name });
      }
      this.pubList = tmp;
    });
  }
  getTag(): void {
    let tmp = [];
    this.BkService.getTags().subscribe((data:any) => {
      for(let i=0; i<data.length; i++) {
        tmp.push({ id:data[i].id, name: data[i].name });
      }
      this.tagList = tmp;
    });
  }
  getBook(){
    this.rowData=this.BkService.getBook();
   }
  addTitle(){
    this.title="Add Book"
    this.btnTitle="Add"
    }
  addBook(){
    this.message=false;
    this.updateMsg=false;
    let formValue=this.bookForm.value;
    this.createBook(formValue);
    this.bookForm.reset();
   }
   createBook(book:Book){
    if(this.bookUpdateid==null){
     this.BkService.createBook(book).subscribe(
       book=>{
         this.message=true;
         this.getBook();
         this.bookUpdateid=null;
        }
     )
      }
      else{
        book.id=this.bookUpdateid;
        this.BkService.updateBook(book).subscribe(
          author=>{
            this.updateMsg=true;
            this.getBook();
            
          }
        )
      }
    }
    bookEdit(items:any){

      this.title="Edit Book";
      this.btnTitle="Update"
      var selectedData = this.gridApi.getSelectedRows();
      var res = this.gridApi.updateRowData({ update: selectedData });
      if(res.update.length>0){
      var bookId = res.update[0].data.id;
      this.BkService.getBookId(bookId).subscribe(
        book=>{
          this.bookUpdateid=bookId;  
          this.bookForm.controls['name'].setValue(book.name);
          this.bookForm.controls['isbn'].setValue(book.isbn);
          this.bookForm.controls['overview'].setValue(book.overview);
          this.bookForm.controls['dateOfPublish'].setValue(book.dateOfPublish);
          this.bookForm.controls['dateOfReprint'].setValue(book.dateOfReprint);
          this.bookForm.controls['acknowledgement'].setValue(book.acknowledgement);
          this.bookForm.controls['copyright'].setValue(book.copyright);
          this.bookForm.controls['fact'].setValue(book.fact);
          this.bookForm.controls['printedBy'].setValue(book.printedBy);
          this.bookForm.controls['coverDesigner'].setValue(book.coverDesigner);
          this.bookForm.controls['coverPhotoUrl'].setValue(book.coverPhotoUrl);
          this.bookForm.controls['price'].setValue(book.price);
          this.bookForm.controls['authors'].setValue(book.authors);
          this.bookForm.controls['publishers'].setValue(book.publishers);
          this.bookForm.controls['tags'].setValue(book.tags);
    
        }
      )
    }
  }
  onItemDeSelect(items: any) {
    console.log(items);
  }
  onRemoveSelected() {
    var selectedData = this.gridApi.getSelectedRows();
    var res = this.gridApi.updateRowData({ remove: selectedData });
    var resarr=res.remove;
    if(resarr !==null ){
      for( let i=0;i<=resarr.length-1;i++){
            var id = res.remove[i].data.id;
            this.BkService.deleteBook(id).subscribe(
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
   //close pop up modal
closeModal() {
  this.bookForm.reset();
 }
}
