import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {AuthorComponent} from './components/author/author.component';
import {HomeComponent} from './components/home/home.component';

const appRoutes: Routes = [
  { path: 'author', component: AuthorComponent},
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
