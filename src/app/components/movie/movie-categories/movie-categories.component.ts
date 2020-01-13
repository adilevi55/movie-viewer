import { Component, Input } from '@angular/core';

@Component({
  selector: 'mv-movie-categories',
  templateUrl: './movie-categories.component.html',
})
export class MovieCategoriesComponent{
  @Input()category;


}
