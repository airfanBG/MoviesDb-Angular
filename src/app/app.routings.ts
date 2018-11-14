import{Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { MoviesComponent } from './movies/movies.component';
import { SelectedmovieComponent } from './selectedmovie/selectedmovie.component';


const routes: Routes=[
    {path: '', component:MoviesComponent},
    {path: 'movie/:id',component:SelectedmovieComponent}
];