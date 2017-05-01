"use strict";
var habits_component_1 = require("./habits/habits.component");
exports.appRoutes = [
    { path: "habits", component: habits_component_1.ListHabitsComponent },
    { path: "", redirectTo: "habits", pathMatch: "full" }
];
//# sourceMappingURL=routes.js.map