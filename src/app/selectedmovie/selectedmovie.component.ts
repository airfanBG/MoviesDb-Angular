import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-selectedmovie',
  templateUrl: './selectedmovie.component.html',
  styleUrls: ['./selectedmovie.component.css']
})
export class SelectedmovieComponent implements OnInit {
myMovie;
  constructor(private route:ActivatedRoute, private movieService:MoviesService) {

   }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      let id=params['id'];
      this.movieService.getMovie(id).subscribe((selectedMovie)=>{
          this.myMovie=selectedMovie;
      })
    })
  }

}
