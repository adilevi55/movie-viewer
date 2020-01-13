import { Component, Input } from '@angular/core';

@Component({
  selector: 'mv-search-movies-layout',
  templateUrl: './search-movies-layout.component.html',
})
export class SearchMoviesLayoutComponent {

  @Input()movies;
  //pager Inputs
  @Input()currentPage;
  @Input()totalPages;
  @Input()search; 

}
