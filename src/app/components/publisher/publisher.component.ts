import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Publisher} from '../../shared/publisher'
import { ModalService} from '../../services/modal.service';
import { PublisherService} from '../../services/publisher.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GridOptions } from 'ag-grid-community';
import { HttpErrorResponse } from '@angular/common/http';
import { element, $ } from 'protractor';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent implements OnInit {
  title:string;
  btnTitle:string;
  message=false;
  publisherForm:FormGroup;
  PublisherUpdateid=null;
  updateMsg=false;
  gridOptions:GridOptions;
  private gridApi;
  private gridColumnApi;
  rowData: Observable< Publisher[]>;
  private rowSelection;
  myPublisher=true;
  constructor(private MdService:ModalService,private form:FormBuilder,private PbService:PublisherService) 
  {

  }

  columnDefs = [
    {headerName: 'Name', field: 'name',editable:true, sortable: true, headerCheckboxSelection: true,checkboxSelection: true },
    {headerName: 'Address', field: 'address', sortable: true },
    {headerName: 'Mobile', field: 'mobile',editable:true, sortable: true },
    {headerName: 'Contact PersonName', field: 'contactPersonName',editable:true, sortable: true },
    {headerName: 'Contact PersonMobile', field: 'contactPersonMobile',editable:true, sortable: true },
    {headerName: 'Website', field:'website',editable:true, sortable: true },
    {headerName: 'Email', field: 'email', editable:true,sortable: true },
    {headerName: 'facebookPage', field: 'facebookPage',editable:true, sortable: true },
    {headerName: 'about', field: 'about', editable:true,sortable: true },

];
  ngOnInit() {
    this.title = 'Add Publisher';
    //input form data
    this.publisherForm=this.form.group({
      name:['',[Validators.required]],
      address:['',[Validators.required]],
      mobile:['',[Validators.required]],
      contactPersonName:['',[Validators.required]],
      contactPersonMobile:['',[Validators.required]],
      website:['',[Validators.required]],
      email:['',[Validators.required]],
      facebookPage:['',[Validators.required]],
      about:['',[Validators.required]],
  });
    this.getPub();
    this.rowSelection= "multiple";

  }
getPub(){
  this.rowData=this.PbService.getPublisher();
}
onGridReady(params){
  this.gridApi=params.api
  this.gridColumnApi=params.columnApi
}
addTitle(){;
  this.title="Add Publisher"
  this.btnTitle="Add"
}
addPublisher(){
 this.message=false;
 this.updateMsg=false;
 let formValue=this.publisherForm.value;
 this.createPublisher(formValue);
 this.publisherForm.reset();
}
createPublisher(publisher:Publisher){
  if(this.PublisherUpdateid==null){
   this.PbService.createPublisher(publisher).subscribe(
     publisher=>{
       this.message=true;
       this.getPub();
       this.PublisherUpdateid=null;
      }
   )
    }
    // else id not null then edit publisher info  
    else{
      publisher.id=this.PublisherUpdateid;
      this.PbService.updatePublisher(publisher).subscribe(
        publisher=>{
          this.updateMsg=true;
          setTimeout(() => {
          
          },4000 );
          this.getPub();
          
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
publisherEdit(){
  this.title="Edit Publisher";
  this.btnTitle="Update"
  var selectedData = this.gridApi.getSelectedRows();
  var res = this.gridApi.updateRowData({ update: selectedData });
  if(res.update.length>0){
  var publisherId = res.update[0].data.id;
  this.PbService.getPublisherId(publisherId).subscribe(
    publisher=>{
      this.PublisherUpdateid=publisherId;

      this.publisherForm.controls['name'].setValue(publisher.name);
      this.publisherForm.controls['address'].setValue(publisher.address);
      this.publisherForm.controls['mobile'].setValue(publisher.mobile);
      this.publisherForm.controls['contactPersonName'].setValue(publisher.contactPersonName);
      this.publisherForm.controls['contactPersonMobile'].setValue(publisher.contactPersonMobile);
      this.publisherForm.controls['website'].setValue(publisher.website);
      this.publisherForm.controls['email'].setValue(publisher.email);
      this.publisherForm.controls['facebookPage'].setValue(publisher.facebookPage);
      this.publisherForm.controls['about'].setValue(publisher.about);
      // this.publisherForm.controls['background'].setValue(publisher.background);
    }
  )
}
}
onRemoveSelected() {
  var selectedData = this.gridApi.getSelectedRows();
  var res = this.gridApi.updateRowData({ remove: selectedData });
  var resarr=res.remove;
  if(resarr !==null ){
  for( let i=0;i<=resarr.length-1;i++){
  var id = res.remove[i].data.id;
  this.PbService.deletePub(id).subscribe(
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
  this.publisherForm.reset();
 }

}
