import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MoviesType } from '../../interfaces/movies-type.interface';

@Injectable({
    providedIn: 'root'
})
export class HttpSearchMovieService {
    constructor(private http: HttpClient) {}

    getSearch(searchVolue: string, page: number): Observable<MoviesType> {
        const observable =  this.http.get<MoviesType>
        ('https://api.themoviedb.org/3/search/movie?api_key=0eb5295dc19e2f7dfac08fcdb7f33ebe&language=en-US&query='
         + searchVolue + '&page=' + page + '&include_adult=false');
        return observable;
    }
}
