"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AddVideoComponent = (function () {
    function AddVideoComponent(Videos, router) {
        this.Videos = Videos;
        this.router = router;
    }
    AddVideoComponent.prototype.addVideo = function (title, author, description, coverUrl) {
        console.log(title + description);
        this.Videos.addVideo(title, author, description, coverUrl);
        this.router.navigate(["/videos"]);
    };
    AddVideoComponent.prototype.ngOnInit = function () {
    };
    return AddVideoComponent;
}());
AddVideoComponent = __decorate([
    core_1.Component({
        selector: 'app-add-Video',
        templateUrl: './add-Video.component.html',
        styleUrls: ['./add-Video.component.css']
    })
], AddVideoComponent);
exports.AddVideoComponent = AddVideoComponent;
//# sourceMappingURL=add-video.component.js.map