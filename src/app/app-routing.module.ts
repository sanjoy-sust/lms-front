import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthorComponent} from './components/author/author.component';
import {HomeComponent} from './components/home/home.component';
import {PublisherComponent} from './components/publisher/publisher.component';
import {BookComponent} from './components/book/book.component';
import {LoginComponent} from './components/users/login/login.component';
<<<<<<< HEAD
import { AuthorListComponent } from './components/author/author-list/author-list.component';
=======
import {AuthorListComponent} from './components/author-list/author-list.component';
>>>>>>> f20cbfcd7a6f181f79c740be6fd108cd20ad4d0c


const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'publisher', component: PublisherComponent},
  {path: 'book', component: BookComponent},
  {path: 'author', component: AuthorComponent},
  {path: 'author-list', component: AuthorListComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
