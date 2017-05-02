import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { ListHabitsComponent } from './habits/list-habits.component';

import { appRoutes } from "./routes";
import { CreateHabitComponent } from './habits/create-habit/create-habit.component';

import { HabitsService } from './habits/habits.service';
import { HabitComponent } from './habits/habit/habit.component';

import { AuthService } from "./user/auth.service";

import { ListBooksComponent } from './books/list-books/list-books.component';
import { AddBookComponent } from './books/add-book/add-book.component';
import { BookComponent } from './books/book/book.component';

import { BooksService } from './books/books.service';

import { NotesService } from './notes/notes.service';
import { TimetableComponent } from './timetable/timetable.component';

import { ListVideosComponent } from './videos/list-videos/list-videos.component';
import { AddVideoComponent } from './videos/add-video/add-video.component';
import { VideoComponent } from './videos/video/video.component';

import { VideosService } from './videos/video.service';

@NgModule({
  declarations: [
    AppComponent,
    ListHabitsComponent,
    CreateHabitComponent,
    HabitComponent,

    ListBooksComponent,
    AddBookComponent,
    BookComponent,
    TimetableComponent,

    ListVideosComponent,
    AddVideoComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HabitsService, AuthService, BooksService, NotesService, VideosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
