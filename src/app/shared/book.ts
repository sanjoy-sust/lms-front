import { DateFilter } from 'ag-grid-community';

export interface Book{
    id:number;
    name:string;
    isbn:string;
    overview:number;
    dateOfPublish:Date;
    dateOfReprint:Date;
    acknowledgement:string;
    copyright:string;
    fact:string;
    printedBy:string;
    coverDesigner:string;
    coverPhotoUrl:string;
    price:number;
    authors:any[];
    publishers:string;
    tags:string;

}
