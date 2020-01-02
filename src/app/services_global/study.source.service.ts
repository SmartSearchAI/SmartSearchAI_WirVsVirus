import { Injectable } from '@angular/core';
import {StudySource, API_T} from '../models/StudySource.model';
import {StudySourceFactory, StudySource_T} from '../models/StudySourceFactory.model';
import {StudyFieldsResponse } from '../models/StudyFieldsResponse.model';
import {ClinicalTrialsResponse} from '../models/StudyFieldsResponse.model';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class StudySourceService {
  $service: StudySource;
  $StudyFieldsResponse: any = {};
  $Response: any = {};
  constructor(private api: ApiService) {
    this.$service = StudySourceFactory.GetSource(StudySource_T.CLINICALTRIALS);
    this.Query('heart+attack');
  }
  Query(expr) {
    this.getClinicalTrials(API_T.QUERY, {expr});
  }

  getClinicalTrials(call: API_T, parameter: object) {
    let url = this.$service.URL;
    let fields: string = this.$service.Fields.join(',');
    let query: string = this.$service.API[call].format(parameter['expr'], fields);
    query = `${url}${query}`;

    this.api.get<StudyFieldsResponse>(query).subscribe(response => {
      let data =ClinicalTrialsResponse.fromObject(response.body['StudyFieldsResponse']);
      this.$StudyFieldsResponse = data;
      this.$Response = response;
      console.log(response);
      console.log(data);
    });
  }
}
