import { Component, Input} from '@angular/core';
import {Dictionary} from '../../models/Study.model';

@Component({
  selector: 'KeyWords-Component',
  templateUrl: './KeyWords.component.html',
  styleUrls: ['./KeyWords.component.scss']
})

export class KeyWordsComponent {
  @Input() $KeyWords: Dictionary<number>;

  constructor() {
  }
  getKeys() {
    return this.$KeyWords ? Object.keys(this.$KeyWords) : [];
  }
}


