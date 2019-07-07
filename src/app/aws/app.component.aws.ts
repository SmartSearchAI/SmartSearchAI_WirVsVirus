import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-aws-component',
  templateUrl: './app.component.aws.html',
  styleUrls: ['./app.component.aws.scss']
})
export class AWSComponent {
  constructor(private http: HttpClient) {}
  title = 'AWSComponent';
  //Parameter
  text = "";
  //Results
  result = "";
  translateTextToJSON() {
    let url = 'http://127.0.0.1:5000/aws/entries';
    let request = this.http.get(url, { params: {text: this.text} });

    request.subscribe(data => this.result = JSON.stringify(data));
  }
}
