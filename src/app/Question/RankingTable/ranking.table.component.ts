import { Component, OnInit, Input} from '@angular/core';
import {Entity, Score} from '../../Models/Questionair_Model';

@Component({
  selector: 'Ranking-Table-Component',
  templateUrl: './ranking.table.component.html',
  styleUrls: ['./ranking.table.component.scss']
})

export class RankingTableComponent implements OnInit {
  @Input() Entities: Array<Entity>;
  @Input() Scores: Array<Score>;

  ngOnInit() {

  }
}


