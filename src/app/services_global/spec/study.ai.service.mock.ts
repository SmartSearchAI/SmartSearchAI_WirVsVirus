import { Injectable } from '@angular/core';
import {HTTPService} from '../http.service';
import { Study } from '../../models/Study.model';
import * as mock_id_data from './data/id.results.json';
import * as mock_projectdata_info from './data/ProjectData.info.response.json';
import * as mock_projectdata from './data/ProjectData.response.json';
import * as mock_studydata from './data/GetStudy.response.json'
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
  constructor(private http: HTTPService) {
  }


  GetStudy(parameter: {id: Array<string>; fields: Array<string>}) {
    // @TODO Mock Request
    const test_data = mock_studydata.response;
    return this.http.get_mock<any>(test_data);
  }

  GetAvailableData() {
    // @TODO Mock Request
    const test_data = mock_projectdata_info.response;
    return this.http.get_mock<any>(test_data);
  }


  GetKeyWordsFromText(parameter: {text: string, count: number}) {
    const text = parameter.text;
    const count = parameter.count.toString();

    // @TODO Mock Request
    const test_data = {};
    return this.http.get_mock<any>(test_data);
  }


  GetProjections(parameter: {id: Array<string>}) {
    // @TODO Mock Request
    const test_data = mock_projectdata.response;
    return this.http.get_mock<any>(test_data);
  }

  GetMatches(id: Array<string>, id_matches: Array<string> = []) {
    // @TODO Mock Request
    const test_data = {};
    return this.http.get_mock<any>(test_data);
  }
}
