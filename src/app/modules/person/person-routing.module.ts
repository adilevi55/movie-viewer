import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonLayoutComponent } from 'src/app/components/person/person-layout/person-layout.component';
    const routes : Routes = [
        {path:'',component:PersonLayoutComponent},
    ]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PersonRoutingModule { }