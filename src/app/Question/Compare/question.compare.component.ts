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
    console.log(`Compare: ${this.Question.Text}`)
  }
}


