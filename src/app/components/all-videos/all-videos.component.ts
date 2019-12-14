import { Component, OnInit } from '@angular/core';
import {AllVideosService} from '../../services/all-videos.service';
import { AllVideos} from '../../shared/all-videos';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-videos',
  templateUrl: './all-videos.component.html',
  styleUrls: ['./all-videos.component.css']
})
export class AllVideosComponent implements OnInit {
  allVideos$:Observable<AllVideos[]>;
  ShowLoaderIndicater=true;
  constructor(private VdServices:AllVideosService) { }

  ngOnInit() {
    this.ShowLoaderIndicater=true;
    this.getVideos();
  }

getVideos(){
   this.allVideos$=this.VdServices.getVideo()
 }
}
