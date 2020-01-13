import { NgModule } from '@angular/core';
import { MovieTrailerBtnComponent } from 'src/app/components/movie/movie-trailer-btn/movie-trailer-btn.component';
import { SheardModule } from '../../root-modules/shear.module';
import { MovieTrailerDialogComponent } from 'src/app/components/movie/movie-trailer-dialog/movie-trailer-dialog.component';

const components = [
  MovieTrailerBtnComponent,
  MovieTrailerDialogComponent,
]

@NgModule({
  entryComponents:[MovieTrailerDialogComponent], 
  declarations: [...components],
  imports: [SheardModule],
  exports:[...components]
})
export class MovieTrailerModule { }
