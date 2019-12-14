import { Component, OnInit, Input } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { parse } from 'url';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
} 

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
   videoPath:string
  videoId: string;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {

      this.videoId=this.route.snapshot.paramMap.get("videoId");
      this.videoPath='https://www.youtube.com/embed/'+this.videoId;

  }

}
