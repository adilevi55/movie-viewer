import { Component, OnInit, Input } from '@angular/core';
import { HttpMovieService } from 'src/app/services/http-request/http-movie.service';

export interface DialogData {
    trailerUrl: string;
}
@Component({
    selector: "mv-cast-movie",
    templateUrl: "./cast-movie.component.html",
    styleUrls: ["./cast-movie.component.css"],
})

export class CastMovieComponent implements OnInit {
    @Input() movieId: number;
    @Input() movieName: string;
    cast = [];
    constructor(
        private httpMovieService: HttpMovieService,
    ) { }

    ngOnInit() {
        this.httpMovieService.getMoviecredits(this.movieId).subscribe(credits => {
            this.cast = credits.cast;
        });
    }
}