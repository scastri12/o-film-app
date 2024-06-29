import { Component, OnInit } from '@angular/core';
import { FilmService } from './../../services/film.service';
import { Film } from './../../../shared/models/film.model';
import { FilmComponent } from './../../components/film/film.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  filmList: Film[] = [];
  constructor(private readonly filmService: FilmService) { }

  ngOnInit(): void {
    this.filmService.getFilms().subscribe(
      (response) => {
        this.filmList = response.results;
        console.log("response: ", this.filmList);
      },
      (error) => {
        console.error('Error fetching movies', error);
      }
    );
  }

  fromChild(event: string) {
    console.log('estamos en el padre');
    console.log(event);

  }

}
