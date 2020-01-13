import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SuccessMoviesType } from '../../interfaces/success-movies-type';

@Injectable({
  providedIn: 'root'
})

export class HttpMoviesService {
  constructor(private http: HttpClient) { }

  getMoviesByCategories(category: string, page: number): Observable<SuccessMoviesType> {
    const observable = this.http.get<SuccessMoviesType>
    ('https://api.themoviedb.org/3/movie/' + category + '?api_key=0eb5295dc19e2f7dfac08fcdb7f33ebe&language=en-US&page=' + page);
    return observable;
  }
  getMoviesByGenre(page: number, genre: number): Observable<SuccessMoviesType> {
    const observable = this.http.get<SuccessMoviesType>
    ('https://api.themoviedb.org/3/genre/' + genre + '/movies?api_key=0eb5295dc19e2f7dfac08fcdb7f33ebe&language=en-US&page=' + page);
    return observable;
  }
}
