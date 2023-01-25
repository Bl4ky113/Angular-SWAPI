import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  API_URL: string = 'https://swapi.dev/api/';
  request_params!: HttpParams;

  constructor(private http: HttpClient) { }

  getPlanetList (pageNumber=1): Observable<object> {
    return this.http.get(this.API_URL + 'planets/?page=' + pageNumber);
  }
}
