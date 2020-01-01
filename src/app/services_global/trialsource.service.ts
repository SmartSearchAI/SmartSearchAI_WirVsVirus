import { Injectable } from '@angular/core';
import {TrialSource, TrialSourceFactory, TrialSource_T, API_T} from '../models/trialsource';

@Injectable({
  providedIn: 'root'
})
export class TrialSourceService {
  $service: TrialSource;
  constructor() {
    this.$service = TrialSourceFactory.GetSource(TrialSource_T.CLINICALTRIALS);
    this.Query('heart+attack');
  }
  Query(expr) {
    this.Exec(API_T.QUERY, {expr});
  }
  Exec(call: API_T, parameter: object) {
    let url = this.$service.URL;
    let query = this.$service.API[call];

    console.log(`${url}${query}`);
  }
}
