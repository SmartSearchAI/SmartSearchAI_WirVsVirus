import { Injectable } from '@angular/core';
import '../types';
import { Study } from '../models/Study.model';
import {HTTPService} from './http.service';

@Injectable({
  providedIn: 'root'
})
export class StudyAIService {
  $Server: string;
  $URL: object;
  constructor(private http: HTTPService) {
      this.$Server = 'http://127.0.0.1:5000/';
  }

  GetStudy(parameter: {id: Array<string>; fields: Array<Array<string>>}) {
    const query = '{0}Study?id={1}&fields={2}';
    const id = ['NCT00000102', 'NCT00000111'];
    const fields = [['brief_summary', 'brief_title', 'detailed_description', 'brief_description'], [ 'criteria']];
    const url = String(query).format(this.$Server, id.join(','), fields[0].join(','));
    const promise = this.http.get<any>(url).toPromise();
    
    promise.then((response) => {
        let data = response.body['data'];
        console.log('GetStudy Ready');
    });
    return promise;
  }
}
