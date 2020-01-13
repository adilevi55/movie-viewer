import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector:'mv-input-search-movie',
    templateUrl:'./input-search-movie.component.html',
    styleUrls:['./input-search-movie.component.css']


})

export class InputSearchMovieComponent {
    search;
    movies;
    constructor(private router: Router){}
    getMoviesByInput(){
        this.router.navigateByUrl( `/movie-list/search/${this.search}/1`);    
    }
}