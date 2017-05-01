import { Component, OnInit } from '@angular/core';
import { HabitsService } from './habits.service';

@Component({
  selector: 'app-habits',
  templateUrl: './list-habits.component.html',
  styleUrls: ['./list-habits.component.css']
})
export class ListHabitsComponent implements OnInit {

  constructor(private habitsService: HabitsService) { }

  ngOnInit() {
  }

}
