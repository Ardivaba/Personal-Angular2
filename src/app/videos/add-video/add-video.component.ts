import { Component, OnInit } from '@angular/core';
import { VideosService } from '../video.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-Video',
  templateUrl: './add-Video.component.html',
  styleUrls: ['./add-Video.component.css']
})
export class AddVideoComponent implements OnInit {

  constructor(private videos: VideosService, private router: Router) { }

  addVideo(title, description, url) {
    this.videos.addVideo(title, description, url);
    this.router.navigate(["/videos"]);
  }

  ngOnInit() {
  }

}
