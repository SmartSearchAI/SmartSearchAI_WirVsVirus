import { Component} from '@angular/core';
import {StudyAIService} from '../../services_global/study.ai.service';
import {Dictionary} from '../../models/Study.model';
import * as mock_keywordsdata from '../../services_global/spec/data/GetKeyWordsFromText.response.json';
@Component({
  selector: 'KeyWordsPrototype-View',
  templateUrl: './KeyWordsPrototype.view.html',
  styleUrls: ['./KeyWordsPrototype.view.scss']
})

export class KeyWordsPrototypeView {
  $KeyWords: Dictionary<number>;
  $Text: string;
  $Service: StudyAIService;
  $SERVICE_STATUS = {
    LOADING: false,
    ERROR: false,
    STATUS: null
  };
  constructor(studyAIService: StudyAIService) {
    this.$Service = studyAIService;
    this.$Text = mock_keywordsdata.text;
    this.$KeyWords = null;
  }
  getKeyCount() {
    return this.$KeyWords ? Object.keys(this.$KeyWords).length : 0;
  }
  onSubmitTextClick() {
    console.log(this.$Text);
    this.$SERVICE_STATUS.LOADING = true;
    this.$SERVICE_STATUS.ERROR = false;
    this.$SERVICE_STATUS.STATUS = null;
    this.$Service.GetKeyWordsFromText({text: this.$Text, count: 20}).then((keyWords: Dictionary<number>) => {
      console.log(JSON.stringify(keyWords));
      this.$KeyWords = keyWords;
      this.$SERVICE_STATUS.LOADING = false;
    }).catch((reason: any) => {
      console.error(JSON.stringify(reason));
      this.$SERVICE_STATUS.LOADING = false;
      this.$SERVICE_STATUS.ERROR = true;
      this.$SERVICE_STATUS.STATUS = reason;
    });
  }
}


