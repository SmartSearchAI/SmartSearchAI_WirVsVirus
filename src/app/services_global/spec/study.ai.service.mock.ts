import { Injectable } from '@angular/core';
import {HTTPService} from '../http.service';
import * as mock_projectdata_info from './data/ProjectData.info.response.json';
import * as mock_projectdata from './data/ProjectData.response.json';
import * as mock_studydata from './data/GetStudy.response.json';
import * as mock_matchesdata from './data/GetMatches.response.json';

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
    const test_data = mock_matchesdata.response;
    return this.http.get_mock<any>(test_data);
  }
}
