import { Injectable } from '@angular/core';
import {StudySourceFactory, StudySource, API_T, StudySource_T} from '../models/StudySource.model';
import {StudyFieldsResponse, ClinicalTrialsResponse } from '../models/StudyFieldsResponse.model';
import {HTTPService} from './http.service';
import {StudyAIService} from './study.ai.service';
import '../types';
import { Study } from '../models/Study.model';
import * as mock_id_data from './id.results.json';

@Injectable({
  providedIn: 'root'
})
export class StudySourceService {
  $service: StudySource;
  $StudyFieldsResponse: StudyFieldsResponse = null;
  $Selected: Study = null;
  $Rank: {min: number, max: number};
  $Fields = ['NCTId', 'Condition', 'BriefTitle'];
  constructor(private http: HTTPService, private smartSearch: StudyAIService) {
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
    let query: string = this.$service.API[API_T.QUERY];
    query = String(query).format(expression, fields, String(rnk.min), String(rnk.max));
    const promise = this.http.get<StudyFieldsResponse>(url + query).toPromise();
    promise.then((response) => {
      const data = ClinicalTrialsResponse.fromObject(response.body['StudyFieldsResponse']);
      this.$StudyFieldsResponse = data;
      this.$StudyFieldsResponse.$Ids = data.$Studies.map((x) => x.$Id);
      this.getStudyIds(data).then((Ids) => {
        this.$StudyFieldsResponse.$Ids = Ids;
        this.smartSearch.GetStudy({id: Ids, fields: [parameter['fields']]});
        console.log(Ids);
      });
    });
    return promise;
  }

  getStudyIds(response: ClinicalTrialsResponse): Promise<any> {
    return this.getStudyIdsMOCK(response);
    /** Create multiple queries to get all IDs */
    const NStudies = response.$NStudies;
    const range = [...Array(Math.ceil(NStudies.Found / 100)).keys()].map(x => {
      return {min: x * 100 + 1, max: x * 100 + 100};
    });
    const fields = 'NCTId';
    const url = this.$service.URL;
    const expression = response.$Expression;
    const promises = range.map(rnk => {
        const query: string = String(this.$service.API[API_T.QUERY]).format(expression, fields, String(rnk.min), String(rnk.max));
        return this.http.get<StudyFieldsResponse>(url + query).toPromise().then((response) => {
          const data = ClinicalTrialsResponse.fromObject(response.body['StudyFieldsResponse']);
          return data.$Studies.map(x => x.$Id);
        });
    });
    /** Wait for all queries to return */
    return new Promise((resolve, reject) => {
        Promise.all(promises).then((responses) => {
          let data: Array<string> = [];
          responses.forEach(entry => {
            data = data.concat(entry);
          });
          const str = JSON.stringify(data);
          console.log(str);
          resolve(data);
        }, reason => {
          reject(reason);
        });
    });
  }

  getStudyIdsMOCK(response: ClinicalTrialsResponse): Promise<any> {
    /** Return Mocked Data - Saved from last Query containing 7k+ IDs */
    const id_data = mock_id_data.data;
    const mock = new Promise((resolve, reject) => {
      setTimeout( () => {
        resolve();
       }, 1000 );
    });
    const promises = [mock];
    return new Promise((resolve, reject) => {
        Promise.all(promises).then((responses) => {
          resolve(id_data);
        }, reason => {
          reject(reason);
        });
    });
  }
}
