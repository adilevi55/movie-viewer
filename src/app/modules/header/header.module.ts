import { NgModule } from '@angular/core';
import { HeaderLayoutComponent } from 'src/app/components/root-components/header/header-layout/header-layout.component';
import { SheardModule } from '../root-modules/shear.module';
import { HeaderGenerModule } from './header-gener/header-gener.module';
import { HeaderCategorisModule } from './header-categoris/header-categoris.module';
import { SearchMoviesModule } from '../search-movies/search-movies.module';

const modules = [
  HeaderGenerModule,
  HeaderCategorisModule,
  SearchMoviesModule,
];

@NgModule({
  declarations: [HeaderLayoutComponent],
  imports: [
    SheardModule,
   ...modules
  ],
  exports: [HeaderLayoutComponent]
})
export class HeaderModule { }
