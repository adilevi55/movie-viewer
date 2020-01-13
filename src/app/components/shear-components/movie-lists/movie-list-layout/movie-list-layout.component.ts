import { Component, Input } from '@angular/core';

@Component({
  selector: 'mv-movie-list-layout',
  templateUrl: './movie-list-layout.component.html',
  styleUrls: ['./movie-list-layout.component.css']
})
export class MovieListLayoutComponent {
  @Input()movies;
  @Input()categoryName; 
  @Input()ganreName;
  @Input()notNeedVoteData;

  //pager Inputs
  @Input()currentPage;
  @Input()totalPages;
  @Input()ganreId;
  @Input()categoryForHttpReq;

  // search Input
  @Input()search; 
  @Input()notNeedPager; 

}
