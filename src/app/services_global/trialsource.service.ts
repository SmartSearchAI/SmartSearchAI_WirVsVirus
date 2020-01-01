import { Injectable } from '@angular/core';
import {TrialSource, TrialSourceFactory, TrialSource_T, API_T} from '../models/trialsource';
import {ApiService} from './api.service';
import { HttpClient , HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrialSourceService {
  $service: TrialSource;
  constructor(private api: ApiService) {
    this.$service = TrialSourceFactory.GetSource(TrialSource_T.CLINICALTRIALS);
    this.Query('heart+attack');
  }
  Query(expr) {
    this.Exec(API_T.QUERY, {expr});
  }
  Exec(call: API_T, parameter: object) {
    let url = this.$service.URL;
    let fields: string = this.$service.Fields.join(',');
    let query: string = this.$service.API[call]
    query = query.format(parameter['expr'], fields);
    this.api.get(`${url}${query}`).subscribe(data => {
      console.log(data);
    });
  }
}
