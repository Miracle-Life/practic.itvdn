import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

interface DataResponse {
  popularity: number;
}

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})

export class SiteComponent implements OnInit {



  constructor(private http: HttpClient) { }
  films: any[];
  url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=e530dbf87d3f35fe1c14ace5c962084a&page=';
  i = 1;
  ngOnInit():
    void {
    this.http.get<any>(this.url)
      .subscribe(data => {
          this.films = data.results;
          console.log(data);
        }
      );
  }

  goRight() {
    this.http.get<any>(this.url + ++this.i)
      .subscribe(data => {
          this.films = data.results;
          console.log(this.films);
        }
      );
  }

  goLeft() {
    this.http.get<any>(this.url + --this.i)
      .subscribe(data => {
          this.films = data.results;
          console.log(this.films);
        }
      );
  }

}
