import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {AuthorComponent} from './components/author/author.component';
import {HomeComponent} from './components/home/home.component';
import {PublisherComponent} from './components/publisher/publisher.component';
import {BookComponent} from './components/book/book.component';
import {LoginComponent} from './components/users/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component'

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'login', component: LoginComponent},
  { path: 'author', component: AuthorComponent},
  { path: 'publisher', component: PublisherComponent},
  { path: 'book', component: BookComponent},
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  ]
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
