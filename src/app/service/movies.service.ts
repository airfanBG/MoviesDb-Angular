import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Movie} from '../Movie';

const apiKey="047ab5b003bdd36beb0443c69723d45c";

@Injectable()

export class MoviesService {
path: string= 'https://api.themoviedb.org/3/';
popular:string = 'discover/movie?sort_by=popularity.desc';
authentication:string = '&api_key=';
theaters:string='discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22';

constructor(private httpclient: HttpClient) { 


}
    getPopular():Observable<object>{
    return this.httpclient
                .get(`${this.path}${this.popular}${this.authentication}${apiKey}
                `);
    }
    getTheaters():Observable<Object>{
        return this.httpclient.get(`${this.path}${this.theaters}${this.authentication}${apiKey}
        `);
    }
}
