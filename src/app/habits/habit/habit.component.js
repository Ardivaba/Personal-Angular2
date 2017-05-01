"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var HabitComponent = (function () {
    function HabitComponent(habitsService, route) {
        this.habitsService = habitsService;
        this.route = route;
    }
    HabitComponent.prototype.ngOnInit = function () {
        this.currentHabit = this.habitsService.getHabit(+this.route.snapshot.params["id"]);
    };
    HabitComponent.prototype.increaseScore = function () {
        this.currentHabit.score++;
        this.habitsService.updateHabit(this.currentHabit);
    };
    HabitComponent.prototype.decreaseScore = function () {
        this.currentHabit.score++;
        this.habitsService.updateHabit(this.currentHabit);
    };
    return HabitComponent;
}());
HabitComponent = __decorate([
    core_1.Component({
        selector: 'app-habit',
        templateUrl: './habit.component.html',
        styleUrls: ['./habit.component.css']
    })
], HabitComponent);
exports.HabitComponent = HabitComponent;
//# sourceMappingURL=habit.component.js.map