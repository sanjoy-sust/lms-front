import { DateFilter } from 'ag-grid-community';

export interface Book{
    id:number;
    name:string;
    isbn:string;
    overview:string;
    dateOfPublish:Date;
    dateOfReprint:Date;
    acknowledgement:string;
    copyright:string;
    fact:string;
    printedBy:string;
    coverDesigner:string;
    coverPhotoUrl:string;
    price:number;
    authors:Author[];
    publishers:Publishers[];
    tags:Tags[];

} 
interface Author{
 id:number;
}
interface Publishers{
    id:number;
}
interface Tags{
    id:number;
}
