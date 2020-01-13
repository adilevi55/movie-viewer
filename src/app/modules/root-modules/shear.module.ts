import { NgModule } from '@angular/core';
import { MovieListCardComponent } from 'src/app/components/shear-components/movie-lists/movie-list-card/movie-list-card.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MovieListLayoutComponent } from 'src/app/components/shear-components/movie-lists/movie-list-layout/movie-list-layout.component';
import { PagerComponent } from 'src/app/components/shear-components/pager/pager.component';
import { AngualrMaterialModule } from '../angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';
import { MenuNavComponent } from 'src/app/components/shear-components/menu-nav/menu-nav.component';

const components = [
    MovieListCardComponent,
    MovieListLayoutComponent,
    PagerComponent,
    MenuNavComponent
];
const modules = [
    RouterModule,
    CommonModule,
    FormsModule,
    AngualrMaterialModule
];

@NgModule({
    declarations: [...components],
    imports: [...modules],
    exports: [...components, ...modules]
})

export class SheardModule { }
