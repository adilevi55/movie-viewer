import { Component, Input } from '@angular/core';

@Component({
  selector: 'mv-movie-list-card',
  templateUrl: './movie-list-card.component.html',
})
export class MovieListCardComponent{

@Input()m;
@Input()notNeedVoteData;

}
