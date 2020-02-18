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
}
