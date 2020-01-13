import { Component, Input } from '@angular/core';

@Component({
  selector: 'mv-movie-details-layout',
  templateUrl: './movie-details-layout.component.html',
  styleUrls: ['./movie-details-layout.component.css']
})
export class MovieDetailsLayoutComponent {

  @Input() movieDetails

}
