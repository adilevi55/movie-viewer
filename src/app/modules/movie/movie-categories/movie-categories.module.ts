import { NgModule } from '@angular/core';
import { MovieCategoriesComponent } from 'src/app/components/movie/movie-categories/movie-categories.component';
import { SheardModule } from '../../root-modules/shear.module';

@NgModule({
  declarations: [MovieCategoriesComponent],
  imports: [
    SheardModule
  ],
  exports:[MovieCategoriesComponent]
})
export class MovieCategoriesModule { }
