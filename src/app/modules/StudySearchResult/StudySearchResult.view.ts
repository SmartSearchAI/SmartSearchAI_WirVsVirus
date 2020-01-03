import { NgModule, Component, OnInit} from '@angular/core';
import {StudySourceService} from '../../services_global/study.source.service';
import {StudyFieldsResponse} from '../../models/StudyFieldsResponse.model';

@Component({
  selector: 'StudySearchResult-View',
  templateUrl: './StudySearchResult.view.html',
  styleUrls: ['./StudySearchResult.view.scss']
})

export class StudySearchResultView implements OnInit {
  $StudyResponse: StudyFieldsResponse;
  constructor(private studyService: StudySourceService) {
    studyService.Query('heart attack').then(data => {
      this.$StudyResponse = studyService.$StudyFieldsResponse;
      this.printResult();
    });
  }
  ngOnInit() {
    this.$StudyResponse = this.studyService.$StudyFieldsResponse;
    this.printResult();
  }
  printResult(){
    console.log(this.studyService.$StudyFieldsResponse);
  }
}


