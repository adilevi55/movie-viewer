import { Component, OnInit } from '@angular/core';
import { HttpGenreListService } from 'src/app/services/http-request/http-genre-list.service';

@Component({
  selector: 'mv-header-gener-menu-list',
  templateUrl: './header-gener-menu-list.component.html',
})
export class HeaderGenerMenuListComponent implements OnInit{
  generList;
  navList;
  navbarName:string = "Geners";
  constructor(private http:HttpGenreListService){}

  ngOnInit() {
    this.http.getGenreList().subscribe(genreList =>{
      this.generList = genreList.genres;
      
      this.navList = this.generList
      .map((x,index) => x = { path: `movie-list/genre/${genreList.genres[index].name}/${genreList.genres[index].id}/1`, label:genreList.genres[index].name}  )
    });
  }
}
