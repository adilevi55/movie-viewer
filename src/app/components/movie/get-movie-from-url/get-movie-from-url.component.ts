import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpMovieService } from 'src/app/services/http-request/http-movie.service';

@Component({
  selector: 'mv-get-movie-from-url',
  templateUrl: './get-movie-from-url.component.html',
})
export class GetMovieFromUrlComponent implements OnInit {
  movieDetails;
  constructor(private route: ActivatedRoute, private httpMovieService: HttpMovieService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.httpMovieService.getMoviesDetailsById(params.id)
      .subscribe(movieDetails => {
        this.movieDetails = movieDetails;
      });
    });
  }

}
