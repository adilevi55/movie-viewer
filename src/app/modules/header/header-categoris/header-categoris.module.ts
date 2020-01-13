import { NgModule } from '@angular/core';
import { SheardModule } from '../../root-modules/shear.module';
import { HeaderCategoryLinksComponent } from 'src/app/components/root-components/header/header-category-links/header-category-links.component';

const components = [
  HeaderCategoryLinksComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    SheardModule
  ],
  exports: [...components]
})

export class HeaderCategorisModule { }
