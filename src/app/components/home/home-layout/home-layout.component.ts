import { Component } from '@angular/core';

@Component({
  selector: 'mv-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent{
  categories = [
    {
      "categoryName":"Playing Now Movies",
      "categoryUrlName":"now_playing",
    },
    {
      "categoryName":"Upcoming Movies",
      "categoryUrlName":"upcoming",
    },
    {
      "categoryName":"Top Rated Movies",
      "categoryUrlName":"top_rated",
    }
  ]
}
