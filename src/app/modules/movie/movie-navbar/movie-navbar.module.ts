import { NgModule } from '@angular/core';
import { MovieNavbarComponent } from 'src/app/components/movie/movie-navbar/movie-navbar.component';
import { RecommendationsMoviesModule } from '../recommendations-movies/recommendations-movies.module';
import { MovieCastsModule } from '../movie-casts/movie-casts.module';
import { SheardModule } from '../../root-modules/shear.module';

@NgModule({
  declarations: [MovieNavbarComponent],
  imports: [
    RecommendationsMoviesModule,
    MovieCastsModule,
    SheardModule
  ],
  exports:[MovieNavbarComponent]
})
export class MovieNavbarModule { }
