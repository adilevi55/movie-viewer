import { Component, Input } from '@angular/core';

@Component({
  selector: 'mv-movie-navbar',
  templateUrl: './movie-navbar.component.html',
})
export class MovieNavbarComponent {

  @Input() movieDetails

}
