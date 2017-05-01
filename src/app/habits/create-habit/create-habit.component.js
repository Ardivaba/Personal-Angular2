"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var CreateHabitComponent = (function () {
    function CreateHabitComponent(habitsService, router) {
        this.habitsService = habitsService;
        this.router = router;
    }
    CreateHabitComponent.prototype.saveHabit = function (title, description, trigger) {
        console.log(title + description + trigger);
        this.habitsService.createHabit(title, description, trigger);
        //this.router.navigate(["/habits"]);
    };
    CreateHabitComponent.prototype.ngOnInit = function () {
    };
    return CreateHabitComponent;
}());
CreateHabitComponent = __decorate([
    core_1.Component({
        selector: 'app-create-habit',
        templateUrl: './create-habit.component.html',
        styleUrls: ['./create-habit.component.css']
    })
], CreateHabitComponent);
exports.CreateHabitComponent = CreateHabitComponent;
//# sourceMappingURL=create-habit.component.js.map