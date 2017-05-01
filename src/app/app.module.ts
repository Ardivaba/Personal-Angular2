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

@NgModule({
  declarations: [
    AppComponent,
    ListHabitsComponent,
    CreateHabitComponent,
    HabitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HabitsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
