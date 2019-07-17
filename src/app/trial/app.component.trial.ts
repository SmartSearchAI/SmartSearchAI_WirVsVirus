import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-trial-component',
  templateUrl: './app.component.trial.html',
  styleUrls: ['./app.component.trial.scss']
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
    let url = 'http://127.0.0.1:5000/trials';
    let request = this.http.get(url, { params: {expr: this.id} });
    //let request = this.http.get('https://clinicaltrials.gov/api/query/full_studies?expr=NCT01874691&fmt=JSON')
    request.subscribe(data => 
      this.trial = JSON.stringify(data)
      );
  }
  
  findTrials() {
    let url = 'https://clinicaltrials.gov/api/query/study_fields';
    let request = this.http.get(url, { params: {expr: this.expr, fileds: this.fields} });
    request.subscribe(
      data => this.trials = JSON.stringify(data)
      );
  }
}
