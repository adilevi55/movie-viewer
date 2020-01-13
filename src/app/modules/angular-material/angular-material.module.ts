import { NgModule,  } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {
        MatIconModule,
        MatSidenavModule,
         MatListModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTreeModule} from '@angular/material/tree';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';

const modules = [
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatTreeModule,
    FlexLayoutModule,
    MatDialogModule,
    MatInputModule
];
@NgModule({
 imports: [...modules],
 exports: [...modules]
})
export class AngualrMaterialModule {}
