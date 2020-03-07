import { Injectable } from '@angular/core';
import '../types';
import {HTTPService} from './http.service';
import { Study } from '../models/Study.model';

let DEBUG = true;
@Injectable({
  providedIn: 'root'
})

export class StudyAIService {
  $Server: string = 'undefined';
  $Fields: Array<string> = [];
  $Selected: Array<string> = [];

  constructor(private http: HTTPService) {
      this.$Server = DEBUG ? 'http://127.0.0.1:5000/' : 'http://13.93.43.192:80/';
      this.$Fields = ['condition', 'brief_summary', 'brief_title', 'detailed_description', 'brief_description'];
  }

  ToggleSelection(id: string): Array<string> {
    const idx = this.$Selected.indexOf(id);
    if (idx >= 0) {
      this.$Selected = this.$Selected.filter(obj => obj !== id);
    } else {
      this.$Selected.push(id);
      this.$Selected = this.$Selected.map(obj => obj);
    }
    return this.$Selected;
  }

  GetStudy(parameter: {id: Array<string>; fields: Array<string>}) {
    let fields = this.$Fields;
    fields = parameter.fields && parameter.fields.length ? parameter.fields : fields;
    const id = parameter.id;
    const url = `${this.$Server}Study?id=${id.join(',')}&fields=${ fields.join(',')}`;
    return this.http.get<any>(String(url)).toPromise().then((response) => {
      console.log('StudyAIService.GetStudy:SUCCESS');
      return response.body.data.map((item, idx) => {
        const selected = this.$Selected.indexOf(id[idx]) >= 0 ? true : false;
        return new Study(idx, id[idx], item['brief_title'], item, selected);
      });
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
