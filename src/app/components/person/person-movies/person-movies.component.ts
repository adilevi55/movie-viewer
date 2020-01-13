import { Component, Input } from '@angular/core';

@Component({
  selector: 'mv-person-movies',
  templateUrl: './person-movies.component.html'
})

export class PersonMoviesComponent {
  @Input() movies;

}

