import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import {SelectedmovieComponent} from './selectedmovie/selectedmovie.component';
import {MoviesService} from './service/movies.service';
import { NavigationComponent } from './navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {RouterModule,Route} from '@angular/router';


@NgModule({
   declarations: [
      AppComponent,
      MoviesComponent,
      NavigationComponent,
      SelectedmovieComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      HttpModule,
      RouterModule.forRoot([
          {path:'',component: MoviesComponent},
          {path: 'movie/:id',component: SelectedmovieComponent}
      ])

   ],
   providers: [
      MoviesService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
