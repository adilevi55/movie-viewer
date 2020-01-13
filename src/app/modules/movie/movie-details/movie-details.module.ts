import { NgModule } from '@angular/core';
import { MovieDetailsLayoutComponent } from 'src/app/components/movie/movie-details/movie-details-layout/movie-details-layout.component';
import { MovieDetailsImgComponent } from 'src/app/components/movie/movie-details/movie-details-img/movie-details-img.component';
import { MovieTimeDateVoteComponent } from 'src/app/components/movie/movie-details/movie-time-date-vote/movie-time-date-vote.component';
import { SheardModule } from '../../root-modules/shear.module';
import { MovieTrailerModule } from '../movie-trailer/movie-trailer.module';
import { MovieCategoriesModule } from '../movie-categories/movie-categories.module';

const components = [
  MovieDetailsLayoutComponent,
  MovieTimeDateVoteComponent,
  MovieDetailsImgComponent, 
]

@NgModule({
  declarations: [...components],
  imports: [
    MovieTrailerModule,
    SheardModule,
    MovieCategoriesModule
  ],
  exports:[...components]
})
export class MovieDetailsModule { }
