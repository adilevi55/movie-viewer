import { NgModule } from '@angular/core';
import { MoviesByGenereRoutingModule } from './movies-by-genere-routing.module';
import { AngualrMaterialModule } from '../angular-material/angular-material.module';
import { MovieListByGenereComponent } from 'src/app/components/movies/movie-list-by-genre/movie-list-by-genre-component';
import { SheardModule } from '../root-modules/shear.module';

const moduls = [
    MoviesByGenereRoutingModule,
    AngualrMaterialModule, 
    SheardModule
];
const components = [
    MovieListByGenereComponent,
];

@NgModule({
    declarations:[...components],
    imports:[...moduls],
    exports:[...moduls,...components]
})

export class MoviesByGenereModule  {}