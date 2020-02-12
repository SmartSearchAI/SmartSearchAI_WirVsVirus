import { Injectable } from '@angular/core';
import '../types';
import { Study, Dictionary} from '../models/Study.model';
import {HTTPService} from './http.service';

@Injectable({
  providedIn: 'root'
})
export class StudyAIService {
  $Server: string;
  $URL: object;

  constructor(private http: HTTPService) {
      this.$Server = 'https://13.93.43.192:80/';
  }

  GetStudy(parameter: {id: Array<string>; fields: Array<Array<string>>}) {
    const query = '{0}Study?id={1}&fields={2}';
    const id = ['NCT00000102', 'NCT00000111'];
    const fields = [['brief_summary', 'brief_title', 'detailed_description', 'brief_description'], [ 'criteria']];

    const id_str = id.join(',');
    const fields_str = fields[0].join(',');
    const url = `${this.$Server}Study?id=${id_str}&fields=${fields}`;
    return this.http.get<any>(String(url)).toPromise().then((response) => {
        console.log('StudyAIService.GetStudy:SUCCESS');
    });
  }

  GetKeyWordsFromText(parameter: {text: string, count: number}){
    const text = parameter.text;
    const count = parameter.count.toString();
    const url = `${this.$Server}KeyWordsFromText?text=${text}&count=${count}`;
    return this.http.get<any>(String(url)).toPromise().then((response) => {
      console.log('StudyAIService.GetKeyWordsFromText:SUCCESS');
      return response.body.data;
    });
  }
}
