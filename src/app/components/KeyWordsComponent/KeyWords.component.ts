import { Component, Input, OnInit} from '@angular/core';
import { isNumeric } from 'rxjs/util/isNumeric';

@Component({
  selector: 'KeyWords-Component',
  templateUrl: './KeyWords.component.html',
  styleUrls: ['./KeyWords.component.scss']
})

export class KeyWordsComponent implements OnInit{
  @Input() $KeyWords: Array<{key: string, value: number}>;
  @Input() $Settings: any;
  Settings = {
    n: 'all'
  };
  GetKeyWords() {
    if (this.$KeyWords == null) {
      return [];
    }

    this.SortKeyWords();

    if (Number(this.Settings.n)) {
      return this.$KeyWords.slice(0, Number(this.Settings.n));
    } else {
      return this.$KeyWords;
    }
  }
  constructor() {
  }
  ngOnInit() {
    if (this.$Settings && this.$Settings.n) {
      this.Settings.n = this.$Settings.n;
    }
  }
  SortKeyWords(){
    if (this.$KeyWords) {
      this.$KeyWords = this.$KeyWords.sort((a,b) => {
        return a.value - b.value;
      });
    }
  }
}


