import { NgModule } from '@angular/core';
import { FooterComponent } from 'src/app/components/root-components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MovieModule } from '../movie/movie.module';
import { PersonModule } from '../person/person.module';
import { MoviesByCategoryModule } from '../movies-by-category/movies-by-category.module';
import { MoviesByGenereModule } from '../movies-by-genere/movies-by-genere.module';
import { SheardModule } from './shear.module';
import { PageNotFound404Component } from 'src/app/components/root-components/page-not-found404/page-not-found404.component';
import { HeaderModule } from '../header/header.module';
import { HomeModule } from '../home/home.module';

const components = [
    FooterComponent,
    PageNotFound404Component
];
const moudles = [
    AppRoutingModule,
    HttpClientModule,
    MovieModule,
    PersonModule,
    MoviesByCategoryModule,
    MoviesByGenereModule,
    SheardModule,
    HeaderModule,
    HomeModule
];
@NgModule({
    declarations: [...components],
    imports: [...moudles],
    exports: [...moudles, ...components],
})
export class CoreMoudle { }
