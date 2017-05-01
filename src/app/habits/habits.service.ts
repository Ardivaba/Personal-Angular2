import { Injectable } from '@angular/core';

export interface Habit {
  id: number;
  shortTitle: string;
  description: string;
  trigger: string;
  score: number;
}

@Injectable()
export class HabitsService {
  private habits: Array<Habit> = new Array<Habit>();

  createHabit(title: string, description: string, trigger: string) {
    let newHabit: Habit = {
      id: this.habits.length,
      shortTitle: title,
      description: description,
      trigger: trigger,
      score: 0
    };
      
    this.habits.push(newHabit);
  }

  getHabit(id: number) {
    return this.habits[id];
  }

  getHabits() {
    return this.habits;
  }

  updateHabit(habit: Habit) {
    this.habits[habit.id] = habit;
  }

  constructor() {
    this.createHabit("Pushups", "Pushups after leaving the bed", "Leaving the bed");
    this.createHabit("Situps", "Situps after entering the bed", "Entering the bed");
  }

}
