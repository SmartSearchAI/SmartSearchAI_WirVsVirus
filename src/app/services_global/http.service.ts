import { Injectable } from '@angular/core';
import { HttpClient , HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HTTPService {
  constructor(private http: HttpClient) { }
  get<T>(url: string): Observable<HttpResponse<T>> {
    console.log(`HTTP[GET] - ${url}`)
    return this.http.get<T>(url, {observe: 'response'});
  }
  get_mock<T>(data: any): Promise<any> {
    const mock = new Promise((resolve, reject) => {
      setTimeout( () => {
        resolve();
       }, 1000 );
    });
    const promises = [mock];
    return new Promise((resolve, reject) => {
        Promise.all(promises).then((responses) => {
          resolve(data);
        }, reason => {
          reject(reason);
        });
    });
  }

  
}
