import { NgModule } from '@angular/core';
import { MovieRoutingModule } from './movie-routing.module';
import { SheardModule } from '../root-modules/shear.module';
import { GetMovieFromUrlComponent } from 'src/app/components/movie/get-movie-from-url/get-movie-from-url.component';
import { MovieLayoutModule } from './movie-layout/movie-layout.module';

const modules = [
    MovieRoutingModule,
    SheardModule,
    MovieLayoutModule
];
const components = [
    GetMovieFromUrlComponent
]
@NgModule({
    declarations:[...components],
    imports:[...modules],
    exports:[...modules],
})
export class MovieModule{}