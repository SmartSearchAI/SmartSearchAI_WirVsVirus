import { Component, OnInit } from '@angular/core';
import {faFrown, faSmile} from '@fortawesome/free-regular-svg-icons';
import { DiaryService } from '../Services/diary.service';
import { Diary } from '../Models/Diary_Model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  faSmile = faSmile
  faFrown = faFrown
  widgetMode = true
  diary: Diary;
  constructor(private diary_service: DiaryService) {
      this.diary = diary_service.getDiary();
      console.log(this.diary)
  }

  ngOnInit() {
  }
  toggleWidgetMode()
  {
    this.widgetMode = !this.widgetMode
  }
}
