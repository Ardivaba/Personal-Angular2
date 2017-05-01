import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HabitsService } from '../habits.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-habit',
  templateUrl: './create-habit.component.html',
  styleUrls: ['./create-habit.component.css']
})
export class CreateHabitComponent implements OnInit {
  constructor(private habitsService: HabitsService, private router: Router) { }

  habitForm: FormGroup;

  saveHabit(title, description, trigger) {
    console.log(title + description + trigger);

    this.habitsService.createHabit(title, description, trigger);
    this.router.navigate(["/habits"]);
  }

  ngOnInit() {
  }

}
