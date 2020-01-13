import { Component, OnInit } from '@angular/core';
import { HttpMoviesService } from 'src/app/services/http-request/http-movies.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'mv-movie-list-by-genre',
    templateUrl: './movie-list-by-genre-component.html',
})

export class MovieListByGenereComponent implements OnInit {
    movies;
    currentPage: number;
    totalPages: number;
    ganreName: string;
    ganreId: number;

    constructor(private http: HttpMoviesService,private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {

            this.currentPage = params.page;
            this.ganreName = params.genreName;
            this.ganreId = params.genreId;

            this.http.getMoviesByGenre(this.currentPage, this.ganreId)
            .subscribe(response => {
                
                this.movies = response.results;
                this.totalPages = response.total_pages;     
            });
        });
    }
}