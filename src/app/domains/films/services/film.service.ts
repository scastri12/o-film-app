import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private popularFilmsUrl = 'http://api.themoviedb.org/3/movie/popular?api_key=f63cfa4150be2e71d9ef0336c0d19212';

  constructor(private http: HttpClient) {}

  getFilms(): Observable<any> {
    return this.http.get<any>(this.popularFilmsUrl);
  }
}
