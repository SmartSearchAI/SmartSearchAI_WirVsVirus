import { Component, OnInit } from '@angular/core';
import { DiaryService } from '../Services/diary.service';
import { Diary } from '../Models/Diary_Model';

@Component({
  selector: 'app-display-diary',
  templateUrl: './display-diary.component.html',
  styleUrls: ['./display-diary.component.scss']
})
export class DisplayDiaryComponent implements OnInit {
<<<<<<< HEAD

  @Input() diary

  constructor() {
   }

=======
  diary: Diary;
  constructor(private diary_service: DiaryService) { 
      this.diary = diary_service.getDiary();
  }
>>>>>>> aaf8a1b4d27bca77106150068e0976b642a79406

  ngOnInit() {
    console.log(this.diary);
  }

  open_diary_entry(event){
    console.log(event)
  }



}
