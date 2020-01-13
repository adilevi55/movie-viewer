import { Component, Input } from '@angular/core';

@Component({
  selector: 'mv-movie-details-img',
  templateUrl: './movie-details-img.component.html',
  styleUrls: ['./movie-details-img.component.css']
})
export class MovieDetailsImgComponent {
  @Input() poster;

  errorHandler(event) {
    event.target.src = "https://cdn.browshot.com/static/images/not-found.png";
  }
}
