import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Book} from '../../shared/book';
import { ModalService} from '../../services/modal.service';
import { BookService} from '../../services/book.service';
import { from } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { GridOptions, CellComp } from 'ag-grid-community';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  title:string;
  btnTitle:string;
  message=false;
  authForm:FormGroup;
  authorUpdateid=null;
  updateMsg=false;
  gridOptions:GridOptions;
  private gridApi;
  private gridColumnApi;
  rowData: Observable< Book[]>;
  private rowSelection;
  constructor(private MdService:ModalService,private BkService:BookService) {}
  columnDefs = [
    {headerName: 'Name', field: 'name',editable:true, sortable: true, autoHeight: true,headerCheckboxSelection: true,checkboxSelection: true },
    {headerName: 'isbn', field: 'isbn',editable:true, sortable: true,autoHeight: true, },
    // {headerName: 'overview', field: 'overview',editable:true, sortable: true },
    // {headerName: 'dateOfPublish', field: 'dateOfPublish', sortable: true, filter: "agDateColumnFilter",
    // cellRenderer: (data) => data.value ? (new Date(data.value)).toLocaleDateString() : ''
    // },
    // {headerName: 'dateOfReprint', field: 'dateOfReprint' , sortable: true, filter: "agDateColumnFilter",
    // cellRenderer: (data) => data.value ? (new Date(data.value)).toLocaleDateString() : ''
    // },
    // {headerName: 'acknowledgement', field: 'acknowledgement',editable:true, sortable: true },
    // {headerName: 'copyright', field: 'copyright', editable:true,sortable: true },
    // {headerName: 'printedBy', field: 'fact',editable:true, sortable: true },
    // {headerName: 'ccoverDesigner', field: 'coverDesigner', editable:true,sortable: true },
    // {headerName: 'coverPhotoUrl', field: 'coverPhotoUrl', editable:true,sortable: true },
    // {headerName: 'price', field: 'price', editable:true,sortable:true },
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
           ress +=res.name+"<br>";
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
    },
    {headerName: 'More Deatails', field: '', sortable: true,
     cellRenderer:params=>
     {
        return  '<a data-toggle="modal" data-target="#myModal">More Details</a>'
        
                +'<div id="myModal" class="modal fade" role="dialog"><div class="modal-dialog">'
                +'<div class="modal-content"><div class="modal-header">'
                +'<button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">More Details</h4></div>'
                +'<div class="modal-body"><p>Some text in the modal.</p></div>'
                +'<div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div>'
                +'</div>'
                +'</div>'
                +'</div>';
                
     }
     
    },

];
  ngOnInit() {

    this.title = 'Add Book';
    this.getBook();
    

  }
  getBook(){

    this.rowData=this.BkService.getBook();
   }
}
