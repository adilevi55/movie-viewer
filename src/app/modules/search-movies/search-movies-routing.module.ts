import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetInputValueComponent } from 'src/app/components/search-movies/get-input-value/get-input-value.component';
const routes: Routes = [
        {path: '', component: GetInputValueComponent},
    ];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SearchMoviesRoutingModule { }
