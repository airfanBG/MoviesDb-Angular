import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import {MoviesService} from './service/movies.service';
import { NavigationComponent } from './navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';

@NgModule({
   declarations: [
      AppComponent,
      MoviesComponent,
      NavigationComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      HttpModule

   ],
   providers: [
      MoviesService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
