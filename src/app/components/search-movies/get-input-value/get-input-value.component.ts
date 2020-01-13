import { Component, OnInit } from '@angular/core';
import { HttpSearchMovieService } from 'src/app/services/http-request/http-search-movie.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'mv-get-input-value',
  templateUrl: './get-input-value.component.html',
})
export class GetInputValueComponent implements OnInit {
  search;
  movies;
  totalPages;
  currentPage;
  constructor(
    private http: HttpSearchMovieService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.currentPage = params.page;
      this.search = params.searchValue;

      this.http.getSearch(this.search, this.currentPage).subscribe(response => {
        if (response.results.length === 0) {
          alert(this.search + " movie not found")
        }
        else {
          this.movies = response.results;
          this.totalPages = response.total_pages;
        }
      })
    })
  }

}
