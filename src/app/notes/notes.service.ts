import { Injectable } from '@angular/core';

@Injectable()
export class NotesService {
  notes: any;

  constructor() {
    this.notes = {};
  }

  createNote(key: string, value) {
    if (!(key in this.notes))
      this.notes[key] = new Array<string>();

    this.notes[key].push(value);
  }

  getNotes(key: string): Array<string> {
    return this.notes[key];
  }

}
