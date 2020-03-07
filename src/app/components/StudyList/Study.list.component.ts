import { Component, OnInit , Input} from '@angular/core';
import {Study} from '../../models/Study.model';
import {StudyAIService} from '../../services_global/study.ai.service';

@Component({
  selector: 'study-list',
  templateUrl: './Study.list.component.html',
  styleUrls: ['./Study.list.component.scss']
})
export class StudyListComponent implements OnInit {
  @Input() $IDs: Array<string>;
  @Input() $Title: string;
  $Data: Study[];
  constructor(private service: StudyAIService) { }

  ngOnInit() {
    this.requestData();
  }

  requestData() {
    this.service.GetStudy({id: this.$IDs, fields: []}).then((data: any) => {
      this.$Data = data;
    }).catch((reason: any) => {
      console.error(JSON.stringify(reason));
    });
  }
}
