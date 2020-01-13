import { Component, OnInit } from '@angular/core';
import { HttpMoviesService } from 'src/app/services/http-request/http-movies.service';
import { ActivatedRoute, Params } from '@angular/router';
import { CategoryStringManipulationService } from 'src/app/services/category/category-string-manipulation-service';
@Component({
    selector: 'mv-movie-list-by-category',
    templateUrl: './movie-list-by-category.component.html'
})

export class MovieListByCategoryComponent implements OnInit {

    categoryName: string;
    categoryForHttpReq: string;
    movies;
    currentPage: number;
    totalPages: number;

    constructor(
        private http: HttpMoviesService,
        private route: ActivatedRoute,
        private categoryStringManipulationService: CategoryStringManipulationService,
    ) { }

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {

            this.currentPage = params.page;

            let categoryStringObject = this.categoryStringManipulationService
                .changeCategoryString(params.categoryName);

            this.categoryName = categoryStringObject.categoryText;
            this.categoryForHttpReq = categoryStringObject.categoryForHttpReq;

            this.http.getMoviesByCategories(this.categoryForHttpReq, this.currentPage)
                .subscribe(response => {
                    this.movies = response.results;
                    this.totalPages = response.total_pages;
                });
        });
    }
}