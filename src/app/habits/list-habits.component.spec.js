"use strict";
var testing_1 = require("@angular/core/testing");
var habits_component_1 = require("./habits.component");
describe('HabitsComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [habits_component_1.ListHabitsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(habits_component_1.ListHabitsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=habits.component.spec.js.map