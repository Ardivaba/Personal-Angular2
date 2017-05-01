import { Routes } from "@angular/router";

import { ListHabitsComponent } from "./habits/list-habits.component";
import { CreateHabitComponent } from "./habits/create-habit/create-habit.component";
import { HabitComponent } from "./habits/habit/habit.component";

import { ListBooksComponent } from "./books/list-books/list-books.component";
import { AddBookComponent } from "./books/add-book/add-book.component";
import { BookComponent } from "./books/book/book.component";

export const appRoutes: Routes = [
  { path: "habits", component: ListHabitsComponent },
  { path: "habits/create", component: CreateHabitComponent },
  { path: "habits/:id", component: HabitComponent },

  { path: "books", component: ListBooksComponent },
  { path: "books/add", component: AddBookComponent },
  { path: "books/:id", component: BookComponent },

  { path: "", redirectTo: "habits", pathMatch: "full" },
  { path: "user", loadChildren: "app/user/user.module#UserModule" }
]