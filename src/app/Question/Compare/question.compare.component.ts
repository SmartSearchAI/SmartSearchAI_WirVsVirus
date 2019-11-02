import { Component, OnInit, Input} from '@angular/core';
import {Compare} from '../../Models/Questionair_Model';

@Component({
  selector: 'Compare-Component',
  templateUrl: './question.compare.component.html',
  styleUrls: ['./question.compare.component.scss']
})

export class CompareComponent implements OnInit {
  @Input() Question: Compare;
  ngOnInit() {
  }
  onValueChanged(){
    console.log(`Comparision ${this.Question.Left.Name} vs. ${this.Question.Right.Name} updated: ${this.Question.Value}`);
  }

}


