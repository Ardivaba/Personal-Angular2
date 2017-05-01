"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var HabitsService = (function () {
    function HabitsService() {
        this.habits = new Array();
        this.createHabit("Pushups", "Pushups after leaving the bed", "Leaving the bed");
        this.createHabit("Situps", "Situps after entering the bed", "Entering the bed");
    }
    HabitsService.prototype.createHabit = function (title, description, trigger) {
        var newHabit = {
            id: this.habits.length,
            shortTitle: title,
            description: description,
            trigger: trigger,
            score: 0
        };
        this.habits.push(newHabit);
    };
    HabitsService.prototype.getHabit = function (id) {
        return this.habits[id];
    };
    HabitsService.prototype.getHabits = function () {
        return this.habits;
    };
    HabitsService.prototype.updateHabit = function (habit) {
        this.habits[habit.id] = habit;
    };
    return HabitsService;
}());
HabitsService = __decorate([
    core_1.Injectable()
], HabitsService);
exports.HabitsService = HabitsService;
//# sourceMappingURL=habits.service.js.map