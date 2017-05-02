import { Component, OnInit } from '@angular/core';
import { VideosService } from '../video.service';

@Component({
  selector: 'app-list-videos',
  templateUrl: './list-videos.component.html',
  styleUrls: ['./list-videos.component.css']
})
export class ListVideosComponent implements OnInit {

  constructor(private videos: VideosService) { }

  ngOnInit() {

  }

}
