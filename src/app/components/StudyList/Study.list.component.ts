import { Component, OnChanges, Input, SimpleChanges} from '@angular/core';
import {Study} from '../../models/Study.model';
import {StudyAIService} from '../../services_global/study.ai.service';

@Component({
  selector: 'study-list',
  templateUrl: './Study.list.component.html',
  styleUrls: ['./Study.list.component.scss']
})
export class StudyListComponent implements OnChanges {
  @Input() $IDs: Array<string> = [] ;
  @Input() $Title: string = '';
  $Data: Study[] = [];
  constructor(private service: StudyAIService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (this.$IDs.length > 0 ) {
      this.requestData();
    } else {
      this.$Data = [];
    }
  }

  requestData() {
    this.service.GetStudy({id: this.$IDs, fields: []}).then((data: any) => {
      this.$Data = data;
    }).catch((reason: any) => {
      console.error(JSON.stringify(reason));
    });
  }
}
