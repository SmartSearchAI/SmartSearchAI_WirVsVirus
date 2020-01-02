import { NgModule, Component, OnInit} from '@angular/core';
import {StudyFieldsResponse} from '../../models/StudyFieldsResponse.model';

@Component({
  selector: 'StudySearchResult-View',
  templateUrl: './StudySearchResult.view.html',
  styleUrls: ['./StudySearchResult.view.scss']
})

export class StudySearchResultView implements OnInit {
  $StudyResponse: StudyFieldsResponse;
  constructor() {
  }
  ngOnInit() {
  }
}


