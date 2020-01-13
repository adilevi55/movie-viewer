import { Component, OnInit, Input } from '@angular/core';
import { HttpMoviesService } from 'src/app/services/http-request/http-movies.service';

@Component({
  selector: 'mv-home-category-telmplate',
  templateUrl: './home-category-telmplate.component.html',
  styleUrls: ['./home-category-telmplate.component.css']
})
export class HomeCategoryTelmplateComponent implements OnInit {

  @Input() categoryUrlName;
  @Input() categoryName;
  movies;

  constructor(private httpMoviesService: HttpMoviesService) { }

  ngOnInit() {
    this.httpMoviesService.getMoviesByCategories(this.categoryUrlName, 1)
      .subscribe(response => {
        this.movies = response.results.slice(-response.results.length, 4)
      })
  }

}
