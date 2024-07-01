import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DetailFilmService {
  private url = 'http://api.themoviedb.org/3/movie/';
  private apiKey = '?api_key=f63cfa4150be2e71d9ef0336c0d19212'

  constructor(private http: HttpClient) {}

  getDetail(id: string): Observable<any> {
    return this.http.get<any>(this.url + id + this.apiKey);
  }
}
