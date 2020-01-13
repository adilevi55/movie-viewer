import { NgModule } from '@angular/core';
import { MovieLayoutComponent } from 'src/app/components/movie/movie-layout/movie-layout.component';
import { MovieDetailsModule } from '../movie-details/movie-details.module';
import { MovieNavbarModule } from '../movie-navbar/movie-navbar.module';
import { SheardModule } from '../../root-modules/shear.module';

const modules =[
  MovieDetailsModule,
  MovieNavbarModule
]

@NgModule({
  declarations: [MovieLayoutComponent],
  imports: [
    SheardModule,
    ...modules
  ],
  exports:[MovieLayoutComponent,...modules]
})
export class MovieLayoutModule { }
