import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class LoadPreviousPageService {
    constructor(
        private router: Router
    ) {}
    loadPreviousPageForListByGenderOrCategory(currentPage, genreName, genreId, categoryName, search) {
        currentPage--;

        if (genreName) {
            this.router.navigateByUrl( `/movie-list/genre/${genreName}/${genreId}/${currentPage}`);
        } else if (categoryName) {
            this.router.navigateByUrl( `/movie-list/category/${categoryName}/${currentPage}`);
        } else {
            this.router.navigateByUrl( `/movie-list/search/${search}/${currentPage}`);
        }
    }
}
