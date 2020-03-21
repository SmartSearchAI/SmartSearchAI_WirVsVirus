import { Injectable } from '@angular/core';
import {HTTPService} from '../http.service';
import { Study } from '../../models/Study.model';
import * as mock_id_data from './data/id.results.json';
import * as mock_projectdata_info from './data/ProjectData.info.response.json';
import * as mock_projectdata from './data/ProjectData.response.json';
import { promise } from 'protractor';

let DEBUG = true;

// sort array ascending
const asc = arr => arr.sort((a, b) => a - b);

const sum = arr => arr.reduce((a, b) => a + b, 0);

const mean = arr => sum(arr) / arr.length;

// sample standard deviation
const std = (arr) => {
    const mu = mean(arr);
    const diffArr = arr.map(a => (a - mu) ** 2);
    return Math.sqrt(sum(diffArr) / (arr.length - 1));
};

const quantile = (arr, q) => {
    const sorted = asc(arr);
    const pos = (sorted.length - 1) * q;
    const base = Math.floor(pos);
    const rest = pos - base;
    if (sorted[base + 1] !== undefined) {
        return sorted[base] + rest * (sorted[base + 1] - sorted[base]);
    } else {
        return sorted[base];
    }
};


const DictValues = obj => Object.getOwnPropertyNames(obj).map(key => obj[key]);
const DictKeys = obj => Object.getOwnPropertyNames(obj);

@Injectable({
  providedIn: 'root'
})
export class StudyAIServiceMock {
  $Server = 'undefined';
  $Fields: Array<string> = [];
  $Available: Array<string> = [];
  $Unselected: Array<string> = [];
  $Selected: Array<string> = [];
  $Scores = null;
  $Q: Array<Array<number>>;

  constructor(private http: HTTPService) {
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
    this.UpdateSelection();
    return this.$Selected;
  }

  UpdateSelection() {
    this.$Selected =  this.$Selected.filter(obj => this.$Available.indexOf(obj) >= 0);
    this.$Unselected = this.$Available.filter(obj => this.$Selected.indexOf(obj) < 0);
    this.GetMatches(this.$Selected).then(result => {
      this.$Scores = result;
      const values = DictValues(result);
      this.$Q = [0.9, 0.75, 0.5, 0.25, 0.1].map(x => [x, quantile(values, x)]);
    });
  }


  GetStudy(parameter: {id: Array<string>; fields: Array<string>}) {
    let fields = this.$Fields;
    fields = parameter.fields && parameter.fields.length ? parameter.fields : fields;
    const id = parameter.id;
    // @TODO Mock Request
    const test_data = {};
    return this.http.get_mock<any>(test_data).then((response) => {
      console.log('StudyAIService.GetStudy:SUCCESS');
      return response.body.data.map((item, idx) => {
        const selected = this.$Selected.indexOf(id[idx]) >= 0 ? true : false;
        const rank = this.$Scores ? this.$Scores[id[idx]] : idx;
        return new Study(rank, id[idx], item['brief_title'], item, selected, this.$Q);
      });
    });
  }

  GetAvailableData() {
    // @TODO Mock Request
    const test_data = mock_projectdata_info.response;
    return this.http.get_mock<any>(test_data).then((response) => {
      console.log('StudyAIService.GetAvailableData:SUCCESS');
      this.$Available = response.body.IDs;
      this.UpdateSelection();
      return response.body.IDs;
    });
  }


  GetKeyWordsFromText(parameter: {text: string, count: number}) {
    const text = parameter.text;
    const count = parameter.count.toString();

    // @TODO Mock Request
    const test_data = {};
    return this.http.get_mock<any>(test_data).then((response) => {
      console.log('StudyAIService.GetKeyWordsFromText:SUCCESS');
      return response.body.data;
    });
  }


  GetProjections(parameter: {id: Array<string>}) {
    // @TODO Mock Request
    const test_data = mock_projectdata.response;
    return this.http.get_mock<any>(test_data).then((response) => {
      console.log('StudyAIService.ProjectData:SUCCESS');
      const result: { data: Array< Array<number> >, IDs: Array<string> } = {data: [], IDs: []};
      result.data = response.body.data;
      result.IDs = response.body.IDs;
      return result;
    });
  }

  GetMatches(id: Array<string>, id_matches: Array<string> = []) {
    // @TODO Mock Request
    const test_data = {};
    return this.http.get_mock<any>(test_data).then((response) => {
      console.log('StudyAIService.GetMatches:SUCCESS');
      return response.body.data;
    });
  }
}
