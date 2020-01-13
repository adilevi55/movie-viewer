import { NgModule } from '@angular/core';
import { RecommendationsMoviesComponent } from 'src/app/components/movie/recommendations-movies/recommendations-movies.component';
import { SheardModule } from '../../root-modules/shear.module';

@NgModule({
  declarations: [RecommendationsMoviesComponent],
  imports: [SheardModule],
  exports:[RecommendationsMoviesComponent]
})
export class RecommendationsMoviesModule { }
