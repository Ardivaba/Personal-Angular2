import { Injectable } from '@angular/core';

export interface Video {
  id: number;
  title: string;
  description: string;
  url: string;
  notes: Array<string>;
}

@Injectable()
export class VideosService {
  private videos: Array<Video> = new Array<Video>();

  constructor() {
    this.addVideo("National Gallery Talk: Creativity -- and Protest", "Video about something.", "k-dYktgmNUg");
  }

  addVideo(title, description, url) {
    let Video: Video = {
      id: this.videos.length,
      title: title,
      description: description,
      url: url,
      notes: new Array<string>()
    };

    this.videos.push(Video);
  }

  getVideo(id: number) {
    return this.videos[id];
  }

  getVideos() {
    return this.videos;
  }

  updateVideo(video: Video) {
    this.videos[video.id] = video;
  }

}
