import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetMovieFromUrlComponent } from 'src/app/components/movie/get-movie-from-url/get-movie-from-url.component';
    const routes : Routes = [
        {path:'',component:GetMovieFromUrlComponent},
    ]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MovieRoutingModule { }