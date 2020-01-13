import { Component, OnInit, Input } from '@angular/core';
import { HttpMovieService } from 'src/app/services/http-request/http-movie.service';

export interface DialogData {
    trailerUrl: string;
}
@Component({
    selector: "mv-recommendations-movies",
    templateUrl: "./recommendations-movies.component.html",
    styleUrls: ["./recommendations-movies.component.css"]
})

export class RecommendationsMoviesComponent implements OnInit {

    movieRecommendations = [];
    @Input() movieId: number;
    @Input() movieName: string;

    constructor(
        private httpMovieService: HttpMovieService,
    ) { }

    ngOnInit() {

        this.httpMovieService.getMovieRecommendations(this.movieId)
            .subscribe(movieRecommendations => {
                this.movieRecommendations = movieRecommendations.results;
            });
    };
};







