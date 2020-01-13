import { Component, Input } from '@angular/core';

@Component({
  selector: 'mv-movie-time-date-vote',
  templateUrl: './movie-time-date-vote.component.html',
  styleUrls: ['./movie-time-date-vote.component.css']
})
export class MovieTimeDateVoteComponent {
  @Input() movieDetails;

}
