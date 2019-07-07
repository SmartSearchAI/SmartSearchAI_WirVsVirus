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
  result = [];
  resultJSON = "";
  translateTextToJSON() {
    this.result = [{"Category":"PROTECTED_HEALTH_INFORMATION","BeginOffset":51,"EndOffset":54,"Text":"Mai","Traits":[],"Score":0.20963619649410248,"Type":"NAME","Id":0},{"Category":"PROTECTED_HEALTH_INFORMATION","BeginOffset":62,"EndOffset":67,"Text":"Jahrs","Traits":[],"Score":0.351622074842453,"Type":"NAME","Id":1},{"Category":"PROTECTED_HEALTH_INFORMATION","BeginOffset":127,"EndOffset":129,"Text":"er","Traits":[],"Score":0.447509765625,"Type":"ADDRESS","Id":2},{"Category":"PROTECTED_HEALTH_INFORMATION","BeginOffset":151,"EndOffset":158,"Text":"welcher","Traits":[],"Score":0.5439592003822327,"Type":"NAME","Id":3},{"Category":"PROTECTED_HEALTH_INFORMATION","BeginOffset":163,"EndOffset":165,"Text":"zu","Traits":[],"Score":0.9163724184036255,"Type":"NAME","Id":4},{"Category":"PROTECTED_HEALTH_INFORMATION","BeginOffset":465,"EndOffset":479,"Text":"Verbindung mit","Traits":[],"Score":0.2541901767253876,"Type":"ADDRESS","Id":5},{"Category":"PROTECTED_HEALTH_INFORMATION","BeginOffset":486,"EndOffset":531,"Text":"obstruktiven Schlafapnoesndrom bei Adipositas","Traits":[],"Score":0.3129967451095581,"Type":"ADDRESS","Id":6},{"Category":"MEDICATION","BeginOffset":499,"EndOffset":516,"Text":"Schlafapnoesndrom","Traits":[],"Score":0.4557514190673828,"Type":"GENERIC_NAME","Id":7},{"Category":"MEDICATION","BeginOffset":634,"EndOffset":644,"Text":"Zigaretten","Traits":[],"Score":0.9457745552062988,"Type":"BRAND_NAME","Id":8},{"Category":"MEDICAL_CONDITION","BeginOffset":708,"EndOffset":723,"Text":"Myokardinfarkte","Traits":[],"Score":0.44469425082206726,"Type":"DX_NAME","Id":9}];
    this.resultJSON = JSON.stringify(this.result);
    /*let url = 'http://127.0.0.1:5000/aws/entries';
    let request = this.http.get(url, { params: {text: this.text} });

    request.subscribe(data => this.result = JSON.stringify(data));*/
  }
}
