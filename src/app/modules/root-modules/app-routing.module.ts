import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageNotFound404Component } from 'src/app/components/root-components/page-not-found404/page-not-found404.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
{path: 'home', loadChildren: () => import('../home/home.module')
.then(m => m.HomeModule)},
{path: 'movie/:id', loadChildren: () => import('../movie/movie.module')
.then(m => m.MovieModule)},
{path: 'movie-list/genre/:genreName/:genreId/:page', loadChildren: () => import('../movies-by-genere/movies-by-genere.module')
.then(m => m.MoviesByGenereModule)},
{path: 'movie-list/category/:categoryName/:page', loadChildren: () => import('../movies-by-category/movies-by-category.module')
.then(m => m.MoviesByCategoryModule)},
{path: 'movie-list/search/:searchValue/:page', loadChildren: () => import('../search-movies/search-movies.module')
.then(m => m.SearchMoviesModule)},
{path: 'person/:id', loadChildren: () => import('../person/person.module')
.then(m => m.PersonModule)},
{path: '**',  component: PageNotFound404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
