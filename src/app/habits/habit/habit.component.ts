import { Component, OnInit } from '@angular/core';
import { HabitsService, Habit } from '../habits.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-habit',
  templateUrl: './habit.component.html',
  styleUrls: ['./habit.component.css']
})
export class HabitComponent implements OnInit {
  private currentHabit: Habit;

  constructor(private habitsService: HabitsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.currentHabit = this.habitsService.getHabit(+this.route.snapshot.params["id"]);
  }

  increaseScore() {
    this.currentHabit.score++;
    this.habitsService.updateHabit(this.currentHabit);
  }

  decreaseScore() {
    this.currentHabit.score++;
    this.habitsService.updateHabit(this.currentHabit);
  }
}
