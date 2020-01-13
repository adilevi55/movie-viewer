import { NgModule } from '@angular/core';
import { SheardModule } from '../../root-modules/shear.module';
import { HeaderGenerMenuListComponent } from 'src/app/components/root-components/header/header-gener-menu/header-gener-menu-list/header-gener-menu-list.component';

@NgModule({
  declarations: [HeaderGenerMenuListComponent],
  imports: [
    SheardModule
  ],
  exports: [HeaderGenerMenuListComponent]
})
export class HeaderGenerModule { }
