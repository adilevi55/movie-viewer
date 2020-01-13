import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class LoadPrevious10PagesService {
    constructor(
        private router: Router
    ) {}
    loadPrevious10PagesForListByGenderOrCategory(pagesArray, genreName, genreId, categoryName, search) {
        pagesArray = pagesArray.map(a => Number(a) - 10);
        if (genreName) {
            this.router.navigateByUrl( `/movie-list/genre/${genreName}/${genreId}/${pagesArray[9] }`);
        } else if (categoryName) {
            this.router.navigateByUrl( `/movie-list/category/${categoryName}/${pagesArray[9] }`);
        } else {
            this.router.navigateByUrl( `/movie-list/search/${search}/${pagesArray[9] }`);
        }
        return pagesArray;
     }
}
