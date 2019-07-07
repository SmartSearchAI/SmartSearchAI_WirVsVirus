import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trial-component',
  templateUrl: './app.component.trials.html',
  styleUrls: ['./app.component.trials.scss']
})
export class TrialComponent {
  constructor(private http: HttpClient) {}
  title = 'TrialComponent';
  //Parameter
  id = "NCT01874691";
  expr = "heart+attack";
  fields = "NCTId,Condition,BriefTitle";
  //Results
  trial = "Empty";
  trials = "";
  getTrial() {
    let url = 'http://127.0.0.1:5000/trial';
    let request = this.http.get(url, { params: {id: this.id} });

    request.subscribe(data => this.trial = JSON.stringify(data));
  }
  
  findTrials() {
    let url = 'https://clinicaltrials.gov/api/query/study_fields';
    let request = this.http.get(url, { params: {expr: this.expr, fileds: this.fields} });
    request.subscribe(
      data => this.trials = JSON.stringify(data)
      );
  }
}
