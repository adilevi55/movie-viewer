import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonMoviesCast } from '../../interfaces/person-movies-cast.interface';

@Injectable({
    providedIn: 'root'
})
export class HttpPersonService {
    constructor(private http: HttpClient) {}

    getPerson(id: number): Observable<[]> {
        const observable =  this.http.get<[]>
        ('https://api.themoviedb.org/3/person/' + id + '?api_key=0eb5295dc19e2f7dfac08fcdb7f33ebe&language=en-US');
        return observable;
    }
    getPersonMoviesCast(id: number): Observable<PersonMoviesCast> {
        const observable =  this.http.get<PersonMoviesCast>
        ('https://api.themoviedb.org/3/person/' + id + '/movie_credits?api_key=0eb5295dc19e2f7dfac08fcdb7f33ebe&language=en-US');
        return observable;
    }
}
