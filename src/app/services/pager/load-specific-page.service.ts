import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class LoadSpecificPagesService {
    constructor(
        private router: Router
    ) {}

    loadSpecificPageForListByGenderOrCategory(page, genreName, genreId, categoryName, search) {
        if (genreName) {
            this.router.navigateByUrl( `/movie-list/genre/${genreName}/${genreId}/${page}`);
        } else if (categoryName) {
            this.router.navigateByUrl( `/movie-list/category/${categoryName}/${page}`);
        } else {
            this.router.navigateByUrl( `/movie-list/search/${search}/${page}`);
        }
    }
}
