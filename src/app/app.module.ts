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

@NgModule({
  declarations: [
    AppComponent,
    ListHabitsComponent,
    CreateHabitComponent,
    HabitComponent,

    ListBooksComponent,
    AddBookComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HabitsService, AuthService, BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
