import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SuccessGenreListType } from '../../interfaces/success-genre-list-type.interface';

@Injectable({
    providedIn: 'root'
})

export class HttpGenreListService {
    constructor(private http: HttpClient) { }
    getGenreList(): Observable<SuccessGenreListType> {
        const observable = this.http.get<SuccessGenreListType>
        ('https://api.themoviedb.org/3/genre/movie/list?api_key=0eb5295dc19e2f7dfac08fcdb7f33ebe&language=en-US');
        return observable;
    }
}
