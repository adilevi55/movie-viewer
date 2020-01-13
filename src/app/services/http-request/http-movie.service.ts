import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieTrailers } from '../../interfaces/movie.interface';
import { MovieRecommendationsType } from '../../interfaces/movie.interface';
import { Moviecredits } from '../../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})

export class HttpMovieService {
  constructor(private http: HttpClient) { }

  getMoviesDetailsById(id: number): Observable<object> {
    const observable = this.http.get<object>
    ('https://api.themoviedb.org/3/movie/' + id + '?api_key=0eb5295dc19e2f7dfac08fcdb7f33ebe&language=en-US');
    return observable;
  }
  getMovieTrailers(id: number): Observable<MovieTrailers> {
    const observable = this.http.get<MovieTrailers>
    ('https://api.themoviedb.org/3/movie/' + id + '/videos?api_key=0eb5295dc19e2f7dfac08fcdb7f33ebe&language=en-US');
    return observable;
  }
  getMovieRecommendations(id: number): Observable<MovieRecommendationsType> {
    const observable = this.http.get<MovieRecommendationsType>
    ('https://api.themoviedb.org/3/movie/' + id + '/recommendations?api_key=0eb5295dc19e2f7dfac08fcdb7f33ebe&language=en-US');
    return observable;
  }
  getMoviecredits(id: number): Observable<Moviecredits> {
    const observable = this.http.get<Moviecredits>
    ('https://api.themoviedb.org/3/movie/' + id + '/credits?api_key=0eb5295dc19e2f7dfac08fcdb7f33ebe&language=en-US');
    return observable;
  }
}
