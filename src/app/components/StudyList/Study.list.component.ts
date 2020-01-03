import { Component, OnInit , Input} from '@angular/core';
import {Study} from '../../models/Study.model';

@Component({
  selector: 'study-list',
  templateUrl: './Study.list.component.html',
  styleUrls: ['./Study.list.component.scss']
})
export class StudyListComponent implements OnInit {
  @Input() $Studies: Study[];
  @Input() $NStudies: {Avail: number; Found: number; Returned: number};
  constructor() { }

  ngOnInit() {
  }

}
