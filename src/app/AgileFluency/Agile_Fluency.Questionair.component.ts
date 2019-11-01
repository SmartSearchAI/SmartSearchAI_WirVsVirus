import { Component, OnInit} from '@angular/core';
import {Pairwise_Compare, Entity, Question} from '../Models/Pairwise_Compare_Model';

@Component({
  selector: 'Agile_Fluency-Questionair',
  templateUrl: './Agile_Fluency.Questionair.component.html',
  styleUrls: ['./Agile_Fluency.Questionair.component.scss']
})

export class AgileFluencyQuestionairComponent implements OnInit {
  Questions: Array<Question>;
  Compare: Pairwise_Compare
  Entities: Array<Entity>;
  constructor() {
    this.Entities = new Array<Entity>();
    this.Entities.push(new Entity("Culture"));
    this.Entities.push(new Entity("Mindset"));
    this.Entities.push(new Entity("Error"));
    this.Compare = new Pairwise_Compare(this.Entities);
    this.Questions = this.Compare.GetQuestions(false);
  }
  ngOnInit() {
  }
}


