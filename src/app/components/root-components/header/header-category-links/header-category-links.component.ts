import { Component } from '@angular/core';

@Component({
  selector: 'mv-header-category-links',
  templateUrl: './header-category-links.component.html',
})
export class HeaderCategoryLinksComponent {
  navbarName: string = 'Categories';
  navLinks = [
    { path: "movie-list/category/upcoming/1", label: "Upcoming" },
    { path: "movie-list/category/top-rated/1", label: "Top Rate" },
    { path: "movie-list/category/now-playing/1", label: "Playing Now" },
    { path: "movie-list/category/popular/1", label: "Popular" },
  ];

}
