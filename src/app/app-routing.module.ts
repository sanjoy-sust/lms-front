import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {AuthorComponent} from './components/author/author.component';
import {HomeComponent} from './components/home/home.component';
import {PublisherComponent} from './components/publisher/publisher.component';
import {BookComponent} from './components/book/book.component';
import {LoginComponent} from './components/users/login/login.component';
import {AllVideosComponent} from './components/all-videos/all-videos.component';
import {VideoComponent} from './components/all-videos/video/video.component';
import { Component } from 'ag-grid-community';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'publisher', component: PublisherComponent},
  { path: 'book', component: BookComponent},
  { path: 'author', component:AuthorComponent},
  { path: 'home', component: HomeComponent},
  { path:'allVideos',component:AllVideosComponent},

  {path:'allVideos/:videoId',component:VideoComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  ]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
