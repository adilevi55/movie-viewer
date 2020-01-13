import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from 'src/app/components/home/home-layout/home-layout.component';
const routes: Routes = [
        {path: '', component: HomeLayoutComponent},
    ];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
