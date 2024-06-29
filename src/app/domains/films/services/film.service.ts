import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private apiKey = '80945adf2485a6c293d0c53cb21e088c';
  private apiUrl = 'https://api.themoviedb.org/3/movie/popular';
  private headers = new HttpHeaders({
    'api_key': this.apiKey
  });
  private popularMoviesUrl = '/movie/popular';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any> {
    return this.http.get<any>(this.apiUrl, {
        headers: this.headers,
      });
  }
}
