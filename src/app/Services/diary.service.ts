import { Injectable } from '@angular/core';
import { Diary, Diary_Entry } from '../Models/Diary_Model';
import { AngularFireDatabase, AngularFireList, listChanges } from 'angularfire2/database';
@Injectable({
  providedIn: 'root'
})
export class DiaryService {
  Diary: Diary;
  todos$: any[];
  constructor(private db: AngularFireDatabase) {
    db.list('/FightClub/DiaryEntries')
      .valueChanges()
      .subscribe((list) => {
        this.todos$ = list;
        console.log('Values Received ' + list.length);
        console.log(this.todos$);
      });
    this.Diary = new Diary();
  }
  addEntry(new_entry: Diary_Entry) {
    this.Diary.Entries.push(new_entry);
    console.log(this.Diary);
  }
  getDiary() {
    return this.Diary;
  }
}
