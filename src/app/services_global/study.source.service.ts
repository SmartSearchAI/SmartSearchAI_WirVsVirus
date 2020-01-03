import { Injectable } from '@angular/core';
import {StudySource, API_T} from '../models/StudySource.model';
import {StudySourceFactory, StudySource_T} from '../models/StudySourceFactory.model';
import {StudyFieldsResponse } from '../models/StudyFieldsResponse.model';
import {ClinicalTrialsResponse} from '../models/StudyFieldsResponse.model';
import {ApiService} from './api.service';
import '../types';

@Injectable({
  providedIn: 'root'
})
export class StudySourceService {
  $service: StudySource;
  $StudyFieldsResponse: any = {};
  $Response: any = {};
  constructor(private api: ApiService) {
    this.$service = StudySourceFactory.GetSource(StudySource_T.CLINICALTRIALS);
  }
  Query(expr): Promise<any>  {
    return this.getStudies(API_T.QUERY, {expr});
  }

  getStudies(call: API_T, parameter: object): Promise<any> {
    let url = this.$service.URL;
    let fields: string = this.$service.Fields.join(',');
    let query: string = String(this.$service.API[call]).format(parameter['expr'], fields);

    const promise = this.api.get<StudyFieldsResponse>(url + query).toPromise();
    promise.then((response) => {
      const data = ClinicalTrialsResponse.fromObject(response.body['StudyFieldsResponse']);
      this.$StudyFieldsResponse = data;
      this.$Response = response;
    });
    return promise;
  }
}
