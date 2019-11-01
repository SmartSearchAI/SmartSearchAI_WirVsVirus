import { Component, OnInit, Input} from '@angular/core';
import {Rank, Ranking} from '../../Models/Questionair_Model';

@Component({
  selector: 'Rank-Component',
  templateUrl: './question.rank.component.html',
  styleUrls: ['./question.rank.component.scss']
})

export class RankComponent implements OnInit {
  @Input() Question: Ranking;
  Ranks: Rank = new Rank();

  ngOnInit() {

  }
  onRankChanged(){
    console.log(`Ranking ${this.Question.Entity.Name} updated: ${this.Question.Value}`);
  }
}


