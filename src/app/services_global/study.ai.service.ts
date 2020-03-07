import { Injectable } from '@angular/core';
import '../types';
import {HTTPService} from './http.service';

let DEBUG = true;
@Injectable({
  providedIn: 'root'
})
export class StudyAIService {
  $Server: string;
  $URL: object;

  constructor(private http: HTTPService) {
      this.$Server = DEBUG ? 'http://127.0.0.1:5000/' : 'http://13.93.43.192:80/';
  }

  GetStudy(parameter: {id: Array<string>; fields: Array<Array<string>>}) {
    const query = '{0}Study?id={1}&fields={2}';
    const id = ['NCT00000102', 'NCT00000111'];
    const fields = [['brief_summary', 'brief_title', 'detailed_description', 'brief_description'], [ 'criteria']];

    const url = `${this.$Server}Study?id=${id.join(',')}&fields=${ fields[0].join(',')}`;
    return this.http.get<any>(String(url)).toPromise().then((response) => {
        console.log('StudyAIService.GetStudy:SUCCESS');
    });
  }

  GetAvailableData() {
    const url = `${this.$Server}ProjectData/Info`;
    return this.http.get<any>(String(url)).toPromise().then((response) => {
      console.log('StudyAIService.GetAvailableData:SUCCESS');
      return response.body.IDs;
  });
  }

  GetKeyWordsFromText(parameter: {text: string, count: number}) {
    const text = parameter.text;
    const count = parameter.count.toString();
    const url = `${this.$Server}KeyWordsFromText?text=${text}&count=${count}`;
    return this.http.get<any>(String(url)).toPromise().then((response) => {
      console.log('StudyAIService.GetKeyWordsFromText:SUCCESS');
      return response.body.data;
    });
  }

  GetProjections(parameter: {id: Array<string>}) {
    let url = `${this.$Server}ProjectData`;
    if (parameter.id.length > 0) {
      url = `${url}?id=${parameter.id.join(',')}`;
    }
    return this.http.get<any>(String(url)).toPromise().then((response) => {
      console.log('StudyAIService.ProjectData:SUCCESS');
      const result: { data: Array< Array<number> >, IDs: Array<string> } = {data: [], IDs: []};
      result.data = response.body.data;
      result.IDs = response.body.IDs;
      return result;
    });
  }
}
