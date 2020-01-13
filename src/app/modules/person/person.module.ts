import { NgModule } from '@angular/core';
import { PersonDetailsComponent } from 'src/app/components/person/person-details/person-details.component';
import { PersonRoutingModule } from './person-routing.module';
import { PersonMoviesComponent } from 'src/app/components/person/person-movies/person-movies.component';
import { PersonLayoutComponent } from 'src/app/components/person/person-layout/person-layout.component';
import { SheardModule } from '../root-modules/shear.module';

const moduls = [
   PersonRoutingModule,
    SheardModule
];
const components = [
    PersonDetailsComponent,
    PersonMoviesComponent,
    PersonLayoutComponent
];

@NgModule({
    declarations:[...components],
    imports:[...moduls],
    exports:[...moduls,...components]
})

export class PersonModule  {}