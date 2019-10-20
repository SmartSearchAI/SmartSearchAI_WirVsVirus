import { Injectable } from '@angular/core';
import { Diary, Diary_Entry} from '../Models/Diary_Model';
import { AngularFireDatabase, AngularFireList, listChanges } from 'angularfire2/database';
@Injectable({
  providedIn: 'root',
})

export class DiaryService {
    Diary: Diary;
    todo$: any[];
    constructor (private db: AngularFireDatabase){

        this.Diary = new Diary();
        let self = this;
        db.list('/DiaryEntries')
        .valueChanges()
        .subscribe((list) => {
          self.todo$ = list;
          console.log(self.todo$)
          var next_entry;
          for(var i=0; i<self.todo$.length; i++){
            console.log(self.todo$[i]);
            next_entry = new Diary_Entry();
            next_entry.set_arguments(this.todo$[i].date, this.todo$[i].HWPL_Value_H, this.todo$[i].HWPL_Value_W,
               self.todo$[i].HWPL_Value_P, this.todo$[i].HWPL_Value_L, this.todo$[i].HWPL_Text, this.todo$[i].Mood);
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
