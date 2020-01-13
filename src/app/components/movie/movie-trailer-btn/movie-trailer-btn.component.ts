import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HttpMovieService } from 'src/app/services/http-request/http-movie.service';
import { MovieTrailerDialogComponent } from '../movie-trailer-dialog/movie-trailer-dialog.component';

export interface DialogData {
  trailerUrl: string;
}
@Component({
  selector: 'mv-movie-trailer-btn',
  templateUrl: './movie-trailer-btn.component.html',
  styleUrls: ['./movie-trailer-btn.component.css']
})

export class MovieTrailerBtnComponent implements OnInit {
  @Input() movieId;
  @Input() title;
  movieHaveNoTrailer: boolean = true;
  trailerUrl: string;

  constructor(
    private httpMovieService: HttpMovieService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {

    this.httpMovieService.getMovieTrailers(this.movieId)
    .subscribe(trailers => {
      if (trailers.results.length === 0) {
        this.movieHaveNoTrailer = false;
      } else {
        this.trailerUrl = trailers.results[0].key;
      }
    });
  }

  openDialog(): void {
    this.dialog.open(MovieTrailerDialogComponent, {
      width: '80%', height: '600px',
      data: { trailerUrl: this.trailerUrl }
    });
  }

}
