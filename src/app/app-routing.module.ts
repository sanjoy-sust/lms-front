import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {AuthorComponent} from './components/author/author.component';
import {HomeComponent} from './components/home/home.component';
import {PublisherComponent} from './components/publisher/publisher.component';
import {BookComponent} from './components/book/book.component';

const appRoutes: Routes = [
  { path: 'author', component: AuthorComponent},
  { path: 'publisher', component: PublisherComponent},
  { path: 'book', component: BookComponent},
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  ]
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
