import { Component, Input } from '@angular/core';

@Component({
  selector: 'mv-movie-layout',
  templateUrl: './movie-layout.component.html',
})
export class MovieLayoutComponent {
  @Input() movieDetails;
}
