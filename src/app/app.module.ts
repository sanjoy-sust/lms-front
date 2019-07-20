import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { AuthorComponent } from './components/author/author.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PublisherComponent } from './components/publisher/publisher.component';
import { BookComponent } from './components/book/book.component';
import { BookSelfComponent } from './components/book-self/book-self.component';
import { LoginComponent } from './components/users/login/login.component';
import { AuthorListComponent } from './components/author/author-list/author-list.component';
import {AuthorListService} from './services/author-list.service'
import { ModalService } from './services/modal.service';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    HomeComponent,
    PublisherComponent,
    BookComponent,
    BookSelfComponent,
    LoginComponent,
    AuthorListComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthorListService,ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
