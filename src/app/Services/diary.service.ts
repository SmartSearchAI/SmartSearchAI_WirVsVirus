import { Injectable } from '@angular/core';
import { Diary, Diary_Entry} from '../Models/Diary_Model';

@Injectable({
  providedIn: 'root',
})

export class DiaryService {
    Diary: Diary;
    constructor (){
        this.Diary = new Diary();
    }
    addEntry(new_entry: Diary_Entry) {
        this.Diary.Entries.push(new_entry);
        console.log(this.Diary);
    }
    getDiary(){
        return this.Diary;
    }
}

