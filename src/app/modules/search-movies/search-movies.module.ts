import { NgModule } from '@angular/core';
import { SearchMoviesLayoutComponent } from 'src/app/components/search-movies/search-movies-layout/search-movies-layout.component';
import { GetInputValueComponent } from 'src/app/components/search-movies/get-input-value/get-input-value.component';
import { InputSearchMovieComponent } from 'src/app/components/search-movies/input-search-movie/input-search-movie.component';
import { SheardModule } from '../root-modules/shear.module';
import { SearchMoviesRoutingModule } from './search-movies-routing.module';

const components = [
  InputSearchMovieComponent,
  GetInputValueComponent,
  SearchMoviesLayoutComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    SheardModule,
    SearchMoviesRoutingModule
  ],
  exports: [...components, SearchMoviesRoutingModule]
})
export class SearchMoviesModule { }
