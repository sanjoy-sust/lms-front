import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule}  from '@angular/common/http'
import { AgGridModule } from 'ag-grid-angular';


import { AppComponent } from './app.component';
import { AuthorComponent } from './components/author/author.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PublisherComponent } from './components/publisher/publisher.component';
import { BookComponent } from './components/book/book.component';
import { BookSelfComponent } from './components/book-self/book-self.component';
import { LoginComponent } from './components/users/login/login.component';
import { ModalService } from './services/modal.service';
import { ModalComponent } from './components/modal/modal.component';
import {AuthorService} from './services/author.service';
import {BookService} from './services/book.service';
import {PublisherService} from './services/publisher.service'




@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    HomeComponent,
    PublisherComponent,
    BookComponent,
    BookSelfComponent,
    LoginComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [AuthorService,ModalService,BookService,PublisherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
