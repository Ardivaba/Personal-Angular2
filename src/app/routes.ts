import { Routes } from "@angular/router";

import { ListHabitsComponent } from "./habits/list-habits.component";
import { CreateHabitComponent } from "./habits/create-habit/create-habit.component";
import { HabitComponent } from "./habits/habit/habit.component";

import { ListBooksComponent } from "./books/list-books/list-books.component";
import { AddBookComponent } from "./books/add-book/add-book.component";
import { BookComponent } from "./books/book/book.component";

import { ListVideosComponent } from "./videos/list-videos/list-videos.component";
import { AddVideoComponent } from "./videos/add-video/add-video.component";
import { VideoComponent } from "./videos/video/video.component";

import { TimetableComponent } from "./timetable/timetable.component";

import { LoginPageComponent } from "./user/login-page/login-page.component";

export const appRoutes: Routes = [
  { path: "habits", component: ListHabitsComponent },
  { path: "habits/create", component: CreateHabitComponent },
  { path: "habits/:id", component: HabitComponent },

  { path: "books", component: ListBooksComponent },
  { path: "books/add", component: AddBookComponent },
  { path: "books/:id", component: BookComponent },

  { path: "videos", component: ListVideosComponent },
  { path: "videos/add", component: AddVideoComponent },
  { path: "videos/:id", component: VideoComponent },

  { path: "user/login", component: LoginPageComponent },  

  { path: "", redirectTo: "user/login", pathMatch: "full" },

  { path: "timetable", component: TimetableComponent }
]