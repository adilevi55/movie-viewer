import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListByGenereComponent } from 'src/app/components/movies/movie-list-by-genre/movie-list-by-genre-component';
    const routes : Routes = [
        {path:'',component:MovieListByGenereComponent},
    ]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MoviesByGenereRoutingModule { }