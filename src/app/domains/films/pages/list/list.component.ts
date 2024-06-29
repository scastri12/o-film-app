import { Component, OnInit } from '@angular/core';
import { FilmService } from './../../services/film.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  filmList: any;
  constructor(private readonly filmService: FilmService) { }

  ngOnInit(): void {
    this.filmService.getFilms().subscribe(
      (response) => {
        this.filmList = response;
        console.log("response: ", response);
      },
      (error) => {
        console.error('Error fetching movies', error);
      }
    );
  }

}
