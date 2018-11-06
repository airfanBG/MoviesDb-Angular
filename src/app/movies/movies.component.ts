import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../service/movies.service';
import{Movie} from '../Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
popular:Object;
theaters:Object;

  constructor(private movieService:MoviesService) { }

  ngOnInit() {
    this.movieService.getPopular().subscribe(x=>{this.popular=x;}
     
      );
    this.movieService.getTheaters().subscribe(x=>{this.theaters=x;});
  }

}
