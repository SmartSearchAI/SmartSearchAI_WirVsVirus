import { Component} from '@angular/core';
import {StudyAIService} from '../../services_global/study.ai.service';
import {Dictionary} from '../../models/Study.model';

@Component({
  selector: 'KeyWordsPrototype-View',
  templateUrl: './KeyWordsPrototype.view.html',
  styleUrls: ['./KeyWordsPrototype.view.scss']
})

export class KeyWordsPrototypeView {
  $KeyWords: Dictionary<number>;
  $Text: string;
  $Service: StudyAIService;
  constructor(studyAIService: StudyAIService) {
    this.$Service = studyAIService;
    this.$Text = "";
    this.$KeyWords = null;
  }
  onSubmitTextClick() {
    console.log(this.$Text);
  }
}


