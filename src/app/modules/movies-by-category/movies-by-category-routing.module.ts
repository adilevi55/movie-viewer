import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListByCategoryComponent } from 'src/app/components/movies/movie-list-by-category/movie-list-by-category.component';
    const routes : Routes = [
        {path:'',component:MovieListByCategoryComponent},
    ]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MoviesByCategoryRoutingModule { }