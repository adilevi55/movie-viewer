import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class LoadNext10PagesService {
    constructor(
        private router: Router
    ) {}

    loadNext10PageForListByGenderOrByCategory(pagesArray, genreName, genreId, categoryName, search) {
        pagesArray = pagesArray.map(a => a + 10);
        if (genreName) {
            this.router.navigateByUrl( `/movie-list/genre/${genreName}/${genreId}/${pagesArray[0] }`);
        } else if (categoryName) {
            this.router.navigateByUrl( `/movie-list/category/${categoryName}/${pagesArray[0] }`);
        } else {
            this.router.navigateByUrl( `/movie-list/search/${search}/${pagesArray[0] }`);
        }
        return pagesArray;
    }
}
