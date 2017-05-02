"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var VideosService = (function () {
    function VideosService() {
        this.videos = new Array();
        this.addVideo("National Gallery Talk: Creativity -- and Protest", "Video about something.", "https://www.youtube.com/watch?v=k-dYktgmNUg");
    }
    VideosService.prototype.addVideo = function (title, description, url) {
        var Video = {
            id: this.videos.length,
            title: title,
            description: description,
            url: url,
            notes: new Array()
        };
        this.videos.push(Video);
    };
    VideosService.prototype.getVideo = function (id) {
        return this.videos[id];
    };
    VideosService.prototype.getVideos = function () {
        return this.videos;
    };
    VideosService.prototype.updateVideo = function (video) {
        this.videos[video.id] = video;
    };
    return VideosService;
}());
VideosService = __decorate([
    core_1.Injectable()
], VideosService);
exports.VideosService = VideosService;
//# sourceMappingURL=video.service.js.map