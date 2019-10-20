import { Injectable } from '@angular/core';
import { Diary, Diary_Entry} from '../Models/Diary_Model';
import { AngularFireDatabase, AngularFireList, listChanges } from 'angularfire2/database';
@Injectable({
  providedIn: 'root',
})

export class DiaryService {
    Diary: Diary;
    todos$: any[];
    constructor (private db: AngularFireDatabase){

        this.Diary = new Diary();
        db.list('/DiaryEntries')
        .valueChanges()
        .subscribe((list) => {
          this.todo$ = list;
          console.log(this.todo$)
          var next_entry;
          for(var i=0; i<this.todo$.length; i++){
            console.log(this.todo$[i]);
            next_entry = new Diary_Entry();
            next_entry.set_arguments(this.todo$[i].date, this.todo$[i].HWPL_Value_H, this.todo$[i].HWPL_Value_W,
               this.todo$[i].HWPL_Value_P, this.todo$[i].HWPL_Value_L, this.todo$[i].HWPL_Text, this.todo$[i].Mood);
            this.Diary.Entries.push(next_entry);
          }

        });
    }

    addEntry(new_entry: Diary_Entry) {
        this.Diary.Entries.push(new_entry);
        console.log(this.Diary);
    }

    getDiary(){
        return this.Diary;
    }
}
