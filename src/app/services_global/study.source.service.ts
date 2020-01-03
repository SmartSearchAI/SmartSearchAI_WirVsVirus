import { Injectable } from '@angular/core';
import {StudySource, API_T} from '../models/StudySource.model';
import {StudySourceFactory, StudySource_T} from '../models/StudySourceFactory.model';
import {StudyFieldsResponse } from '../models/StudyFieldsResponse.model';
import {ClinicalTrialsResponse} from '../models/StudyFieldsResponse.model';
import {ApiService} from './api.service';
import '../types';
import { Study } from '../models/Study.model';
import { range } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudySourceService {
  $service: StudySource;
  $StudyFieldsResponse: StudyFieldsResponse = null;
  $Selected: Study = null;
  $Rank: {min: number, max: number};
  $Fields = ['NCTId', 'Condition', 'BriefTitle'];
  constructor(private api: ApiService) {
    this.$service = StudySourceFactory.GetSource(StudySource_T.CLINICALTRIALS);
    this.$Rank = {min: 1, max: 10};
  }
  Query(expr: string, fields: Array<string> = this.$Fields, rnk: {min: number, max: number} = this.$Rank): Promise<any>  {
    return this.getStudies({expr, fields, rnk});
  }

  getStudies(parameter: object): Promise<any> {
    let url = this.$service.URL;
    let fields: string = parameter['fields'].join(',') ;
    let expression: string = parameter['expr'];
    let rnk: {min: number, max: number} = parameter['rnk'];
    let query: string = String(this.$service.API[API_T.QUERY]).format(expression, fields, String(rnk.min), String(rnk.max));
    const promise = this.api.get<StudyFieldsResponse>(url + query).toPromise();
    promise.then((response) => {
      const data = ClinicalTrialsResponse.fromObject(response.body['StudyFieldsResponse']);
      this.$StudyFieldsResponse = data;
      this.$StudyFieldsResponse.$Ids = data.$Studies.map((x) => x.$Id);
      this.getStudyIds(data).then((Ids) => {
        this.$StudyFieldsResponse.$Ids = Ids;
        console.log(Ids);
      });
    });
    return promise;
  }

  getStudyIds(response: ClinicalTrialsResponse): Promise<any> {
    const NStudies = response.$NStudies;
    const range = [...Array(Math.ceil(NStudies.Found / 100)).keys()].map(x => {
      return {min: x * 100 + 1, max: x * 100 + 100};
    });
    const fields = 'NCTId';
    const url = this.$service.URL;
    const expression = response.$Expression;
    const promises = range.map(rnk => {
        const query: string = String(this.$service.API[API_T.QUERY]).format(expression, fields, String(rnk.min), String(rnk.max));
        return this.api.get<StudyFieldsResponse>(url + query).toPromise().then((response) => {
          const data = ClinicalTrialsResponse.fromObject(response.body['StudyFieldsResponse']);
          return data.$Studies.map(x => x.$Id);
        });
    });

    return new Promise((resolve, reject) => {
        Promise.all(promises).then((responses) => {
          let data: Array<string> = [];
          responses.forEach(entry => {
            data = data.concat(entry);
          });
          resolve(data);
        }, reason => {
          reject(reason);
        });
    });
  }
}
