import { Component, OnInit, Input} from '@angular/core';
import {Rank} from '../../Models/Questionair_Model';

@Component({
  selector: 'Rank-Component',
  templateUrl: './question.rank.component.html',
  styleUrls: ['./question.rank.component.scss']
})

export class RankComponent implements OnInit {
  @Input() Question: Rank;
  ngOnInit() {
    console.log(`Rank: ${this.Question.Text}`)
  }
}


