import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideosService, Video } from '../video.service';

@Component({
  selector: 'app-Video',
  templateUrl: './Video.component.html',
  styleUrls: ['./Video.component.css']
})
export class VideoComponent implements OnInit {
  private video: Video;

  constructor(private videos: VideosService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.video = this.videos.getVideo(+this.route.snapshot.params["id"]);
  }

  addNote(note: string) {
    this.video.notes.push(note);
    this.videos.updateVideo(this.video);
  }

}
