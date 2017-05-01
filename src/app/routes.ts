import { Routes } from "@angular/router";

import { ListHabitsComponent } from "./habits/list-habits.component";
import { CreateHabitComponent } from "./habits/create-habit/create-habit.component";
import { HabitComponent } from "./habits/habit/habit.component";

export const appRoutes: Routes = [
  { path: "habits", component: ListHabitsComponent },
  { path: "habits/create", component: CreateHabitComponent },
  { path: "habits/:id", component: HabitComponent },
  { path: "", redirectTo: "habits", pathMatch: "full" }
]