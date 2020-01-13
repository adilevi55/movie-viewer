import { NgModule } from '@angular/core';
import { AngualrMaterialModule } from '../angular-material/angular-material.module';
import { MoviesByCategoryRoutingModule } from './movies-by-category-routing.module';
import { MovieListByCategoryComponent } from 'src/app/components/movies/movie-list-by-category/movie-list-by-category.component';
import { SheardModule } from '../root-modules/shear.module';

const moduls = [
    MoviesByCategoryRoutingModule,
    AngualrMaterialModule,
    SheardModule
];
const components = [
    MovieListByCategoryComponent,
]
@NgModule({
    declarations:[...components],
    imports:[...moduls],
    exports:[...moduls,...components]
})

export class MoviesByCategoryModule  {}