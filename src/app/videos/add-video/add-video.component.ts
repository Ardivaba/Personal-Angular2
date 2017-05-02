import { Component, OnInit } from '@angular/core';
import { VideosService } from '../video.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-Video',
  templateUrl: './add-Video.component.html',
  styleUrls: ['./add-Video.component.css']
})
export class AddVideoComponent implements OnInit {

  constructor(private Videos: VideosService, private router: Router) { }

  addVideo(title, author, description, coverUrl) {
    console.log(title + description);

    this.Videos.addVideo(title, author, description, coverUrl);
    this.router.navigate(["/videos"]);
  }

  ngOnInit() {
  }

}
