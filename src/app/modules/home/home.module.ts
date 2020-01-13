import { NgModule } from '@angular/core';
import { SheardModule } from '../root-modules/shear.module';
import { HomeCategoryTelmplateComponent } from 'src/app/components/home/home-category-telmplate/home-category-telmplate.component';
import { HomeLayoutComponent } from 'src/app/components/home/home-layout/home-layout.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeCategoryTelmplateComponent, HomeLayoutComponent],
  imports: [
    SheardModule,
    HomeRoutingModule
  ],
  exports: [HomeCategoryTelmplateComponent, HomeLayoutComponent]
})
export class HomeModule { }
