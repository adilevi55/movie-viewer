import { NgModule } from '@angular/core';
import { CastMovieComponent } from 'src/app/components/movie/cast-movie/cast-movie.component';
import { SheardModule } from '../../root-modules/shear.module';

const components = [
  CastMovieComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    SheardModule
  ],
  exports: [...components]
})
export class MovieCastsModule { }
