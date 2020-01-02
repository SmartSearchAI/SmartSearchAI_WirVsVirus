import { Injectable } from '@angular/core';
import {StudySource, API_T} from '../models/StudySource.model';
import {StudySourceFactory, StudySource_T} from '../models/StudySourceFactory.model';
import {StudyFieldsResponse } from '../models/StudyFieldsResponse.model';
import {ClinicalTrialsResponse} from '../models/StudyFieldsResponse.model';
import {ApiService} from './api.service';
import { Observable } from 'rxjs';
import { Study } from '../models/Study.model';

String.prototype.format = function() {
  let s = this;
  let i = arguments.length;

  while (i--) {
      s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
  }
  return s;
};

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
    query = `${url}${query}`;

    const promise = this.api.get<StudyFieldsResponse>(query).toPromise();
    promise.then((response) => {
      const data = ClinicalTrialsResponse.fromObject(response.body['StudyFieldsResponse']);
      this.$StudyFieldsResponse = data;
      this.$Response = response;
      //console.log(response);
      //console.log(data);
    });
    return promise;
  }
}
