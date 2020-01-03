import { Component, Input } from '@angular/core';
import {Study} from '../../../models/Study.model';

@Component({
  selector: 'study-listitem',
  templateUrl: './Study.listitem.component.html',
  styleUrls: ['./Study.listitem.component.scss']
})
export class StudyListItemComponent {
  @Input() $Item: Study;
  constructor() { }

}
